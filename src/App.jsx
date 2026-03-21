import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  const { scrollY } = useScroll();

  // DOCKING LOGO LOGIC (Universal visibility across all sections)
  // FIX: Ensuring pure White (#ffffff) as the starting color for 'mix-blend-difference' to work.
  const logoScale = useTransform(scrollY, [0, 450], [1, 0.22]);
  const logoY = useTransform(scrollY, [0, 450], ["250vh", "40px"]);

  // Replicating entrance logic for the global logo
  const molletiChars = "Molleti".split("");
  const nameVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
    }
  };

  const scriptContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 1.2 } }
  };

  const scriptChar = {
    hidden: { opacity: 0, y: 10, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-x-clip font-sans antialiased text-white selection:bg-white selection:text-black">
      <Navbar />

      {/* 
        GLOBAL DOCKING LOGO - Context-Aware Blending Mode
        Set to Absolute White (#ffffff) so it perfectly inverts over ANY background.
      */}
      <motion.div
        style={{
          scale: logoScale,
          y: logoY,
          x: "-50%",
          color: "#ffffff" // Enforced pure white foundation
        }}
        className="fixed left-1/2 top-0 z-[110] pointer-events-none transform-gpu origin-center -translate-y-1/2 mix-blend-difference"
      >
        <div className="text-center group">
          <h1 className="relative flex items-center justify-center">
            <motion.span
              variants={nameVariant}
              initial="hidden"
              animate="visible"
              className="font-serif text-[12vw] md:text-[10rem] tracking-tight leading-[0.85] block uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative z-10"
            >
              PRADEEP
            </motion.span>
            <motion.div
              variants={scriptContainer}
              initial="hidden"
              animate="visible"
              className="absolute bottom-0 top-12 left-[60%] md:left-[60%] -translate-x-1/2 translate-y-[40%] font-script text-[10vw] md:text-[8rem] italic leading-none flex tracking-normal normal-case opacity-90 text-[#a3a3a3] z-20"
            >
              {molletiChars.map((char, index) => (
                <motion.span key={index} variants={scriptChar}>{char}</motion.span>
              ))}
            </motion.div>
          </h1>
        </div>
      </motion.div>

      {/* SECTION 1: HERO (BLACK BG) */}
      <section className="relative h-screen z-10 w-full overflow-hidden">
        <Hero />
      </section>

      {/* SECTION 2: PROJECTS (Galleries) */}
      <section id="projects" className="relative z-20 w-full">
        <Projects />
      </section>

      {/* SECTION 3: ABOUT */}
      <section id="about" className="relative z-30 w-full">
        <About />
      </section>

      {/* SECTION 4: SKILLS */}
      <section className="relative z-30 w-full">
        <Skills />
      </section>

      {/* SECTION 5: EXPERIENCE */}
      <section className="relative z-30 w-full">
        <Experience />
      </section>

      {/* SECTION 6: CONTACT US (Placed after footer per request) */}
      <section id="contact" className="relative z-50 w-full">
        <Contact />
      </section>

      {/* SECTION 7: FOOTER */}
      <Footer />


    </div>
  )
}

export default App
