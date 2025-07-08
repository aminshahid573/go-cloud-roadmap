import React from 'react';
import { RoadmapSectionType, RoadmapItem as RoadmapItemType } from '../types';
import RoadmapItem from './RoadmapItem';
import { motion, AnimatePresence } from 'framer-motion';

interface RoadmapSectionProps {
  section: RoadmapSectionType;
  completedItems: Set<string>;
  onToggleComplete: (id: string) => void;
  onOpenAITutor: (item: RoadmapItemType) => void;
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1
    }
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ section, completedItems, onToggleComplete, onOpenAITutor }) => {
  return (
    <motion.div 
      layout
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg h-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-cyan-400">{section.icon}</span>
        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
      </div>
      <div className="relative">
         {/* Connector Line */}
         <div className="absolute left-[1.125rem] top-5 bottom-5 w-0.5 bg-slate-800 -translate-x-1/2" />
        <motion.div layout className="space-y-4">
          <AnimatePresence>
            {section.items.map((item) => {
              if (!item.isCheckable) return null;
              const roadmapItem = item as RoadmapItemType;
              return (
                 <RoadmapItem
                    key={roadmapItem.id}
                    item={roadmapItem}
                    isCompleted={completedItems.has(roadmapItem.id)}
                    onToggle={() => onToggleComplete(roadmapItem.id)}
                    onOpenAITutor={() => onOpenAITutor(roadmapItem)}
                 />
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RoadmapSection;