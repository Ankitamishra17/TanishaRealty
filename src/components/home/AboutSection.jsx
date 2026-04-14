"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
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

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-[#F8F8F8] relative overflow-hidden scroll-mt-24"
    >
      <div className="text-center mb-12">
        <motion.h3
          className={`${libre.className} text-3xl md:text-4xl lg:text-5xl text-[#163250]`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h3>
        <motion.div
          className="w-24 h-[2px] bg-[#163250] mx-auto mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ originX: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
      {/* GOLD SOFT GLOW */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C6A240]/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#C6A240]/20">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="construction"
              width={600}
              height={700}
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-[#163250] border border-[#C6A240] text-white shadow-xl rounded-xl px-6 py-3">
            <p className="text-sm font-semibold tracking-wide">
              15+ Years Experience
            </p>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="text-white">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className={`text-3xl md:text-5xl mt-4  text-[#C6A240] leading-tight ${libre.className}`}
          >
            Building Timeless Spaces <br />
            With <span className="text-[#163250]">Precision & Trust</span>
          </motion.h2>

          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className={`mt-6 text-gray-400 text-lg leading-relaxed ${poppins.className}`}
          >
            We craft premium residential and commercial properties designed for
            modern lifestyles. Every project reflects a commitment to quality,
            elegance, and long-term value.
          </motion.p>

          <div className="w-16 h-[2px] bg-[#C6A240] mt-6" />

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="mt-8 grid grid-cols-3 gap-8"
          >
            {[
              { value: "120+", label: "Projects" },
              { value: "80+", label: "Clients" },
              { value: "15+", label: "Years" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-3xl font-bold text-[#C6A240]">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>

          {/* BUTTON */}
          <motion.a
            href="#contact"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="inline-block mt-10 bg-[#C6A240] text-black px-7 py-3 rounded-md font-semibold hover:bg-[#b8932f] transition"
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </section>
  );
}
