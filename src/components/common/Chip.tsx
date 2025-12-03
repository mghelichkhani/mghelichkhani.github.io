import React from 'react';
import { classNames } from '../../utils/classNames';

type ChipSize = 'sm' | 'md';
type ChipVariant = 'default' | 'accent';

type ChipProps = {
  size?: ChipSize;
  variant?: ChipVariant;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const sizeClasses: Record<ChipSize, string> = {
  sm: 'text-xs px-2.5 py-1',
  md: 'text-sm px-3 py-1.5'
};

const variantClasses: Record<ChipVariant, string> = {
  default: 'bg-secondary-500 text-fg-primary border border-fg-primary/20',
  accent: 'bg-accent-500 text-white border border-accent-500/30'
};

export function Chip({
  size = 'sm',
  variant = 'default',
  className,
  children,
  ...rest
}: ChipProps) {
  return (
    <span
      className={classNames(
        'inline-flex items-center rounded-full font-medium select-none whitespace-nowrap',
        'transition-colors duration-200',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}

