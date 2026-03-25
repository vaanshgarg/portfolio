import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:mix-blend-overlay"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:mix-blend-overlay" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:mix-blend-overlay" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-secondary font-semibold tracking-wide uppercase text-sm mb-4">Aspiring Data Scientist | ML Enthusiast | Web Dev</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Vansh Garg</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate about Full-Stack Development, Data Science, and building smart, scalable AI/ML solutions. Always eager to innovate!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                to="projects" 
                smooth={true} 
                duration={500}
                className="cursor-pointer flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity w-full sm:w-auto shadow-lg shadow-primary/30 transform hover:-translate-y-1 duration-200"
              >
                <span>View Projects</span>
                <ArrowRight size={18} />
              </Link>
              
              <a 
                href="https://drive.google.com/file/d/1FZc8Nq4cgOkZv2gWMJwnCBE8rLyjoPse/view" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center space-x-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors w-full sm:w-auto shadow-sm transform hover:-translate-y-1 duration-200"
              >
                <span>Download Resume</span>
                <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-[spin_10s_linear_infinite] opacity-50 blur-xl"></div>
              <img 
                src="/profile.jpg" 
                alt="Vansh Garg" 
                className="relative w-full h-full object-cover object-top rounded-full border-4 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
