"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F8F8F8] min-h-screen p-2">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3
          className={`${libre.className} text-3xl md:text-4xl lg:text-5xl text-[#163250]`}
        >
          Properties
        </h3>
        <div className="w-24 h-[2px] bg-[#C6A240] mx-auto mt-4" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-5 auto-rows-[200px]">
        {images.map((item) => (
          <motion.div
            key={item.id}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.03 }}
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
            <div className="absolute bottom-4 left-4 right-4 text-center backdrop-blur-md bg-white/10 border border-white/20 text-white rounded-xl p-3 opacity-0 group-hover:opacity-100 transition duration-500">
              <p className="text-xs text-gray-300">Explore Property</p>
              <h4 className="text-lg font-semibold">{item.title}</h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F5F3F0] w-[90%] max-w-md rounded-xl p-6 relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className={`${libre.className} text-3xl text-center`}>
                Enquire Now
              </h2>
              <p
                className={`${libre.className} text-center text-gray-500 mt-2 mb-6`}
              >
                CONNECT WITH OUR TEAM
              </p>

              {/* Form */}
              <form className={`${poppins.className} flex flex-col gap-4`}>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border-b bg-transparent outline-none p-2"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border-b bg-transparent outline-none p-2"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border-b bg-transparent outline-none p-2"
                />
                <textarea
                  placeholder="Message (Optional)"
                  className="border-b bg-transparent outline-none p-2"
                />

                <button className="bg-[#C6A240] text-white py-3 mt-4 hover:bg-gray-800 transition">
                  SEND ENQUIRY
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
