import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion';

const Projects = () => {
  const containerRef = useRef(null);

  // Track continuous scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Using start center to end center gives excellent linear mapping
    offset: ["start center", "end center"]
  });

  // Expanding to exactly 5 distinct products 
  const projects = [
    { id: "01", title: "STARSHOT AI", link: "https://starshotai.vercel.app/", description: "StarShot AI is a smart AI system that detects and recognizes faces quickly and accurately for secure authentication and access control.", imageL: "Project11.png", imageR: "Project12.png" },
    { id: "02", title: "GO2GETHER", link: "https://go2gether-iota.vercel.app/", description: "Go2Gether is a real-time group navigation platform. It is a modern, interactive travel coordination system with live location tracking and smart safety features.", imageL: "Project21.png", imageR: "Project22.png" },
    { id: "03", title: "SYNOX09", link: "https://synox09.vercel.app/", description: "SyNox09 is a decentralized meeting application. It is a modern, interactive platform that integrated with blockchain technology.", imageL: "Project31.png", imageR: "Project32.png" },
    { id: "04", title: "BRANDFORGE AI", link: "https://brandforgeai09.vercel.app/", description: "An AI-powered app that creates brand-consistent, fully customizable social media posters in seconds.", imageL: "Project41.png", imageR: "Project42.png" },
    { id: "05", title: "PORTFOLIO", link: "https://pradeep-portfolio-09.vercel.app/", description: "Creamy, large pearls, the ultimate rarity.", imageL: "Project51.png", imageR: "Project52.png" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] || projects[0];

  // A very mild, strictly clamped floating effect.
  // By limiting the variance to exactly 25 pixels, it guarantees a gentle smooth scroll
  // without ever bouncing wildly out of the structural margins.
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 60, damping: 20 });
  const gentleLagY = useTransform(() => {
    const diff = scrollY.get() - smoothScrollY.get();
    return Math.max(-30, Math.min(30, diff)); // Enforces a strict 30px max trailing distance
  });

  return (
    <div ref={containerRef} className="relative bg-[#f5f5f5] text-black">
      <div className="relative grid grid-cols-12 w-full h-full">

        {/* LEFT COLUMN: 5 FRAMED IMAGES (Viewport Tracked) */}
        <div className="col-span-12 md:col-span-4 bg-[#f5f5f5] flex flex-col items-center pt-[10vh] md:pt-[15vh] pb-[10vh] md:pb-[20vh] px-6 md:px-0 gap-[4vh] md:gap-[5vh]">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              onViewportEnter={() => setActiveIndex(i)}
              viewport={{ margin: "-30% 0px -30% 0px" }}
              className="relative w-full h-[65vh] md:h-[80vh] border-[4px] md:border-[8px] border-white overflow-hidden bg-[#1f1f1f] shadow-sm rounded-lg group"
            >
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative cursor-pointer">
                <img src={p.imageL} alt={`Project ${i} context`} className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-transform duration-[1.5s] ease-out" />

                {/* Mobile overlay for the best user experience */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent md:hidden flex flex-col items-center justify-end p-6 pb-8 text-center opacity-100 transition-all duration-300">
                  <h3 className="text-white text-2xl font-black tracking-widest uppercase mb-2 shadow-sm">{p.title}</h3>
                  <p className="text-white/80 text-xs mb-5 line-clamp-2 max-w-[95%] mx-auto">{p.description}</p>
                  <span className="px-6 py-3 border border-white/50 bg-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full backdrop-blur-sm shadow-xl hover:bg-white hover:text-black transition-all">
                    View Project
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* MIDDLE COLUMN: PERFECTLY CENTERED STICKY CARD - HIDDEN ON MOBILE */}
        <div className="hidden md:block col-span-12 md:col-span-4 bg-[#f5f5f5] relative pt-[15vh] pb-[20vh]">
          {/* 
            With the root overflow-x-hidden converted to overflow-x-clip, position: sticky behaves flawlessly!
            Setting top-[10vh] mathematically perfectly centers an 80vh card inside a 100vh viewport 
            (10vh top margin + 80vh height + 10vh remaining bottom margin) clearing the logo cleanly.
            This natively satisfies the strict request: "center in screen lik X to Y" without any continuous JS calculation drift.
          */}
          <div className="sticky top-[10vh] w-full flex flex-col items-center justify-center">
            <motion.div
              style={{ y: gentleLagY }} // Extremely mild, safe floating effect
              // Pure native sticky physically anchors the bounds; the translation is clamped perfectly into safety margins
              // Significantly increased size using max-w-[95%], tighter aspect-[3/4.2], and max-h-[80vh]
              className="group w-full max-w-[95%] aspect-[3/4.2] max-h-[80vh] border border-dashed border-black/20 hover:border-white/80 flex flex-col items-center justify-between py-10 px-6 md:py-16 md:px-12 bg-white hover:bg-[#111111] shadow-[0_20px_60px_rgba(0,0,0,0.06)] tracking-wide transition-all duration-700 ease-out cursor-default"
            >
              <div className="w-12 h-12 rounded-full border border-black/10 group-hover:border-white/80 flex items-center justify-center text-[10px] tracking-widest text-[rgba(0,0,0,0.4)] group-hover:text-[rgba(255,255,255,0.9)] transition-colors duration-700">
                {activeProject.id}
              </div>

              <div className="text-center w-full my-4 flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                  >
                    <h3 className="text-2xl md:text-3xl font-black tracking-widest uppercase leading-tight text-black group-hover:text-white transition-colors duration-700">
                      {activeProject.title}
                    </h3>
                    <p className="italic text-sm md:text-base font-light leading-relaxed normal-case text-black/40 group-hover:text-white/90 transition-colors duration-700 max-w-[85%] mx-auto">
                      {activeProject.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="pb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block border-b border-black/20 group-hover:border-white/40 pb-1 text-[10px] tracking-[0.3em] font-black uppercase text-black/60 group-hover:text-white transition-colors duration-700 hover:!border-black group-hover:hover:!border-white pointer-events-auto cursor-pointer"
                    >
                      VIEW PROJECT
                    </a>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black/10 group-hover:border-white/80 transition-colors duration-700" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black/10 group-hover:border-white/80 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black/10 group-hover:border-white/80 transition-colors duration-700" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black/10 group-hover:border-white/80 transition-colors duration-700" />
            </motion.div>
          </div>
        </div>

        {/* RIGHT COLUMN: 5 FRAMED IMAGES - HIDDEN ON MOBILE */}
        <div className="hidden md:flex col-span-12 md:col-span-4 bg-[#f5f5f5] flex-col items-center pt-[15vh] pb-[20vh] gap-[5vh]">
          {projects.map((p, i) => (
            <div key={i} className="relative w-full h-[80vh] border-[8px] border-white overflow-hidden bg-white shadow-sm">
              <img src={p.imageR} alt={`Project ${i} visuals`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
