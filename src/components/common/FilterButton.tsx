import { GlassButton } from './GlassButton';

type FilterButtonProps = {
  label: string;
  isSelected: boolean;
  onToggle: () => void;
  ariaLabel?: string;
};

export function FilterButton({ label, isSelected, onToggle, ariaLabel }: FilterButtonProps) {
  return (
    <GlassButton
      onClick={onToggle}
      variant={isSelected ? 'accent' : 'default'}
      className="rounded-full"
      aria-label={ariaLabel || `Toggle ${label} filter`}
      aria-pressed={isSelected}
    >
      {label}
    </GlassButton>
  );
}

