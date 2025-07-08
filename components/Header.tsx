import React from "react";
import ProgressBar from "./ProgressBar";
import { motion, Variants } from "framer-motion";
import { SearchIcon, ResetIcon } from "../constants";

interface HeaderProps {
  progress: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onResetClick: () => void;
}

const GoGopherMascot: React.FC = () => (
  <motion.div
    whileHover={{ rotate: 5, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
    className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 cursor-pointer"
  >
    <img
      src="/mascot.png"
      alt="Go Gopher Mascot"
      className="w-full h-full object-cover z-10 rounded-full
      shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/30 transition-shadow duration-300"
      draggable={false}
    />
  </motion.div>
);

const Header: React.FC<HeaderProps> = ({
  progress,
  searchQuery,
  onSearchChange,
  onResetClick,
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.header
      className="text-center p-6 rounded-2xl bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm shadow-2xl shadow-cyan-900/10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <motion.div variants={itemVariants}>
            <GoGopherMascot />
          </motion.div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              Go Cloud <span className="text-cyan-400">Roadmap</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-2 max-w-md text-base text-slate-400"
            >
              Your guide to mastering Go for Cloud & Infrastructure.
            </motion.p>
          </div>
        </div>
        <motion.div variants={itemVariants} className="w-full md:w-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-slate-500">
                <SearchIcon />
              </span>
            </div>
            <input
              type="search"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full md:w-64 bg-slate-800/80 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors duration-300"
            />
          </div>
        </motion.div>
      </div>
      <motion.div className="mt-6" variants={itemVariants}>
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <ProgressBar progress={progress} />
          </div>
          <button
            onClick={onResetClick}
            className="p-2 rounded-full text-slate-500 hover:bg-slate-700/50 hover:text-cyan-400 transition-colors duration-200"
            aria-label="Reset Progress"
            title="Reset Progress"
          >
            <ResetIcon />
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
