import type { Role, CVData } from '../../models/cv-types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Chip } from '../common/Chip';
import { ExpandableSection } from '../common/ExpandableSection';

interface RoleCardProps {
  role: Role;
  cvData: CVData;
  index?: number;
}

export function RoleCard({ role, cvData, index = 0 }: RoleCardProps) {
  // Get tech tag names for display
  const techNames = role.techTagIds
    .map(id => cvData.techTags.find(tag => tag.id === id)?.name)
    .filter((name): name is string => name !== undefined);

  // Format dates
  const startLabel = formatMonthYear(role.startDate);
  const endLabel = role.isCurrent ? 'Present' : formatMonthYear(role.endDate);

  return (
    <Card
      className="w-full animate-fadeUp"
      style={{ animationDelay: `${index * 120}ms`, opacity: 0 }}
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-fg-primary">
            {`${role.title} — ${role.company}`}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
            <p className="text-sm text-fg-muted">{role.location}</p>
            <span className="hidden sm:inline text-fg-muted/50">•</span>
            <p className="text-xs font-semibold tracking-[0.1em] uppercase text-fg-tertiary select-none">
              {startLabel} — {endLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Chips */}
      {role.chips.length > 0 && (
        <div className="mt-3 mb-4 flex gap-2 flex-wrap">
          {role.chips.map((chip, idx) => (
            <Chip key={idx}>
              {chip}
            </Chip>
          ))}
        </div>
      )}

      {/* Short summary */}
      <p className="mt-4 mb-4 text-base text-fg-primary leading-relaxed">
        {role.summary}
      </p>

      {/* Micro-metrics */}
      {role.microMetrics.length > 0 && (
        <div className="mt-4 mb-4 text-sm text-fg-secondary space-y-2">
          {role.microMetrics.map((metric, idx) => (
            <p key={idx}>{metric}</p>
          ))}
        </div>
      )}

      {/* Expandable details */}
      {(role.detailsBullets.length > 0 || (role.caseStudyLinks && role.caseStudyLinks.length > 0) || techNames.length > 0) && (
        <ExpandableSection title="More details, projects & links">
          <div className="space-y-4">
            {/* Details */}
            {role.detailsBullets.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-fg-tertiary mb-2">
                  Details
                </h4>
                <div className="space-y-2">
            {role.detailsBullets.map((bullet, idx) => (
              <p key={idx}>• {bullet}</p>
            ))}
                </div>
              </div>
            )}

            {/* Links */}
            {role.caseStudyLinks && role.caseStudyLinks.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-fg-tertiary pb-2 pt-4">
                  Links
                </h4>
                <div className="flex flex-wrap gap-3">
                {role.caseStudyLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    className="underline cursor-pointer hover:text-fg-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            {techNames.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-fg-tertiary pb-2 pt-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techNames.map((name, idx) => (
                    <Badge key={idx} variant="default">
                      {name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ExpandableSection>
      )}
    </Card>
  );
}

function formatMonthYear(date?: string | null) {
  if (!date) {
    return 'Present';
  }

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return 'Present';
  }

  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });
}

