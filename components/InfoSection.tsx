import React from 'react';
import { RoadmapSectionType, InfoItem } from '../types';
import { motion } from 'framer-motion';

interface InfoSectionProps {
  section: RoadmapSectionType;
}

const InfoCard: React.FC<{ item: InfoItem }> = ({ item }) => {
  return (
    <div className="p-4 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-cyan-500/20 transition-all duration-300">
      <h3 className="font-semibold text-slate-100">{item.title}</h3>
      <p className="mt-1 text-sm text-slate-400">{item.description}</p>
      {item.subItems && (
        <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-slate-400">
          {item.subItems.map((sub, index) => (
            <li key={index}>{sub}</li>
          ))}
        </ul>
      )}
      {item.details && (
         <div className="mt-3 space-y-2 text-sm">
            {item.details.map((detail, index) => (
                <div key={index} className="flex justify-between items-center py-1 border-b border-slate-800 last:border-b-0">
                    <span className="text-slate-400">{detail.key}</span>
                    <span className="font-mono font-bold text-cyan-400">{detail.value}</span>
                </div>
            ))}
        </div>
      )}
    </div>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


const InfoSection: React.FC<InfoSectionProps> = ({ section }) => {
  const fullWidth = section.id === 'salary' || section.id === 'portfolio';

  return (
    <motion.div 
      {...{
        variants: sectionVariants,
        className: `
        bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg h-full
        hover:shadow-cyan-900/10 transition-shadow duration-300
        ${fullWidth ? 'lg:col-span-2' : ''}
      `
      }}
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="text-cyan-400">{section.icon}</span>
        <h2 className="text-2xl font-bold text-white">{section.title}</h2>
      </div>
      <div className="space-y-4">
        {section.items.map((item, index) => (
          <InfoCard key={index} item={item as InfoItem} />
        ))}
      </div>
    </motion.div>
  );
};

export default InfoSection;