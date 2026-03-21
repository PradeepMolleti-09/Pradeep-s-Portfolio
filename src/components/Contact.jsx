import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="w-full bg-black text-white py-32 md:py-48 px-6 md:px-16 lg:px-32 relative z-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 border-t border-white/10 pt-16 md:pt-24 lg:pt-32">

        {/* Left side: Huge typography CTA */}
        <div className="lg:col-span-8 flex flex-col items-start w-full">
          <h2 className="text-xs md:text-sm tracking-[0.5em] text-white/40 mb-12 uppercase font-sans font-bold">
            Contact
          </h2>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6vw] font-sans font-medium tracking-[-0.02em] leading-[1.05]"
          >
            Have an idea?
            <br />
            <span className="text-[#a3a3a3] font-script text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.8] block mt-4 md:mt-2 -ml-2">Let's build it.</span>
          </motion.h3>

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pradeepmolleti09@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="group flex flex-col sm:flex-row sm:items-center justify-between mt-16 lg:mt-24 border-b border-white/20 pb-6 w-full max-w-2xl hover:border-white transition-colors duration-500 cursor-pointer pointer-events-auto"
          >
            <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.3em] font-sans font-bold uppercase text-white/80 group-hover:text-white transition-colors">
              pradeepmolleti09@gmail.com
            </span>
            <svg
              className="w-5 h-5 sm:ml-auto transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 text-white/60 group-hover:text-white mt-4 sm:mt-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        </div>

        {/* Right side: Information block */}
        <div className="lg:col-span-4 flex flex-col justify-end pt-12 lg:pt-0 w-full lg:border-l lg:border-white/10 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="grid grid-cols-2 gap-8 w-full"
          >
            <div className="flex flex-col gap-2 ml-10">
              <h4 className="text-[10px] sm:text-[11px] tracking-[0.4em] text-white/40 uppercase font-black mb-2">Location</h4>
              <div className="flex flex-col gap-1">
                <p className="text-sm md:text-base text-white/80 font-bold tracking-wide">India</p>
                <p className="text-xs md:text-sm text-white/50 font-medium leading-relaxed max-w-[120px] mt-2">Available for remote work globally.</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 ml-30">
              <h4 className="text-[10px] sm:text-[11px] tracking-[0.4em] text-white/40 uppercase font-black mb-2">Socials</h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-sm md:text-base text-white/80 hover:text-white font-medium tracking-wide transition-colors pointer-events-auto w-fit group flex items-center gap-2">
                  LinkedIn
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↗</span>
                </a>
                <a href="https://github.com/PradeepMolleti-09" className="text-sm md:text-base text-white/80 hover:text-white font-medium tracking-wide transition-colors pointer-events-auto w-fit group flex items-center gap-2">
                  GitHub
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↗</span>
                </a>
                <a href="https://www.instagram.com/pradeep_molleti_09/?hl=en" className="text-sm md:text-base text-white/80 hover:text-white font-medium tracking-wide transition-colors pointer-events-auto w-fit group flex items-center gap-2">
                  Instagram
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↗</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
