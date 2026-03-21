import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { scrollY } = useScroll();

  // Content fade-out logic as we scroll past the hero.
  const heroContentOpacity = useTransform(scrollY, [0, 250], [1, 0]);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden pointer-events-none">
      {/* 
         HERO BACKGROUND 
         Logo logic has been moved to App.jsx for global persistence across all sections.
      */}
      <div
        className="absolute inset-0 z-0 opacity-50 grayscale scale-110"
        style={{
          backgroundImage: `url('/assets/caviar_bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-1" />

      {/* Hero Overlays */}
      <motion.div
        style={{ opacity: heroContentOpacity }}
        className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-16 w-full flex flex-col md:flex-row items-end justify-between pointer-events-auto text-white/60"
      >
        <div className="max-w-[400px]">
          <p className="text-[14px] leading-relaxed mb-12 font-light tracking-wide uppercase opacity-70">
            Enthusiastic Full Stack Developer eager to build innovative full-stack web
            applications and grow through real-world projects,STARSHOT AI, GO2GETHER, SYNOX09, BRANDPOST AI,amongst others to achieve this.
          </p>
          <a
            href="#"
            className="group flex items-center gap-10 text-[11px] font-black tracking-[0.5em] uppercase transition-all duration-300 border-b border-white/20 pb-4 w-fit"
          >
          </a>
        </div>

        <div className="hidden md:flex flex-col items-end gap-20">
          <div className="text-[11px] tracking-[0.6em] font-black uppercase opacity-40 flex items-center gap-10 rotate-90 origin-right translate-x-[-20px]">
            <span>SCROLL DOWN</span>
            <div className="w-32 h-[1px] bg-white opacity-40 shrink-0" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
