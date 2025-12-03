import React from 'react';
import { classNames } from '../../utils/classNames';

type BadgeSize = 'sm' | 'md';
type BadgeVariant = 'default' | 'accent' | 'focus';

type BadgeProps = {
  size?: BadgeSize;
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2'
};

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-surface-elevated/50 text-fg-tertiary',
  accent: 'bg-accent-600 text-white border border-1 border-accent-500',
  focus: 'bg-surface-elevated/50 text-fg-tertiary font-medium'
};

export function Badge({
  size = 'sm',
  variant = 'default',
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={classNames(
        'inline-flex items-center rounded-full select-none whitespace-nowrap',
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

