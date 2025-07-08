import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    children: React.ReactNode;
}

const XIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-md bg-slate-900/80 border border-slate-700/50 rounded-2xl shadow-2xl shadow-cyan-900/20 p-6"
                    >
                        <div className="flex items-start justify-between">
                             <h2 className="text-lg font-bold text-white">{title}</h2>
                            <button onClick={onClose} className="p-1 rounded-full text-slate-500 hover:bg-slate-700 hover:text-white transition-colors">
                                <XIcon />
                            </button>
                        </div>
                        
                        <div className="mt-4">
                            {children}
                        </div>

                        <div className="mt-6 flex justify-end gap-4">
                            <button 
                                onClick={onClose}
                                className="px-4 py-2 text-sm font-semibold text-slate-300 bg-slate-700/50 hover:bg-slate-700 rounded-md transition-colors"
                            >
                                Cancel
                            </button>
                             <button 
                                onClick={onConfirm}
                                className="px-4 py-2 text-sm font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-md transition-colors"
                            >
                                Confirm
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ConfirmationModal;
