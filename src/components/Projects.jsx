import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "VGS – Delivery Tracking Platform",
    desc: "A full-stack delivery tracking and wishlist management platform with chatbot automation and OTP-based authentication.",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB"],
    github: "https://github.com/vaanshgarg/Delivery-Tracking-Project",
    live: "#"
  },
  {
    title: "Student Stress Predictor",
    desc: "Full-stack ML project predicting a student's stress level based on daily routines. Features a modern glass-morphism UI.",
    tech: ["Machine Learning", "Vite", "React", "Python"],
    github: "https://github.com/vaanshgarg/Student-Stress-Management-Predictor",
    live: "#"
  },
  {
    title: "Accidental Drug-Related Deaths Analysis",
    desc: "Interactive Power BI dashboard analyzing 12 years of mortality trends, using advanced DAX, data modeling, and geospatial mapping.",
    tech: ["Power BI", "DAX", "ETL", "Data Modeling"],
    github: "#",
    live: "https://www.linkedin.com/posts/vaanshgarg_powerbi-dataanalytics-dashboarddesign-activity-7408199973198139392-aMBT"
  },
  {
    title: "Decoding CO2 Emissions",
    desc: "A Data-Driven Exploration of Global Emissions (1950–2021) using Python pandas and visualization libraries.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/vaanshgarg/Decoding_CO2",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card group rounded-2xl overflow-hidden relative border-t-4 border-t-primary dark:border-t-secondary"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
                        <FaGithub size={22} />
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-8 flex-grow">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
