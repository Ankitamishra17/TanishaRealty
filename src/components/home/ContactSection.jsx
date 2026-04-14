"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Poppins, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* LEFT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12"
        >
          <h2
            className={`${libre.className} text-3xl md:text-4xl mb-6 text-[#163250]`}
          >
            Contact Us
          </h2>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#163250]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#163250]"
              />
            </div>

            {/* ✅ NEW FIELD (only added) */}
            <div>
              <label className="block mb-1 text-sm font-medium">Phone</label>
              <input
                type="tel"
                placeholder="Enter your phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#163250]"
              />
            </div>

            {/* Message */}
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
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-72 md:h-auto group overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            alt="Contact"
            fill
            className="object-cover"
          />

          {/* DEFAULT OVERLAY */}
          <div className="absolute inset-0 bg-black/40 transition-all duration-300 group-hover:bg-black/20">
            {/* ALWAYS VISIBLE TEXT */}
            <h4 className="absolute bottom-36 left-6 text-[#c6a240] text-3xl md:text-5xl font-bold tracking-wide z-10">
              Let’s Talk
            </h4>
          </div>

          {/* HOVER BOTTOM TEXT */}
          <div
            className="absolute bottom-0 left-0 w-full
    translate-y-full group-hover:translate-y-0
    transition-all duration-500 ease-in-out
    bg-gradient-to-t from-[#163250] via-[#163250]/90 to-transparent
    text-white p-6"
          >
            {/* REMOVE heading from here */}

            <p className="text-sm md:text-base opacity-100 mt-2 leading-relaxed">
              “Have a project in mind? We’d love to help you bring your ideas to
              life. Whether you're starting from scratch or refining an existing
              vision, our team is here to guide you every step of the way. Let’s
              create something impactful together.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
