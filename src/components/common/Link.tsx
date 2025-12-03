import React from 'react';
import { classNames } from '../../utils/classNames';

type CommonProps = {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
};

type AnchorLinkProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonLinkProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = AnchorLinkProps | ButtonLinkProps;

export function Link(props: LinkProps) {
  const classes = classNames(
    'relative inline-block text-fg-secondary transition-colors duration-300',
    'hover:text-fg-primary',
    'after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current',
    'after:transition-all after:duration-300 after:ease-in-out',
    'hover:after:w-full',
    props.active && 'text-fg-primary after:w-full',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2',
    props.className
  );

  if ('href' in props && props.href) {
    const { active, className, children, href, ...anchorProps } = props as AnchorLinkProps;
    return (
      <a href={href} {...anchorProps} className={classes}>
        {children}
      </a>
    );
  }

  const { active, className, children, type, ...buttonProps } = props as ButtonLinkProps;
  return (
    <button type={type ?? 'button'} {...buttonProps} className={classes}>
      {children}
    </button>
  );
}

