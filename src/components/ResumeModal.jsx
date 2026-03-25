import { X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResumeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          ></motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden relative z-10"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">My Resume</h3>
              <div className="flex space-x-2">
                <a 
                  href="/cv.jpg" 
                  download="VanshGarg_Resume.jpg"
                  className="p-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-full transition-colors flex items-center justify-center"
                  title="Download Resume"
                >
                  <Download size={20} />
                </a>
                <button 
                  onClick={onClose}
                  className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            
            <div className="p-4 overflow-y-auto flex-1 bg-slate-100/50 dark:bg-slate-800/50 flex justify-center">
              <img 
                src="/cv.jpg" 
                alt="Vansh Garg Resume" 
                className="max-w-full h-auto object-contain rounded shadow-lg border border-slate-200 dark:border-slate-700 block"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
