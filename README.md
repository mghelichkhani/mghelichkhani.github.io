# Interactive CV – Functional & Data Model

> **Scope**  
> This document defines the **data structures**, **relations**, and **UX behavior** for the interactive CV.  
> Styling, theming, and visual design are **out of scope** and will be added later.

---

## 1. High-level concept

The interactive CV is a **single-page web app** that:

- Shows a **timeline of roles**, a **projects view**, and a **skills/tech view**.
- Adapts to different audiences via **“View this CV as…”** modes:
  - `Recruiter`
  - `Engineering Manager`
  - `Frontend peer`
  - `Product / UX`
- Lets users **filter and sort** roles/projects by:
  - Focus (`Impact`, `UX/UI`, `Performance`, `Leadership`, `Experiments`)
  - Tech clusters (`React ecosystem`, `Vue ecosystem`, `Tailwind/Alpine`, `APIs & data`)
  - Text search (roles, companies, summaries)
- Provides a **minimal tech snapshot** in the sidebar + a **“full tech history” modal**:
  - Searchable list of all tools/tech.
  - Tag size roughly reflects level of expertise.
  - Optional logos/icons per tool.

All UI behavior should be driven by a **single JSON-like data structure**, not hard-coded text.

---

## 2. Core UX flows

### 2.1 Landing behavior (default view)

When someone opens the page:

- Active tab: **Timeline**
- Active view mode: **Recruiter** (or `Default` mapping to recruiter-style behavior).
- Filters:
  - No focus filters pre-selected (or a conservative default like `Impact`).
  - No tech cluster filters pre-selected.
- Timeline is **sorted by “Relevance to focus”**:
  - If no focus is selected, relevance mostly falls back to recency.

Sidebar shows:

- Basic info
- “Looking for” info
- Contact
- Languages / Other
- Tech snapshot (few core technologies)
- Filters & focus

---

### 2.2 View modes

“View this CV as: `Recruiter` / `Engineering Manager` / `Frontend peer` / `Product/UX`”

Each **view mode** can:

- Change which sections/fields are **emphasized or visible**.
- Change **default filters / sorting**.
- Optionally pre-select **focus modes** or **tech clusters**.

Conceptual behavior:

- **Recruiter**
  - Emphasize: dates, locations, titles, “Looking for”, languages.
  - De-emphasize: deep technical details, long case-study text.
- **Engineering Manager**
  - Emphasize: impact, metrics, responsibilities, team size, architecture notes.
- **Frontend peer**
  - Emphasize: tech stack, implementation details, projects, code/sample links, full tech history.
- **Product / UX**
  - Emphasize: collaboration with design, UX involvement, experiments, user impact.

View modes should **not** mutate the underlying data, only control what is rendered and which filters are pre-applied.

---

### 2.3 Filters & focus

Sidebar: **Filters & focus** (interactive):

- **Search roles / companies**
  - Text search over roles (title, company, summary, chips, etc.).

- **Highlight roles that emphasize**
  - `Impact`
  - `UX / UI`
  - `Performance`
  - `Leadership`
  - `Experiments`

- **Tech focus**
  - `React ecosystem`
  - `Vue ecosystem`
  - `Tailwind / Alpine`
  - `APIs & data`

Effects:

- Search filters out roles/projects that don’t match.
- Focus modes + tech focus:
  - Control visual emphasis.
  - Feed into a **relevance score** for sorting.

---

### 2.4 Timeline sorting

Timeline has a **Sort** control near the tabs:

- `Relevance to focus` (default)
- `Newest first`
- `Oldest first`

**Relevance** is computed from:

- Match between a role’s **focus tags** and selected focus filters.
- Match between a role’s **tech tags** and selected tech clusters.
- Recency (date-based freshness).

---

### 2.5 Tabs

Three main tabs:

1. **Timeline**
   - Chronological roles with:
     - Header (title, company, location)
     - Short summary
     - Micro-metrics
     - Chips
     - Expandable details section

2. **Projects**
   - Cards derived from a `projects[]` dataset.
   - Uses the same filter/view mode state.
   - Shows:
     - Title, summary
     - Tech tags, focus tags
     - Micro-metrics
     - Links (case study, GitHub, PRs, demo)

3. **Skills**
   - Aggregated view of skills/tech.
   - Driven by `techTags[]` and/or `skills[]` (optional).
   - Grouped by category (e.g. Technical / Soft / Product).

---

### 2.6 Full tech history modal

From sidebar:

- Button: **“View full tech history”** opens a modal.

Modal contains:

- Search input over all tech tags.
- Category filters, e.g.:
  - `All`
  - `Frontend`
  - `Backend / APIs`
  - `Tooling / DevOps`
  - `UX / Design`

- Tag “cloud” or grid:
  - Each tag has:
    - Name
    - Category
    - Level (1–5), rendered as different font sizes.
    - Optional logo/icon.

The modal is **read-only / query-only** and does **not** change the main view’s filters by default.

---

## 3. Data model

Below are suggested **TypeScript types**. For JSON, use the same structure as plain objects.

### 3.1 Root object

```ts
export interface CVData {
  person: Person;
  contact: Contact;
  lookingFor: LookingFor;
  languages: Language[];
  otherInfo: OtherInfoItem[];

  viewModes: ViewMode[];
  focusModes: FocusMode[];
  techClusters: TechCluster[];

  techTags: TechTag[];        // full tech history
  techSnapshotIds: string[];  // subset of techTags shown in sidebar

  roles: Role[];
  projects: Project[];

  skills?: Skill[];           // optional; can be derived from techTags instead
}
```

---

### 3.2 Person & basic info

```ts
export interface Person {
  fullName: string;           // "Morteza Ghelich Khani"
  shortName?: string;         // "Morty"
  location: string;           // "Vienna, AT"
  headline: string;           // one-liner under the name
  summary: string;            // hero paragraph
  coreStackLine: string;      // e.g. "Core stack: React, Vue, TypeScript, Tailwind, Growthbook, Node"
}

export interface Contact {
  email: string;
  linkedInUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
}

export interface LookingFor {
  title: string;              // "Looking for"
  bulletPoints: string[];     // e.g. ["Senior Frontend / UI Engineer", …]
}

export interface Language {
  name: string;               // "German"
  level: string;              // "C1", "Native", "Fluent"
}

export interface OtherInfoItem {
  category: string;           // e.g. "Other", "Hobby", "Certification"
  value: string;              // e.g. "Mentoring / knowledge sharing"
}
```

---

### 3.3 View modes & focus modes

```ts
export type ViewModeId =
  | "recruiter"
  | "engineeringManager"
  | "frontendPeer"
  | "productUx";

export interface ViewMode {
  id: ViewModeId;
  label: string;              // "Recruiter"
  description: string;        // short explanation
  defaultFocusModeIds: FocusModeId[];     // e.g. ["impact"]
  defaultTechClusterIds: TechClusterId[]; // usually empty

  visibility?: ViewVisibilityConfig;      // which fields to emphasize/show
}

export interface ViewVisibilityConfig {
  showMicroMetrics?: boolean;
  showDetailedBullets?: boolean;
  showTechLine?: boolean;
  showCaseStudyLinks?: boolean;
  // extend as needed
}
```

```ts
export type FocusModeId =
  | "impact"
  | "uxUi"
  | "performance"
  | "leadership"
  | "experiments";

export interface FocusMode {
  id: FocusModeId;
  label: string;              // "Impact"
  description: string;        // "Highlight roles with measurable outcomes"
}
```

---

### 3.4 Tech clusters

```ts
export type TechClusterId =
  | "reactEcosystem"
  | "vueEcosystem"
  | "tailwindAlpine"
  | "apisAndData";

export interface TechCluster {
  id: TechClusterId;
  label: string;              // "React ecosystem"
  description?: string;
  techTagIds: string[];       // e.g. ["react", "nextjs", "reactRouter"]
}
```

Tech clusters power the **Tech focus** filters and relevance scoring.

---

### 3.5 Tech tags (full tech history)

```ts
export type TechCategory =
  | "frontend"
  | "backendApis"
  | "toolingDevOps"
  | "uxDesign"
  | "other";

export interface TechTag {
  id: string;                 // "react", "typescript", "jest"
  name: string;               // "React"
  category: TechCategory;
  level: 1 | 2 | 3 | 4 | 5;   // 5 = strongest expertise
  altNames?: string[];        // ["React.js", "ReactJS"]
  logoUrl?: string;           // optional
}
```

- `techTags`:
  - Drives tech modal, tech focus, and role/project tech lines.
- `techSnapshotIds`:
  - Points to a small selection of tech tags for the sidebar snapshot.

---

### 3.6 Roles (timeline entries)

```ts
export interface Role {
  id: string;
  title: string;              // "Senior Frontend Engineer"
  company: string;            // "Refurbed"
  location: string;           // "Vienna, AT"
  startDate: string;          // ISO date "2022-04-01"
  endDate?: string | null;    // null / omit for current
  isCurrent?: boolean;

  focusModeIds: FocusModeId[]; // e.g. ["impact", "performance", "experiments"]
  techTagIds: string[];        // e.g. ["react", "typescript", "growthbook", "grpc"]

  summary: string;             // 1–2 sentence overview
  microMetrics: string[];      // e.g. ["~20% faster landing pages"]
  chips: string[];             // e.g. ["High-traffic", "A/B testing"]

  detailsBullets: string[];    // for expanded details
  caseStudyLinks?: Link[];     // labelled URLs
  projectIds?: string[];       // references into Project[]
}

export interface Link {
  label: string;
  url: string;
}
```

Relations:

- `Role.techTagIds` ↔ `TechTag` for filtering & display.
- `Role.focusModeIds` ↔ `FocusMode` for relevance.
- `Role.projectIds` ↔ `Project` for cross-navigation.

---

### 3.7 Projects

```ts
export interface Project {
  id: string;
  title: string;              // "Promotional Banner System"
  roleIds: string[];          // one or more roles
  summary: string;            // 1–2 sentences

  microMetrics?: string[];    // similar to Role.microMetrics
  techTagIds: string[];       // e.g. ["react", "typescript", "growthbook"]
  focusModeIds: FocusModeId[];// e.g. ["impact", "experiments"]

  links?: Link[];             // case study, GitHub, PRs, demos
}
```

The **Projects** tab:

- Uses same filters & view modes.
- Projects sorted by relevance similarly to roles.
- Role–project links used for context.

---

### 3.8 Skills (optional)

```ts
export type SkillCategory = "technical" | "soft" | "product";

export interface Skill {
  id: string;
  name: string;               // "Communication", "Mentoring", "A/B Testing"
  category: SkillCategory;
  description?: string;

  relatedFocusModeIds?: FocusModeId[];  // e.g. ["leadership"]
  relatedTechTagIds?: string[];         // e.g. ["growthbook"]
}
```

The **Skills** tab can:

- Group skills by `category`.
- Highlight skills relevant to active focus/view mode.

---

## 4. Relations & computed behavior

### 4.1 Relevance scoring (for “Relevance to focus” sort)

Each role/project gets a **relevance score** based on:

1. **Focus matches**
   - Count of selected `FocusModeId`s that appear in `role.focusModeIds` / `project.focusModeIds`.
   - Weighted (e.g. 3 points per match).

2. **Tech cluster matches**
   - For each selected `TechClusterId`, intersect cluster’s `techTagIds` with role/project `techTagIds`.
   - Weighted (e.g. 2 points per matching tag or per cluster).

3. **Recency**
   - Convert dates to a freshness score (e.g. 0–5).
   - Weighted lightly (e.g. up to 3 points).

Example pseudo-code:

```ts
function computeRelevanceScore(
  role: Role,
  selectedFocusModeIds: FocusModeId[],
  selectedTechClusterIds: TechClusterId[],
  cvData: CVData
): number {
  const focusMatches =
    role.focusModeIds.filter(id => selectedFocusModeIds.includes(id)).length;

  const clusterTagIds = new Set<string>();
  for (const clusterId of selectedTechClusterIds) {
    const cluster = cvData.techClusters.find(c => c.id === clusterId);
    cluster?.techTagIds.forEach(id => clusterTagIds.add(id));
  }

  const techMatches = role.techTagIds.filter(id => clusterTagIds.has(id)).length;

  const recencyScore = computeRecencyScore(role); // e.g. 0–5

  return focusMatches * 3 + techMatches * 2 + recencyScore * 1;
}
```

Sorting by “Relevance to focus” = sort by `score` descending, with `startDate` descending as a tiebreaker.

---

### 4.2 View modes + filters interaction

- Changing `selectedViewModeId`:
  - Applies the `defaultFocusModeIds` and `defaultTechClusterIds` of that `ViewMode`.
  - Applies `visibility` when rendering (which fields to show/hide).

- User can still manually adjust filters afterwards.

Recommended behavior:

- When switching view mode:
  - Reset filters to that mode’s defaults.
- When user adjusts filters:
  - Keep the selected view mode but treat it as “customized”.

---

### 4.3 Tech snapshot vs full tech history

- `techSnapshotIds`:
  - Small selection for sidebar badges.
  - Should be your **core daily tools**, not everything.

- `techTags`:
  - Master list used by:
    - Modal (search + tag cloud).
    - Tech focus clusters.
    - Tech lines in roles/projects.

---

### 4.4 Projects ↔ Roles

- `Role.projectIds` → “These projects were done during this role.”
- `Project.roleIds` → “This project belongs to these roles.”

UI ideas:

- From a role card:
  - “View projects” → switch to Projects tab filtered by that `roleId`.
- From a project card:
  - Show associated roles (title + company).

---

## 5. Implementation outline (for Cursor)

### 5.1 Suggested file structure

Example:

```text
src/
  data/
    cv-data.ts            // exports CVData object
  models/
    cv-types.ts           // TypeScript interfaces from this README
  state/
    useCVState.ts         // hooks for filters/view modes/sorting
    relevance.ts          // relevance scoring helpers
  components/
    Layout/
      Header.tsx
      Sidebar.tsx
    Timeline/
      TimelineView.tsx
      RoleCard.tsx
    Projects/
      ProjectsView.tsx
      ProjectCard.tsx
    Skills/
      SkillsView.tsx
    TechModal/
      TechHistoryModal.tsx
    Controls/
      ViewModeToggle.tsx
      FocusFilters.tsx
      TechClusterFilters.tsx
      SortControl.tsx
```

You can tweak names, but keep the separation between **data**, **types**, **state**, and **views**.

---

### 5.2 Data loading

- `cv-data.ts` exports a typed `CVData` object.
- Root component (e.g. `App.tsx`) loads `cvData` and passes it down or via context.

---

### 5.3 State & logic

Global-ish UI state (context or a top-level hook):

```ts
interface CVUIState {
  selectedViewModeId: ViewModeId;
  selectedFocusModeIds: FocusModeId[];
  selectedTechClusterIds: TechClusterId[];
  roleSearchQuery: string;
  timelineSort: "relevance" | "newest" | "oldest";
  isTechModalOpen: boolean;
}
```

Helpers:

- `getVisibleRoles(cvData, uiState): RoleWithScore[]`
- `getVisibleProjects(cvData, uiState): ProjectWithScore[]`
- `getVisibleTechTagsForModal(cvData, { query, category }): TechTag[]`

---

### 5.4 Component responsibilities

**Header**

- Renders:
  - Name, location, headline, summary, core stack line.
  - Contact + Download buttons.
  - “View this CV as” toggle → updates `selectedViewModeId` and applies defaults.

**Sidebar**

- Shows:
  - LookingFor, Contact, Languages, OtherInfo.
  - Tech snapshot (`techSnapshotIds`).
  - Button for Tech history modal → toggles `isTechModalOpen`.
  - Filters & focus (search, focus modes, tech clusters).

**TimelineView**

- Reads `cvData.roles` + `uiState`.
- Applies relevance + sorting + search + filters.
- Groups roles by year/period for year anchors.
- Renders `RoleCard` instances.
- `RoleCard` uses `visibility` from current `ViewMode` to decide what to show (micro-metrics, details, links, etc.).

**ProjectsView**

- Same filter/view mode state.
- Renders project cards sorted by relevance.
- Optional: support filtering by `roleId` when navigated from a role.

**SkillsView**

- Uses `skills[]` or derives from `techTags[]`.
- Groups by category (technical/soft/product).
- Optionally highlights skills connected to current focus/view mode.

**TechHistoryModal**

- Controlled by `isTechModalOpen`.
- Shows:
  - Search input.
  - Category filters.
  - Tag cloud with sizes from `TechTag.level`.