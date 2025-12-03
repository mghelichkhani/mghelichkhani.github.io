import type { CVData, RoleWithScore } from '../../models/cv-types';
import { RoleCard } from './RoleCard';
import { groupRolesByYear } from '../../state/relevance';
import { Card } from '../common/Card';

interface TimelineViewProps {
  cvData: CVData;
  roles: RoleWithScore[];
}

export function TimelineView({
  cvData,
  roles,
}: TimelineViewProps) {
  const roleGroups = groupRolesByYear(roles);

  if (roles.length === 0) {
    return (
      <Card padding="lg" className="text-center">
        <p className="text-base text-fg-tertiary">No roles match the current filters.</p>
      </Card>
    );
  }

  let globalIndex = 0;

  return (
    <div className="space-y-16">
      {roleGroups.map((yearGroup) => (
        <section key={yearGroup.year} className="space-y-6 animate-fadeUp" style={{ animationDelay: `${globalIndex * 120}ms`, opacity: 0 }}>
          <div className="flex justify-center">
            <span className="text-sm font-semibold tracking-[0.35em] uppercase text-fg-tertiary select-none">
              {yearGroup.year}
            </span>
          </div>

          <div className="space-y-6">
            {yearGroup.months.map((monthGroup) =>
              monthGroup.roles.map((role) => {
                const index = globalIndex++;
                return (
                  <TimelineCard
                  key={role.id}
                  index={index}
                  role={role}
                  cvData={cvData}
                />
                )
              })
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

function TimelineCard({
  role,
  cvData,
  index,
}: {
  role: RoleWithScore;
  cvData: CVData;
  index: number;
}) {
  return (
    <RoleCard
      role={role}
      index={index}
      cvData={cvData}
    />
  );
}

