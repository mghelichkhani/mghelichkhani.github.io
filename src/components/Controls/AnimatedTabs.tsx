import { motion } from 'framer-motion';

interface AnimatedTabsProps<T extends string = string> {
  tabs: Array<{ id: T; label: string }>;
  activeTab: T;
  onTabChange: (tabId: T) => void;
}

export function AnimatedTabs<T extends string = string>({ tabs, activeTab, onTabChange }: AnimatedTabsProps<T>) {
  return (
    <div className="inline-flex rounded-2xl glass-ios p-1.5 gap-1" role="tablist">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative px-5 py-2.5 rounded-lg text-base font-semibold transition-all duration-200 min-h-[44px] cursor-pointer glass-hover ${
              isActive
                ? 'text-fg-primary'
                : 'text-fg-tertiary hover:text-fg-primary'
            }`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`${tab.id}-panel`}
          >
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: `linear-gradient(135deg, rgba(var(--accent-400), 0.25) 0%, rgba(var(--accent-500), 0.2) 100%)`,
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: `1px solid rgba(var(--accent-400), 0.3)`,
                  boxShadow: 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.4), 0 2px 8px 0 rgba(var(--accent-500), 0.15)'
                }}
                layoutId="activeTab"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35
                }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}

