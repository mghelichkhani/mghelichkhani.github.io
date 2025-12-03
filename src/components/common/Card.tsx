import React from 'react';
import { classNames } from '../../utils/classNames';

type CardVariant = 'default' | 'light' | 'modal';
type CardPadding = 'sm' | 'md' | 'lg' | 'none';

type CardProps<T extends React.ElementType = 'article'> = {
  as?: T;
  variant?: CardVariant;
  padding?: CardPadding;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'size'>;

const paddingClasses: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
};

const variantClasses: Record<CardVariant, string> = {
  default: 'glass-ios-card',
  light: 'glass-ios-light',
  modal: 'glass-ios-modal'
};

export function Card<T extends React.ElementType = 'article'>({
  as,
  variant = 'default',
  padding = 'md',
  className,
  children,
  ...rest
}: CardProps<T>) {
  const Component = (as || 'article') as React.ElementType;

  return (
    <Component
      className={classNames(
        variant === 'modal' ? 'rounded-3xl' : 'rounded-2xl',
        variant !== 'modal' && 'overflow-hidden',
        variantClasses[variant],
        paddingClasses[padding],
        className
      )}
      {...(rest as object)}
    >
      {children}
    </Component>
  );
}

