import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      // Ensure the header container is transparent and above all sections.
      // Applying 'mix-blend-difference' and 'text-white' to the whole container
      // guarantees that every text element within the Navbar behaves identically.
      style={{ backgroundColor: 'transparent' }}
      className="fixed top-0 left-0 w-full h-20 z-[100] flex items-center justify-between px-6 md:px-12 pointer-events-none mix-blend-difference text-[#ffffff]"
    >
      <nav className="flex-1 flex items-center justify-start gap-10 text-[11px] tracking-[0.4em] font-black uppercase pointer-events-auto">
        <a href="#projects" className="hover:opacity-40 transition-opacity">Projects</a>
        <a href="#about" className="hidden md:block hover:opacity-40 transition-opacity">About</a>
      </nav>

      {/* Docking space for the Pradeep Molleti logo from App.jsx */}
      <div className="flex-[2] h-full pointer-events-none" />

      <nav className="flex-1 flex items-center justify-end gap-10 text-[11px] tracking-[0.4em] font-black uppercase pointer-events-auto">
        <a href="#about" className="md:hidden hover:opacity-40 transition-opacity">About</a>
        <a href="#contact" className="hidden md:block hover:opacity-40 transition-opacity">Contact</a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
