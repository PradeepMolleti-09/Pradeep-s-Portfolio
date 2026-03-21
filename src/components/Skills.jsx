import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "HTML", "CSS", "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
  "Node.js", "Express", "MongoDB", "Tailwind CSS", "Shopify", "WordPress",
  "Framer Motion", "Git", "Figma", "Java"
];

const Skills = () => {
  return (
    <div className="w-full bg-black py-40 px-6 md:px-16 lg:px-32 text-white">
      <h2 className="text-xs md:text-sm tracking-[0.5em] text-white/40 mb-24 uppercase font-sans font-bold text-center">
        Skills
      </h2>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-medium tracking-tight text-white/40 hover:text-white transition-colors duration-500 cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
