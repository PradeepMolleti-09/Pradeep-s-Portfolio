import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Freelance / Open Source",
    description: "Architecting scalable web solutions and building complex AI-integrated platforms like STARSHOT AI and BRANDPOST AI."
  },
  {
    year: "2021 - 2023",
    role: "Frontend Engineer",
    company: "Tech Startups",
    description: "Developed exceptionally fast, responsive interfaces using cutting-edge modern libraries like React, Next.js, and Framer Motion."
  },
  {
    year: "2019 - 2021",
    role: "UI/UX Designer",
    company: "Creative Agencies",
    description: "Designed stunning user experiences with a focus on minimalist aesthetics, smooth animations, and high conversion."
  }
];

const Experience = () => {
  return (
    <div className="w-full bg-[#f5f5f5] text-black py-40 px-6 md:px-16 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs md:text-sm tracking-[0.5em] text-black/40 mb-20 uppercase font-sans font-bold">
          Experience
        </h2>
        <div className="flex flex-col gap-12 md:gap-16">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 md:pb-16 border-b border-black/10 last:border-0"
            >
              <div className="md:col-span-3 text-xs md:text-sm tracking-widest text-black/50 font-bold uppercase mt-2">
                {exp.year}
              </div>
              <div className="md:col-span-4 text-3xl md:text-4xl lg:text-5xl font-sans font-black uppercase tracking-tight leading-none text-black">
                {exp.role}
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <span className="text-lg md:text-xl font-bold tracking-wider uppercase mb-4 text-black/80">{exp.company}</span>
                <p className="text-black/50 font-sans leading-relaxed max-w-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
