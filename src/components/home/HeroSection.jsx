"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Libre_Baskerville, Poppins } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/Tanisha-Banner.png"
          className="w-full h-full object-cover scale-110"
          alt="hero"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            {/* Tagline */}
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0}
              className={`text-sm tracking-widest uppercase text-[#C6A240] mt-10 ${poppins.className}`}
            >
              Tanisha Real Estate
            </motion.p>

            {/* HERO HEADING */}
            <motion.h1
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={1}
              className={`mt-10 leading-tight ${libre.className}
                text-2xl sm:text-xl md:text-4xl lg:text-6xl
              `}
            >
              <span className="block sm:inline md:inline">Where Luxury </span>

              <span className="text-[#C6A240] block sm:inline  md:inline">
                Meets Lifestyle
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={2}
              className={`mt-3 text-base sm:text-sm text-gray-300 max-w-lg ${poppins.className}`}
            >
              Discover premium studio apartments and exclusive farmhouse
              retreats in Greater Noida — crafted for modern living with
              timeless elegance.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={3}
              className="mt-2  lg:mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#service"
                className=" bg-[#C6A240] text-black px-7 py-3 rounded-md font-semibold hover:bg-[#b8932f] transition"
              >
                Explore Services →
              </a>

              <a
                href="#properties"
                className="border border-white text-white px-7 py-3 rounded-md hover:bg-white hover:text-black transition"
              >
                Explore Properties →
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE (EMPTY OR IMAGE PLACEHOLDER) */}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
