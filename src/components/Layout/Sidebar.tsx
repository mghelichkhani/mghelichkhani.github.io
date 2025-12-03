import type { CVData } from '../../models/cv-types';
import { Card } from '../common/Card';

interface SidebarProps {
  cvData: CVData;
}

export function Sidebar({ cvData }: SidebarProps) {
  const { lookingFor, contact, languages, otherInfo } = cvData;

  return (
    <aside className="md:col-span-1 space-y-6">
      {/* Basic info / looking for / contact */}
      <Card 
        as="section"
        className="overflow-hidden"
        padding="none"
      >
        {/* Profile image covering top */}
        <div className="relative w-full h-[17.5rem] -mb-20">
          <img 
            src="/photo.jpeg" 
            alt={cvData.person.fullName}
            className="w-full h-full object-cover select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
        </div>
        
        <div className="p-6 pt-24 space-y-5">
          <div>
            <p className="text-base font-semibold text-fg-primary">Based in {cvData.person.location}</p>
            <p className="text-sm text-fg-muted mt-1">Open for remote / hybrid (EU)</p>
          </div>

        {/* Looking for */}
        <div className="space-y-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-fg-muted select-none">
            {lookingFor.title}
          </h2>
          <ul className="text-sm text-fg-secondary space-y-2 list-disc list-inside">
            {lookingFor.bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2 pt-3">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-fg-muted select-none">
            Contact
          </h2>
          <ul className="text-sm text-fg-secondary space-y-2">
            <li>
              Email: <a href={`mailto:${contact.email}`} className="underline cursor-pointer">{contact.email}</a>
            </li>
            {contact.linkedInUrl && (
              <li>
                <a href={contact.linkedInUrl} className="underline cursor-pointer" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            )}
            {contact.githubUrl && (
              <li>
                <a href={contact.githubUrl} className="underline cursor-pointer" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            )}
          </ul>
        </div>
        </div>
      </Card>

      {/* Languages & other */}
      <Card 
        as="section"
        className="space-y-4"
      >
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-fg-muted select-none">
            Languages
          </h2>
          <ul className="mt-2 space-y-2 text-fg-secondary">
            {languages.map((lang, idx) => (
              <li key={idx} className="text-sm">{lang.name} — {lang.level}</li>
            ))}
          </ul>
        </div>

        {otherInfo.length > 0 && (
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-fg-muted mt-3 select-none">
              Other
            </h2>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-fg-secondary">
              {otherInfo.map((item, idx) => (
                <span key={idx}>{item.value}</span>
              ))}
            </div>
          </div>
        )}
      </Card>
    </aside>
  );
}

