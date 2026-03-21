import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#111] text-white pt-24 pb-8 flex flex-col items-center overflow-hidden relative z-50">
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 text-[10px] uppercase tracking-[0.5em] font-sans font-bold text-white/40 mb-12 gap-6">
        <span>&copy; {new Date().getFullYear()} PRADEEP MOLLETI</span>
        <span className="text-center">DESIGNER & DEVELOPER</span>
      </div>
      
      {/* Massive screaming PORTFOLIO text */}
      <h1 className="text-[17vw] md:text-[18vw] leading-[0.75] font-sans font-black uppercase tracking-tighter text-white mt-auto w-full text-center select-none">
        PORTFOLIO
      </h1>
    </footer>
  );
};

export default Footer;
