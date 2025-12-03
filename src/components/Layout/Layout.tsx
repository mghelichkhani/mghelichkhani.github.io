import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer';
import type { CVData } from '../../models/cv-types';
import { GlassButton } from '../common/GlassButton';

interface LayoutProps {
  cvData: CVData;
  children: React.ReactNode;
}

export function Layout({
  cvData,
  children
}: LayoutProps) {
  return (
    <div className="min-h-screen text-fg-primary flex flex-col">
      {/* Header with summary and buttons */}
      <Header cvData={cvData} />

      {/* Main content */}
      <main className="flex-1 max-w-[90rem] mx-auto px-10 py-8 grid grid-cols-1 md:grid-cols-4 gap-10 relative">
        {/* Floating filter button for mobile */}
        <GlassButton
          className="md:hidden fixed bottom-4 right-4 px-5 py-3 text-base z-10 shadow-lg shadow-accent-500/40"
          variant="accent"
          onClick={() => {
            // Scroll to filters section
            const filtersSection = document.querySelector('details');
            filtersSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            filtersSection?.setAttribute('open', '');
          }}
        >
          Filters
        </GlassButton>

        <Sidebar cvData={cvData} />

        {/* Main column */}
        <section className="md:col-span-3 space-y-6">
          {children}
        </section>
      </main>

      {/* Footer */}
      <Footer cvData={cvData} />
    </div>
  );
}

