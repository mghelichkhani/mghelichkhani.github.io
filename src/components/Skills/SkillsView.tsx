import type { CVData } from '../../models/cv-types';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

interface SkillsViewProps {
  cvData: CVData;
}

export function SkillsView({ cvData }: SkillsViewProps) {
  // If skills array exists, use it; otherwise derive from techTags
  const skills = cvData.skills || [];

  // Group skills by category dynamically to avoid skipping categories
  const skillsByCategory = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    const categoryKey = skill.category ?? 'other';
    if (!acc[categoryKey]) {
      acc[categoryKey] = [];
    }
    acc[categoryKey].push(skill);
    return acc;
  }, {});

  const categoryLabels: Record<string, string> = {
    technical: 'Technical',
    soft: 'Soft Skills',
    product: 'Product'
  };

  const formatCategoryLabel = (category: string) =>
    categoryLabels[category] ||
    category
      .replace(/([A-Z])/g, ' $1')
      .replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (match) => match.toUpperCase());

  const orderedCategories = Object.keys(skillsByCategory).sort((a, b) => {
    const desiredOrder = ['technical', 'product', 'soft'];
    const aIndex = desiredOrder.indexOf(a);
    const bIndex = desiredOrder.indexOf(b);
    if (aIndex === -1 && bIndex === -1) {
      return a.localeCompare(b);
    }
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  // If no skills defined, show a message
  if (skills.length === 0) {
    return (
      <Card padding="lg" className="text-center">
        <p className="text-base text-fg-tertiary">Skills information will be displayed here.</p>
        <p className="text-sm text-fg-muted mt-2">Skills can be defined in the CV data or derived from tech tags.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {orderedCategories.map((category) => (
        <section key={category}>
          <h2 className="text-base font-semibold mb-4 text-fg-primary select-none">
            {formatCategoryLabel(category)}
          </h2>
          <Card>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory[category].map((skill) => (
                <Badge variant='accent' key={skill.id}>
                  {skill.name}
                </Badge>
              ))}
            </div>
          </Card>
        </section>
      ))}
    </div>
  );
}

