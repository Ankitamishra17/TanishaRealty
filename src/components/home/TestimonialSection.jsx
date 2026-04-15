"use client";

import { motion } from "framer-motion";
import { Poppins, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    text: "Amazing service and very professional team. Highly recommended!",
  },
  {
    id: 2,
    name: "Shushmita Bedi",
    text: "Great experience, the design quality is top-notch.",
  },
  {
    id: 3,
    name: "Priya Verma",
    text: "They delivered exactly what I wanted. Fantastic work!",
  },
  {
    id: 4,
    name: "Aman Gupta",
    text: "Very smooth process and great communication.",
  },
];

const looped = [...testimonials, ...testimonials];

export default function TestimonialCarousel() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* HEADING  */}
      <div className="text-center mb-10 md:mb-14">
        <motion.h3
          className={`${libre.className} text-3xl md:text-4xl lg:text-5xl text-[#163250]`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.h3>

        <motion.div
          className="w-20 md:w-24 h-[2px] bg-[#C6A240] mx-auto mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ originX: 0.5 }}
          viewport={{ once: true }}
        />

        <p className={`${poppins.className} text-gray-500 mt-4`}>
          Real feedback from our happy clients
        </p>
      </div>

      {/*  CAROUSEL  */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {looped.map((item, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[350px] flex-shrink-0 rounded-2xl p-6
              bg-white/70 backdrop-blur-xl border border-[#163250]/10
              shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Quote */}
              <div className="text-[#C6A240] text-5xl mb-3">“</div>

              {/* Text */}
              <p
                className={`${poppins.className} text-[#163250] text-sm mb-6 leading-relaxed`}
              >
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-3">
                {/* Avatar (First Letter) */}
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full 
                  bg-[#163250] text-white font-semibold border-2 border-[#C6A240]"
                >
                  {item.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#163250]">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">Verified Client</p>
                </div>
              </div>

              {/* Accent line */}
              <div className="mt-5 h-[2px] w-10 bg-[#C6A240]/60 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
