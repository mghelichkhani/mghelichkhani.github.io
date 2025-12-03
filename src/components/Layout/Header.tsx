import type { CVData } from '../../models/cv-types';
import { GlassButton } from '../common/GlassButton';

interface HeaderProps {
  cvData: CVData;
}

export function Header({ cvData }: HeaderProps) {
  const { person, contact } = cvData;

  return (
    <header className="">
      <div className="max-w-[90rem] mx-auto px-10 py-6 space-y-5">
        {/* Name + primary actions */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold select-none text-fg-primary">
              {person.fullName}{person.shortName && ` "${person.shortName}"`}
            </h1>
            <p className="text-base text-fg-secondary select-none">
              {person.headline}
            </p>
          </div>

          <div className="flex gap-3">
            <GlassButton
              as="a"
              href={`mailto:${contact.email}`}
              variant="accent"
              className="px-6 py-3.5"
            >
              Contact
            </GlassButton>
            <GlassButton
              className="px-6 py-3.5 border border-secondary-400/20 hover:border-secondary-400/30"
            >
              Download simplified CV
            </GlassButton>
          </div>
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-4">
          <p className="text-base text-fg-primary max-w-2xl leading-relaxed">
            {person.summary}
          </p>
        </div>
      </div>
    </header>
  );
}

