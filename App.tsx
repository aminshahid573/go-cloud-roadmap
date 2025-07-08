import React, { useMemo, useCallback, useState } from 'react';
import { ROADMAP_DATA, TOTAL_CHECKABLE_ITEMS } from './constants';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import RoadmapSection from './components/RoadmapSection';
import InfoSection from './components/InfoSection';
import AITutorModal from './components/AITutorModal';
import ConfirmationModal from './components/ConfirmationModal';
import { RoadmapItem as RoadmapItemType, RoadmapSectionType } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [completedItems, setCompletedItems] = useLocalStorage<Set<string>>(
    'completedGoCloudItems',
    new Set()
  );
  
  const [aiTutorState, setAITutorState] = useState<{isOpen: boolean; item: RoadmapItemType | null}>({
    isOpen: false,
    item: null,
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isResetModalOpen, setResetModalOpen] = useState(false);

  const handleToggleComplete = useCallback((id: string) => {
    setCompletedItems(prev => {
      const newCompleted = new Set(prev);
      if (newCompleted.has(id)) {
        newCompleted.delete(id);
      } else {
        newCompleted.add(id);
      }
      return newCompleted;
    });
  }, [setCompletedItems]);

  const progress = useMemo(() => {
    if (TOTAL_CHECKABLE_ITEMS === 0) return 0;
    return (completedItems.size / TOTAL_CHECKABLE_ITEMS) * 100;
  }, [completedItems]);

  const handleOpenAITutor = useCallback((item: RoadmapItemType) => {
    setAITutorState({ isOpen: true, item });
  }, []);

  const handleCloseAITutor = useCallback(() => {
    setAITutorState({ isOpen: false, item: null });
  }, []);

  const handleConfirmReset = useCallback(() => {
    setCompletedItems(new Set());
    setResetModalOpen(false);
  }, [setCompletedItems]);

  const filteredData = useMemo(() => {
    if (!searchQuery) {
      return ROADMAP_DATA;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    
    const filtered = ROADMAP_DATA.map(section => {
      const filteredItems = section.items.filter(item => {
        const itemContent = [
          item.title,
          item.description,
          ...(item.isCheckable ? (item as RoadmapItemType).subTopics || [] : [])
        ].join(' ').toLowerCase();
        return itemContent.includes(lowercasedQuery);
      });

      return { ...section, items: filteredItems };
    }).filter(section => section.items.length > 0);
    
    return filtered;

  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-slate-950 font-sans p-4 sm:p-6 lg:p-8">
       <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div 
        className="fixed inset-0 -z-20 h-full w-full bg-transparent"
        style={{
            backgroundImage: 'radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.1) 0px, transparent 50%), radial-gradient(at 76% 22%, hsla(204, 96%, 60%, 0.08) 0px, transparent 50%), radial-gradient(at 49% 96%, hsla(195, 99%, 66%, 0.1) 0px, transparent 50%)'
        }}
    ></div>
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <Header 
          progress={progress} 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onResetClick={() => setResetModalOpen(true)}
        />

        <main className="mt-8">
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            <AnimatePresence>
            {filteredData.map((section, index) => {
               if (section.type === 'info') {
                 return <InfoSection key={section.id} section={section} />;
               }
               return (
                <RoadmapSection
                  key={section.id}
                  section={section}
                  completedItems={completedItems}
                  onToggleComplete={handleToggleComplete}
                  onOpenAITutor={handleOpenAITutor}
                />
              )
            })}
            </AnimatePresence>
          </motion.div>
        </main>

        <footer className="text-center mt-12 text-slate-500 text-sm">
          <p>Built for your Cloud & Go journey. Happy coding!</p>
        </footer>
      </div>

       <AITutorModal
        isOpen={aiTutorState.isOpen}
        onClose={handleCloseAITutor}
        item={aiTutorState.item}
      />
      <ConfirmationModal
        isOpen={isResetModalOpen}
        onClose={() => setResetModalOpen(false)}
        onConfirm={handleConfirmReset}
        title="Reset Progress?"
      >
        <p className="text-sm text-slate-400">
          Are you sure you want to reset your progress? All completed items will be cleared. This action cannot be undone.
        </p>
      </ConfirmationModal>
    </div>
  );
};

export default App;