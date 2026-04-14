"use client";

import { motion } from "framer-motion";
import { Libre_Baskerville, Poppins } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    title: "View Details",
    span: "col-span-2 row-span-1",
  },
  {
    id: 2,
    src: "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735",
    title: "View Details",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb",
    title: "View Details",
    span: "col-span-1 row-span-2",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1448630360428-65456885c650",
    title: "View Details",
    span: "col-span-2 row-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
    title: "View Details",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    title: "View Details",
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735",
    title: "View Details",
    span: "col-span-1 row-span-1",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
    title: "View Details",
    span: "col-span-2 row-span-1",
  },
];

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

export default function Gallery() {
  return (
    <div className="bg-[#F8F8F8] min-h-screen p-6 ">
      <div className="text-center mb-12">
        <motion.h3
          className={`${libre.className} text-3xl md:text-4xl lg:text-5xl text-[#163250]`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Properties
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

      {/* Grid */}
      <div className="grid grid-cols-4 gap-5 auto-rows-[200px]">
        {images.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.span}`}
          >
            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Content */}
            <div className="absolute bottom-4 left-8 right-18 text-center backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-xl p-3 opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-xs text-gray-300">Explore Property</p>
              <h4 className="text-lg font-semibold">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
