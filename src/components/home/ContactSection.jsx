"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function ContactSection() {
  return (
    <section className="w-full bg-gray-100 px-4 py-8 md:py-10">
      {/* TOP HEADING */}
      <div className="text-center mb-10 md:mb-14">
        <motion.h3
          className={`${libre.className} text-3xl md:text-4xl lg:text-5xl text-[#163250]`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h3>

        <motion.div
          className="w-20 md:w-24 h-[2px] bg-[#C6A240] mx-auto mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ originX: 0.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* LEFT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 md:p-12"
        >
          <h2
            className={`${libre.className} text-2xl md:text-3xl mb-6 text-[#c6a240]`}
          >
            Contact Us
          </h2>

          <form className="space-y-4 md:space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#163250]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#163250]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#163250]"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#163250]"
              />
            </div>

            <button
              type="submit"
              className={`${poppins.className} w-full bg-[#c6a240] text-white py-2 rounded-lg hover:bg-gray-800 transition`}
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-64 sm:h-72 md:h-auto group overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="Contact"
            fill
            className="object-cover"
          />

          {/* LET'S TALK TEXT */}
          <h4
            className="absolute 
  bottom-20 sm:bottom-24 md:bottom-32 lg:bottom-36
  left-4 sm:left-6 
  text-[#163250] 
  text-xl sm:text-2xl md:text-4xl lg:text-5xl 
  font-bold tracking-wide z-10"
          >
            Let’s Talk
          </h4>

          {/* FIXED BOTTOM CONTENT */}
          <div
            className="absolute bottom-0 left-0 w-full
  bg-gradient-to-t from-[#163250] via-[#163250]/80 to-transparent
  text-white 
  p-3 sm:p-4 md:p-5 lg:p-6
  opacity-70 group-hover:opacity-100
  transition-all duration-300"
          >
            <p className="text-[11px] sm:text-sm md:text-xs lg:text-base leading-snug sm:leading-relaxed">
              “Have a project in mind? We’d love to help you bring your ideas to
              life. Whether you're starting from scratch or refining an existing
              vision, our team is here to guide you every step of the way.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
