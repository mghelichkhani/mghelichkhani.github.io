// Type definitions for Interactive CV data model
// Based on README.md specifications

export interface CVData {
  person: Person;
  contact: Contact;
  lookingFor: LookingFor;
  languages: Language[];
  otherInfo: OtherInfoItem[];

  techTags: TechTag[];        // full tech history

  roles: Role[];

  skills?: Skill[];           // optional; can be derived from techTags instead
}

// Person & basic info
export interface Person {
  fullName: string;           // "Morteza Ghelich Khani"
  shortName?: string;         // "Morty"
  location: string;           // "Vienna, AT"
  headline: string;           // one-liner under the name
  summary: string;            // hero paragraph
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

// Tech tags (full tech history)
export type TechCategory =
  | "frontendUi"
  | "apiBackend"
  | "toolingDevOps"
  | "uxDesign"
  | "platforms";

export interface TechTag {
  id: string;                 // "react", "typescript", "jest"
  name: string;               // "React"
  category: TechCategory;
  level: 1 | 2 | 3 | 4 | 5;   // 5 = strongest expertise
  altNames?: string[];        // ["React.js", "ReactJS"]
  logoUrl?: string;           // optional
}

// Roles (timeline entries)
export interface Role {
  id: string;
  title: string;              // "Senior Frontend Engineer"
  company: string;            // "Refurbed"
  location: string;           // "Vienna, AT"
  startDate: string;          // ISO date "2022-04-01"
  endDate?: string | null;    // null / omit for current
  isCurrent?: boolean;

  techTagIds: string[];        // e.g. ["react", "typescript", "growthbook", "grpc"]

  summary: string;             // 1–2 sentence overview
  microMetrics: string[];      // e.g. ["~20% faster landing pages"]
  chips: string[];             // e.g. ["High-traffic", "A/B testing"]

  detailsBullets: string[];    // for expanded details
  caseStudyLinks?: Link[];     // labelled URLs
}

export interface Link {
  label: string;
  url: string;
}

// Skills (optional)
export type SkillCategory = "technical" | "product" | "collaboration" | "leadership";

export interface Skill {
  id: string;
  name: string;               // "Communication", "Mentoring", "A/B Testing"
  category: SkillCategory;
  description?: string;

  relatedTechTagIds?: string[];         // e.g. ["growthbook"]
}

// UI State types
export interface CVUIState {
  activeTab: "timeline" | "skills" | "tech";
}

// Helper types for computed data
export interface RoleWithScore extends Role {
  relevanceScore: number;
}

export interface RoleGroup {
  label: string;   // "2022–2025" or "2022"
  roles: RoleWithScore[];
}

