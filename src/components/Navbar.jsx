import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, FileText } from 'lucide-react';
import { cn } from '../lib/utils';
import ResumeModal from './ResumeModal';

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={cn("fixed w-full z-50 transition-all duration-300", scrolled ? 'glass-nav py-4' : 'bg-transparent py-4')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="flex-shrink-0 font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              VG.
            </a>
            
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-primary transition-colors font-medium">
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center space-x-2 border-l border-slate-200 dark:border-slate-700 pl-6 ml-2">
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="flex items-center space-x-1.5 bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium px-4 py-2 rounded-full cursor-pointer"
                >
                  <FileText size={18} />
                  <span>Resume</span>
                </button>
                
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                  aria-label="Toggle Dark Mode"
                >
                  {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-600 dark:text-slate-300"/>}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="flex items-center space-x-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium px-3 py-1.5 rounded-full text-sm cursor-pointer"
              >
                <FileText size={16} />
                <span>Resume</span>
              </button>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 flex-shrink-0 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {darkMode ? <Sun size={20} className="text-yellow-400"/> : <Moon size={20} className="text-slate-600"/>}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 -mr-2 rounded-md hover:bg-gray-200 dark:hover:bg-slate-700 cursor-pointer">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden glass-nav absolute w-full left-0 top-full pb-4 shadow-lg border-b border-gray-200 dark:border-slate-800">
            <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md font-medium hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
