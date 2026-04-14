"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Libre_Baskerville, Poppins } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const detail = [
  {
    id: 1,
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Amazing service and very professional team. Highly recommended!",
  },
  {
    id: 2,
    name: "Shushmita Bedi",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Great experience, the design quality is top-notch.",
  },
  {
    id: 3,
    name: "Priya Verma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "They delivered exactly what I wanted. Fantastic work!",
  },
  {
    id: 4,
    name: "Shushmita Bedi",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Very smooth process and great communication.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h3
          className={`${libre.className} text-3xl md:text-4xl lg:text-5xl text-[#163250]`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Testimonial
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

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {detail.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-[#C6A240]/30 hover:shadow-xl hover:scale-105 transition"
          >
            {/* Image */}
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-full object-cover border-2 "
              />
            </div>

            {/* Text */}
            <p className={`${poppins.className} text-sm text-[#163250] mb-4`}>
              "{item.text}"
            </p>

            {/* Name */}
            <h4 className={`${poppins.className} text-[#C6A240] font-semibold`}>
              {item.name}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
