import type { CVData } from '../../models/cv-types';
import { GlassButton } from '../common/GlassButton';

interface FooterProps {
  cvData: CVData;
}

export function Footer({ cvData }: FooterProps) {
  const { contact } = cvData;
  const lastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <footer className="glass glass-light border-t border-white/20 mt-16">
      <div className="max-w-[90rem] mx-auto px-10 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left: Last updated */}
          <div className="text-sm text-fg-muted select-none">
            Last updated: {lastUpdated}
          </div>

          {/* Center: Contact details */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-fg-secondary">
            <a
              href={`mailto:${contact.email}`}
              className="underline cursor-pointer hover:text-fg-primary transition-colors"
            >
              {contact.email}
            </a>
            {contact.linkedInUrl && (
              <a
                href={contact.linkedInUrl}
                className="underline cursor-pointer hover:text-fg-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            {contact.githubUrl && (
              <a
                href={contact.githubUrl}
                className="underline cursor-pointer hover:text-fg-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>

          {/* Right: Download simplified CV */}
          <GlassButton className="px-6 py-3.5 border border-secondary-400/20 hover:border-secondary-400/30">
            Download simplified CV
          </GlassButton>
        </div>
      </div>
    </footer>
  );
}

