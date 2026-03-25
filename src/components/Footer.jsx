import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/vaanshgarg" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors hover:scale-110 transform duration-200">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/vaanshgarg/" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors hover:scale-110 transform duration-200">
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:vaanshgarg@gmail.com" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors hover:scale-110 transform duration-200">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm opacity-70">© {new Date().getFullYear()} Vansh Garg. All rights reserved.</p>
        <p className="text-xs opacity-50 mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}
