import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutText = "Blending design and code with functional clarity and creative precision. Delivering thoughtful digital systems with structure, flow, and expressive interaction.";

const Word = ({ children, progress, range }) => {
  // Animate opacity as we scroll to mimic the clean Palmer aesthetic
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span style={{ opacity: opacity }}>
      {children}
    </motion.span>
  );
};

export default function About() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const words = AboutText.split(" ");

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black min-h-[150vh] flex flex-col items-center justify-center px-4 md:px-8"
    >
      {/* Sticky container to keep it universally centered on the screen */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center max-w-[90vw] md:max-w-[75vw] mx-auto">
        <h2 className="absolute top-[10vh] left-1/2 -translate-x-1/2 w-full text-center text-xs md:text-sm tracking-[0.5em] text-white/40 uppercase font-sans font-bold">
          About
        </h2>
        <p className="text-[9vw] sm:text-[7vw] md:text-[6.5vw] lg:text-[5.5vw] font-sans font-medium leading-[1.05] tracking-[-0.03em] text-white text-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return (
              <React.Fragment key={i}>
                <Word progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
                {" "}
              </React.Fragment>
            );
          })}
        </p>
      </div>
    </div>
  );
}
