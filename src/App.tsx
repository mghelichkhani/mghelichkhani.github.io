import { cvData } from './data/cv-data';
import { useCVState } from './state/useCVState';
import { Layout } from './components/Layout/Layout';
import { TimelineView } from './components/Timeline/TimelineView';
import { SkillsView } from './components/Skills/SkillsView';
import { AnimatedTabs } from './components/Controls/AnimatedTabs';
import { Card } from './components/common/Card';
import { TechHistoryView } from './components/TechHistory/TechHistoryView';

function App() {
  const {
    state,
    setActiveTab,
    getVisibleRoles
  } = useCVState(cvData);

  const visibleRoles = getVisibleRoles();

  return (
    <>
      <Layout cvData={cvData}>
        {/* Tabs */}
        <Card 
          className="px-6 py-4 mb-6"
          padding="none"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Tabs */}
            <AnimatedTabs
              tabs={[
                { id: 'timeline', label: 'Timeline' },
                { id: 'skills', label: 'Skills' },
                { id: 'tech', label: 'Tech history' }
              ]}
              activeTab={state.activeTab}
              onTabChange={setActiveTab}
            />
          </div>
        </Card>

        {/* Tab panels with fade transition */}
        <div className="relative">
          {state.activeTab === 'timeline' && (
            <div
              key="timeline"
              role="tabpanel"
              id="timeline-panel"
              className="animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <TimelineView
                cvData={cvData}
                roles={visibleRoles}
              />
            </div>
          )}
          {state.activeTab === 'skills' && (
            <div
              key="skills"
              role="tabpanel"
              id="skills-panel"
              className="animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <SkillsView cvData={cvData} />
            </div>
          )}
          {state.activeTab === 'tech' && (
            <div
              key="tech"
              role="tabpanel"
              id="tech-panel"
              className="animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <TechHistoryView cvData={cvData} />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default App;

