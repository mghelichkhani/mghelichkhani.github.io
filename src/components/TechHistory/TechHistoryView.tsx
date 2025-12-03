import { useMemo, useState } from 'react';
import type { CVData, TechCategory } from '../../models/cv-types';
import { highlightText } from '../../utils/highlightText';
import { Card } from '../common/Card';
import { FilterButton } from '../common/FilterButton';

interface TechHistoryViewProps {
  cvData: CVData;
}

export function TechHistoryView({ cvData }: TechHistoryViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | 'all'>('all');

  const filteredTags = useMemo(() => {
    return cvData.techTags.filter(tag => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const searchableText = [tag.name, ...(tag.altNames || [])]
          .join(' ')
          .toLowerCase();
        if (!searchableText.includes(query)) {
          return false;
        }
      }

      if (selectedCategory !== 'all' && tag.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [cvData.techTags, searchQuery, selectedCategory]);

  const sortedTags = useMemo(() => {
    return [...filteredTags].sort((a, b) => {
      if (b.level !== a.level) return b.level - a.level;
      return a.name.localeCompare(b.name);
    });
  }, [filteredTags]);

  const categories: Array<{ id: TechCategory | 'all'; label: string }> = [
    { id: 'all', label: 'All' },
    { id: 'frontendUi', label: 'Frontend & UI' },
    { id: 'apiBackend', label: 'APIs & Backend Integration' },
    { id: 'toolingDevOps', label: 'Tooling, DevOps & Performance' },
    { id: 'uxDesign', label: 'UX / Design & Prototyping' },
    { id: 'platforms', label: 'Platforms & CMS' },
  ];

  const getFontSize = (level: number) => {
    switch (level) {
      case 5:
        return 'text-lg font-semibold';
      case 4:
        return 'text-base font-semibold';
      case 3:
        return 'text-sm font-semibold';
      case 2:
        return 'text-sm';
      case 1:
      default:
        return 'text-xs';
    }
  };

  return (
    <div className="space-y-6">
      <Card padding="lg" className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2 text-fg-primary select-none">
            Full tech &amp; tools history
          </h2>
          <p className="text-sm text-fg-tertiary">
            Search all technologies I&apos;ve used. Tag size roughly reflects my level of expertise.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-ios rounded-2xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all text-fg-primary placeholder:text-fg-subtle"
            placeholder="Search for Vue, React, Vite, Figma..."
            aria-label="Search technologies"
          />

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <FilterButton
                key={cat.id}
                label={cat.label}
                isSelected={selectedCategory === cat.id}
                onToggle={() => setSelectedCategory(cat.id)}
                ariaLabel={`Filter by ${cat.label}`}
              />
            ))}
          </div>
        </div>

        <div className="glass-ios rounded-2xl p-4 overflow-y-auto text-sm min-h-[300px]">
          {sortedTags.length === 0 ? (
            <p className="text-fg-subtle text-center py-8">
              No technologies match your search.
            </p>
          ) : (
            <div className="flex flex-wrap gap-3">
              {sortedTags.map((tag) => (
                <span
                  key={tag.id}
                  className={`${getFontSize(tag.level)} h-5 flex items-center`}
                >
                  {highlightText(tag.name, searchQuery)}
                </span>
              ))}
            </div>
          )}
        </div>

        <p className="text-sm text-fg-muted">
          Tip: This view is mostly for tech leads / engineers who want to scan specific tools. The main CV only shows the core stack.
        </p>
      </Card>
    </div>
  );
}