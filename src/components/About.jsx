import { motion } from 'framer-motion';
import { BookOpen, Code, Lightbulb, Trophy } from 'lucide-react';

export default function About() {
  const highlights = [
    { icon: <Code className="text-primary" size={24} />, title: 'Full-Stack Web Dev', desc: 'React, Node.js, Express, MongoDB' },
    { icon: <Lightbulb className="text-secondary" size={24} />, title: 'AI/ML enthusiast', desc: 'Predictive modeling, data preprocessing' },
    { icon: <BookOpen className="text-primary" size={24} />, title: 'CS Student', desc: 'BTech CSE (Data Science)' },
    { icon: <Trophy className="text-secondary" size={24} />, title: 'Certified', desc: 'NPTEL, Infosys AI, SimpliLearn' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed text-justify lg:text-left"
          >
            <p>
              I have a strong passion for solving complex analytical and critical problems, with a keen interest in leveraging data to drive meaningful insights. As a proactive <span className="font-semibold text-primary">Computer Science and Engineering</span> student at Lovely Professional University, I am highly passionate about turning these complex problems into elegant, scalable solutions.
            </p>
            <p>
              My expertise spans across <span className="font-semibold text-secondary">Full-Stack Development</span>, where I build seamless user interfaces and robust APIs, and <span className="font-semibold text-primary">Machine Learning</span>, where I enjoy training models and extracting actionable insights from data. My recent training at Cipher Schools and internship at Vanilla kart have significantly sharpened my analytical and development skills.
            </p>
            <p>
              Whether it's building a smart stress predictor or an interactive delivery tracking platform, I strive to innovate every day. Let's create something amazing together!
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
