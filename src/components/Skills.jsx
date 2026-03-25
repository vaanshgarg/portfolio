import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "SQL"]
    },
    {
      title: "Web Technologies",
      skills: ["React.js", "Express.js", "Node.js", "MongoDB", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Data Science & ML",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Machine Learning"]
    },
    {
      title: "Tools & Analytics",
      skills: ["Power BI", "DAX", "Power Query", "Microsoft Excel"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full mr-3"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 shadow-sm hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary transition-all duration-300 hover:-translate-y-1 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
