import { motion } from 'framer-motion';
import { Award, Star, CheckCircle, ExternalLink } from 'lucide-react';

export default function Certificates() {
  const certs = [
    { id: 1, title: "Java Programming", src: "/certificates/cert1.jpg" },
    { id: 2, title: "Data Structures and Algorithm", src: "/certificates/cert2.jpg" },
    { id: 3, title: "Computer Programming", src: "/certificates/cert3.jpg" },
    { id: 4, title: "Object Oriented Programming", src: "/certificates/cert4.jpg" }
  ];

  const otherCerts = [
    { title: "Packet Switching Networks and Algorithms", issuer: "University of Colorado", link: "https://www.linkedin.com/in/vaanshgarg/details/certifications/" },
    { title: "Introduction to Hardware and Operating Systems", issuer: "IBM", link: "https://www.linkedin.com/in/vaanshgarg/details/certifications/" },
    { title: "Fundamentals of Network Communication", issuer: "University of Colorado", link: "https://www.linkedin.com/in/vaanshgarg/details/certifications/" },
    { title: "Cloud Computing", issuer: "NPTEL", link: "https://www.linkedin.com/posts/vaanshgarg_cloudcomputing-nptel-learningneverstops-activity-7334532777515655169-VM93" },
    { title: "Networking (Google Certificate)", issuer: "Coursera", link: "https://www.linkedin.com/posts/vaanshgarg_googlecertificate-coursera-networking-activity-7354486646299348994-S6xy" },
    { title: "Git & GitHub Learning", issuer: "GitHub", link: "https://www.linkedin.com/posts/vaanshgarg_git-github-learning-activity-7367127681693335552-r8-2" },
    { title: "Generative AI Mastermind", issuer: "Outskill", link: "https://www.linkedin.com/posts/vaanshgarg_generativeai-artificialintelligence-upskilling-activity-7440093864155205632-ISMJ" },
    { title: "Computational Theory (Generative AI Apps)", issuer: "Infosys", link: "https://www.linkedin.com/posts/vaanshgarg_computationaltheory-computer-infosys-activity-7369572498268499968-m2zQ" },
  ];

  return (
    <section id="certificates" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white flex items-center justify-center gap-3">
            <Award className="text-primary" size={36} />
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 py-5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 dark:from-primary/20 dark:to-secondary/20 dark:border-primary/30 rounded-2xl shadow-sm max-w-3xl mx-auto backdrop-blur-sm transform hover:-translate-y-1 transition-transform duration-300">
            <Star className="text-yellow-500 fill-yellow-500 flex-shrink-0" size={28} />
            <p className="text-slate-800 dark:text-white font-medium text-lg md:text-xl leading-relaxed text-balance">
              Proud to have achieved <span className="font-bold text-primary dark:text-yellow-400">O+ grades</span> across all these coding language courses during my university studies!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {certs.map((cert, idx) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card group rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-t-primary"
            >
              <div className="p-3 sm:p-5 bg-white/50 dark:bg-slate-800/50">
                <div className="overflow-hidden rounded-2xl bg-white flex items-center justify-center border border-slate-200 dark:border-slate-700">
                  <img 
                    src={cert.src} 
                    alt={cert.title} 
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center flex items-center justify-center gap-2">
            <CheckCircle className="text-secondary" size={28} />
            Additional Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherCerts.map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" rel="noreferrer" className="block outline-none">
                <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 relative group">
                  <div className="absolute top-4 right-4 text-slate-400 group-hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </div>
                  <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-4">
                    <Award size={24} />
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2 leading-snug">{cert.title}</h4>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{cert.issuer}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
