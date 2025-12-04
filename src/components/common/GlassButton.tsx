import React from 'react';
import { classNames } from '../../utils/classNames';

type GlassButtonVariant = 'default' | 'accent';
type GlassButtonSize = 'sm' | 'md';

type GlassButtonProps<T extends React.ElementType = 'button'> = {
  as?: T;
  variant?: GlassButtonVariant;
  size?: GlassButtonSize;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'size'>;

const sizeClasses: Record<GlassButtonSize, string> = {
  sm: 'min-h-[36px] px-3 py-1.5 text-sm',
  md: 'min-h-[44px] px-5 py-3 text-base'
};

const variantClasses: Record<GlassButtonVariant, string> = {
  default: 'glass glass-hover text-fg-secondary hover:text-fg-primary',
  accent: 'glass glass-accent glass-hover-accent text-white shadow-md shadow-accent-500/30'
};

export function GlassButton<T extends React.ElementType = 'button'>({
  as,
  variant = 'default',
  size = 'md',
  className,
  children,
  ...rest
}: GlassButtonProps<T>) {
  const Component = (as || 'button') as React.ElementType;
  const componentProps =
    Component === 'button'
      ? { type: 'button' as const, ...rest }
      : rest;

  return (
    <Component
      className={classNames(
        'inline-flex items-center justify-center rounded-2xl font-medium transition-colors',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...(componentProps as object)}
    >
      {children}
    </Component>
  );
}


