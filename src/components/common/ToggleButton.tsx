import React, { useState, useId } from 'react';
import { classNames } from '../../utils/classNames';

type ToggleButtonSize = 'sm' | 'md' | 'lg';

type ToggleButtonProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  size?: ToggleButtonSize;
  className?: string;
  label?: string;
  children?: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>;

const sizeClasses: Record<ToggleButtonSize, { track: string; thumb: string; translate: string; padding: string }> = {
  sm: {
    track: 'w-11 h-6',
    thumb: 'w-5 h-5',
    translate: 'translate-x-5',
    padding: 'p-0.5'
  },
  md: {
    track: 'w-14 h-7',
    thumb: 'w-6 h-6',
    translate: 'translate-x-7',
    padding: 'p-0.5'
  },
  lg: {
    track: 'w-16 h-8',
    thumb: 'w-7 h-7',
    translate: 'translate-x-8',
    padding: 'p-0.5'
  }
};

export function ToggleButton({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  disabled = false,
  size = 'md',
  className,
  label,
  children,
  ...rest
}: ToggleButtonProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;
  const labelId = useId();

  const handleToggle = () => {
    if (disabled) return;
    
    const newChecked = !checked;
    if (!isControlled) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };

  const sizeConfig = sizeClasses[size];
  const ariaProps = children
    ? { 'aria-labelledby': labelId, 'aria-label': undefined }
    : { 'aria-label': label };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleToggle}
      className={classNames(
        'relative inline-flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 rounded-full transition-all duration-300 ease-in-out',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        checked 
          ? 'bg-gradient-to-r from-accent-500 to-accent-600 shadow-lg shadow-accent-500/50' 
          : 'bg-gradient-to-r from-slate-300 to-slate-400',
        sizeConfig.track,
        sizeConfig.padding,
        className
      )}
      {...ariaProps}
      {...rest}
    >
      {/* Track inner shadow */}
      <span className={classNames(
        'absolute inset-0 rounded-full',
        checked 
          ? 'bg-gradient-to-b from-white/20 to-transparent' 
          : 'bg-gradient-to-b from-white/30 to-transparent'
      )} />
      
      {/* Thumb with 3D effect */}
      <span
        className={classNames(
          'relative inline-block rounded-full transform transition-all duration-300 ease-in-out',
          'bg-gradient-to-br from-white via-slate-50 to-slate-100',
          'shadow-lg shadow-black/20',
          'border border-slate-200/50',
          sizeConfig.thumb,
          checked ? sizeConfig.translate : 'translate-x-0'
        )}
      >
        {/* Thumb inner highlight */}
        <span className="absolute inset-0.5 rounded-full bg-gradient-to-br from-white/80 to-transparent" />
        
        {/* Thumb inner shadow */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-black/5" />
      </span>
      
      {children && (
        <span id={labelId} className={classNames(
          'ml-3 text-sm font-medium transition-colors duration-300',
          checked ? 'text-fg-primary' : 'text-fg-secondary'
        )}>
          {children}
        </span>
      )}
    </button>
  );
}

