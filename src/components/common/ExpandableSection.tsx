import React, { useState, useId } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { classNames } from '../../utils/classNames';

type ExpandableSectionProps = {
  title: string;
  defaultOpen?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ExpandableSection({
  title,
  defaultOpen = false,
  className,
  children
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const titleId = useId();
  const regionId = useId();

  return (
    <div className={classNames('mt-4', className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={classNames(
          'inline-flex items-center gap-2 text-sm text-fg-tertiary font-medium',
          'hover:text-fg-primary transition-colors duration-300 cursor-pointer',
          'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded-lg px-2 py-1'
        )}
        aria-expanded={isOpen}
        aria-controls={regionId}
      >
        <span id={titleId}>{title}</span>
        <FaChevronDown
          className={classNames(
            'transition-transform duration-300 ease-in-out text-xs',
            isOpen && 'rotate-180'
          )}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div
          id={regionId}
          className="mt-3 space-y-2 text-sm text-fg-secondary"
          role="region"
          aria-labelledby={titleId}
        >
          {children}
        </div>
      )}
    </div>
  );
}

