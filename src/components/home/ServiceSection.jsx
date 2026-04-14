"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins, Libre_Baskerville } from "next/font/google";

// Fonts setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Services data
const services = [
  {
    title: "Property Buying",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    desc: "Find your dream home with trusted listings and expert support.",
  },
  {
    title: "Property Selling",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    desc: "Sell your property faster with better pricing strategies.",
  },
  {
    title: "Rental Services",
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    desc: "Discover rental homes that fit your lifestyle and budget.",
  },
  {
    title: "Property Consulting",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    desc: "Professional advice for smart real estate investments.",
  },
];

export default function ServiceSection() {
  return (
    <section
      className={`w-full py-12 px-4 md:px-8 lg:px-10 bg-[#f9f7f2] ${poppins.className}`}
    >
      {/* Heading */}
      <div className="text-center mb-14">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h3
            className={`${libre.className} text-3xl md:text-4xl lg:text-5xl text-[#163250]`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h3>
          <motion.div
            className="w-24 h-[2px] bg-[#C6A240] mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ originX: 0.5 }}
            viewport={{ once: true }}
          />
        </div>

        <h5 className={` font-semibold text-[#C6A240] mt-3 ${libre.className}`}>
          Real Estate Solutions
        </h5>

        <p className="text-[#777] mt-4 max-w-xl mx-auto">
          We deliver complete property solutions with modern strategies and
          trusted expertise.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative group h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <Image
              src={`${item.img}?w=600`}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#163250]/90 via-[#163250]/70 to-transparent sm:group-hover:from-[#163250]/95 transition duration-300" />

            {/* Content */}
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-semibold mb-2 text-[#c6a240]">
                {item.title}
              </h3>
              <p>{item.desc}</p>
              <div className="text-sm opacity-100 sm:opacity-0 sm:translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition duration-300">
                <div className="w-10 group-hover:w-20 h-[2px] bg-[#c6a240] mt-3 transition-all duration-300" />
              </div>

              {/* <div className="w-10 group-hover:w-20 h-[2px] bg-[#c6a240] mt-3 transition-all duration-300" /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
