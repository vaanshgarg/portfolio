import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Member / Contributor',
      org: 'orbosisglobal',
      date: 'Recent',
      desc: 'Associated with orbosisglobal, collaborating on tech initiatives and expanding professional web development experience.',
      icon: <Briefcase size={20} className="text-white" />
    },
    {
      type: 'work',
      title: 'Web Dev Intern',
      org: 'Vanilla kart (Emvity Brushflicks Pvt. Ltd.)',
      date: 'Sep 2025 – Nov 2025',
      desc: 'Developed and optimized client websites, improving UX through design enhancements. Gained hands-on experience in WordPress and modern web workflows.',
      icon: <Briefcase size={20} className="text-white" />,
      link: 'https://www.linkedin.com/posts/vaanshgarg_internship-webdevelopment-wordpress-activity-7424372371479818240-_vmo'
    },
    {
      type: 'training',
      title: 'Machine Learning Training',
      org: 'Cipher Schools',
      date: 'Jun 2025 – Jul 2025',
      desc: '70-hour intensive training. Built ML applications like a chatbot and image classification system using Python, logistic regression, and neural networks.',
      icon: <Award size={20} className="text-white" />,
      link: 'https://www.linkedin.com/posts/vaanshgarg_machinelearning-python-datascience-activity-7362398268753895424-n-lm'
    },
    {
      type: 'edu',
      title: 'BTech CSE (Data Science)',
      org: 'Lovely Professional University',
      date: 'Aug 2023 – Present',
      desc: 'CGPA: 8.3. Specializing in Data Science alongside core Computer Science concepts.',
      icon: <GraduationCap size={20} className="text-white" />
    },
    {
      type: 'training',
      title: 'Participant & Awardee',
      org: 'Elite Coders Winter of Code (ECWoC)',
      date: 'Winter',
      desc: 'Recognized as a participant and awardee in the ECWoC open-source program, contributing to complex software projects.',
      icon: <Award size={20} className="text-white" />
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center shadow-md bg-gradient-to-br ${
                exp.type === 'work' ? 'from-blue-500 to-primary' : 
                exp.type === 'training' ? 'from-purple-500 to-secondary' : 
                'from-green-500 to-emerald-500'
              }`}>
                {exp.icon}
              </div>
              
              <div className="glass-card p-6 rounded-2xl relative shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                      {exp.title}
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </h3>
                    <h4 className="text-lg font-medium text-primary dark:text-primary/90">{exp.org}</h4>
                  </div>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2 md:mt-0 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit flex-shrink-0">
                    {exp.date}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
