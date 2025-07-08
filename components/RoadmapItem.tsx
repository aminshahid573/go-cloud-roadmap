import React, { useState, useRef, useEffect } from 'react';
import { RoadmapItem as RoadmapItemType } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { LightbulbIcon, LinkIcon, WrenchScrewdriverIcon, SparklesIcon } from '../constants';
import confetti from 'canvas-confetti';

interface RoadmapItemProps {
  item: RoadmapItemType;
  isCompleted: boolean;
  onToggle: () => void;
  onOpenAITutor: () => void;
}

const CheckIcon: React.FC = () => (
    <motion.svg
        {...{
            className: "w-4 h-4 text-slate-950",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 3,
            initial: { scale: 0, rotate: -90 },
            animate: { scale: 1, rotate: 0 },
            exit: { scale: 0, rotate: 90 },
            transition: { duration: 0.2, ease: "easeOut" }
        }}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </motion.svg>
);

const ChevronDownIcon: React.FC<{isExpanded: boolean}> = ({isExpanded}) => (
    <motion.svg
        {...{
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5 transition-colors duration-300 text-slate-500",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            animate: { rotate: isExpanded ? 180 : 0 },
            transition: { duration: 0.2 }
        }}
    >
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </motion.svg>
);

const InfoPill: React.FC<{title: string, children: React.ReactNode, icon: React.ReactNode}> = ({ title, children, icon }) => (
    <div className="mt-4">
        <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
            <span className="text-cyan-400">{icon}</span>
            {title}
        </h4>
        <p className="mt-1 text-sm text-slate-400 pl-7">
            {children}
        </p>
    </div>
)

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 }
};

const RoadmapItem: React.FC<RoadmapItemProps> = ({ item, isCompleted, onToggle, onOpenAITutor }) => {
  const [isExpanded, setExpanded] = useState(false);
  const checkboxRef = useRef<HTMLDivElement>(null);
  const prevIsCompletedRef = useRef(isCompleted);

  useEffect(() => {
    if (isCompleted && !prevIsCompletedRef.current && checkboxRef.current) {
      const rect = checkboxRef.current.getBoundingClientRect();
      const origin = {
        x: (rect.left + rect.width / 2) / window.innerWidth,
        y: (rect.top + rect.height / 2) / window.innerHeight,
      };
      confetti({
        particleCount: 100,
        spread: 70,
        origin: origin,
        colors: ['#22d3ee', '#06b6d4', '#0e7490', '#cffafe'],
      });
    }
    prevIsCompletedRef.current = isCompleted;
  }, [isCompleted]);


  return (
    <motion.div
      layout
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative bg-slate-900/70 border border-slate-800 rounded-lg transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-900/10"
    >
      <div
        onClick={() => setExpanded(!isExpanded)}
        className={`p-4 flex items-start gap-4 cursor-pointer`}
      >
        <div ref={checkboxRef} className="flex-shrink-0 pt-1 relative" onClick={(e) => { e.stopPropagation(); onToggle(); }}>
          <div
            className={`
              w-7 h-7 rounded-full flex items-center justify-center border-2 transition-all duration-300 group
              ${isCompleted ? 'bg-cyan-400 border-cyan-400' : 'bg-slate-800 border-slate-700 hover:border-cyan-500'}
            `}
          >
            <AnimatePresence>
                {isCompleted && <CheckIcon />}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className={`font-semibold transition-colors duration-300 ${isCompleted ? 'line-through text-slate-500' : 'text-slate-100'}`}>
            {item.title}
          </h3>
          <p className={`mt-1 text-sm transition-colors duration-300 ${isCompleted ? 'text-slate-600' : 'text-slate-400'}`}>
            {item.description}
          </p>
           {item.subTopics && item.subTopics.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.subTopics.map(topic => (
                <span key={topic} className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${isCompleted ? 'bg-slate-700/50 text-slate-500' : 'bg-slate-800 text-slate-400'}`}>
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex-shrink-0 pt-1">
            <ChevronDownIcon isExpanded={isExpanded} />
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
            <motion.div
                {...{
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeInOut' } },
                    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: 'easeOut' } },
                    className: "overflow-hidden"
                }}
            >
                <div className="px-4 pb-4 pl-16">
                    <div className="border-t border-slate-800 pt-4">
                        {item.whyItMatters && (
                            <InfoPill title="Why it Matters" icon={<LightbulbIcon />}>
                                {item.whyItMatters}
                            </InfoPill>
                        )}
                        {item.projectIdea && (
                           <InfoPill title="Project Idea" icon={<WrenchScrewdriverIcon />}>
                                {item.projectIdea}
                           </InfoPill>
                        )}

                        <div className="mt-4">
                            <button
                                onClick={(e) => { e.stopPropagation(); onOpenAITutor(); }}
                                className="inline-flex items-center gap-2 rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-cyan-400 shadow-sm hover:bg-slate-700/80 transition-all duration-200"
                            >
                                <SparklesIcon className="h-5 w-5" />
                                Ask AI Tutor
                            </button>
                        </div>

                        {item.resources && item.resources.length > 0 && (
                            <div className="mt-4">
                               <h4 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                                  <span className="text-cyan-400"><LinkIcon /></span>
                                  Key Resources
                               </h4>
                               <div className="mt-2 space-y-2 pl-7">
                                  {item.resources.map(resource => (
                                       <a
                                        key={resource.url}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-300"
                                      >
                                      {resource.title} &rarr;
                                      </a>
                                  ))}
                               </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RoadmapItem;