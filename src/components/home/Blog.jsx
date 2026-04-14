"use client";

import { motion } from "framer-motion";
import { Poppins, Libre_Baskerville } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const blogs = [
  {
    id: 1,
    title: "How Studio Living is Redefining Luxury in Noida",
    category: "DESIGN",
    date: "April 4, 2026",
    image: "https://pvr-real-state.vercel.app/img/im2.jpeg",
    desc: "Minimalist studio apartments along Noida Expressway are merging raw aesthetics with comfort.",
  },
  {
    id: 2,
    title: "The Rise of Weekend Farmhouse Culture",
    category: "FARMHOUSE",
    date: "April 15, 2026",
    image: "https://pvr-real-state.vercel.app/img/im1.jpeg",
    desc: "Farm retreats with open courtyards are redefining urban escape.",
  },
  {
    id: 3,
    title: "Why Yamuna Expressway Is NCR’s Biggest Bet",
    category: "INVESTMENT",
    date: "April 1, 2026",
    image: "https://pvr-real-state.vercel.app/img/im3.jpeg",
    desc: "Proximity to Jewar Airport makes this the hottest corridor.",
  },
];

export default function BlogPage() {
  return (
    <section
      id="blog"
      className="bg-[#F8F8F8] px-4   sm:px-6 md:px-8 lg:px-10 py-10 md:py-14 lg:py-16 scroll-mt-24"
    >
      {/* Heading */}
      <div className="text-center mb-8 md:mb-12 ">
        <motion.h3
          className={`${libre.className} text-3xl md:text-4xl lg:text-5xl text-[#163250]`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Blog
        </motion.h3>

        <motion.div
          className="w-20 md:w-24 h-[2px] bg-[#C6A240] mx-auto mt-3 md:mt-4 mb-6 md:mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ originX: 0.5 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 md:h-56 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-4 md:p-5">
              <div className="flex items-center gap-3 text-sm mb-3">
                <span className="bg-[#C6A240] text-white px-2 py-1 rounded text-xs">
                  {blog.category}
                </span>
                <span className="text-gray-500 text-xs">{blog.date}</span>
              </div>

              <h2 className="text-base md:text-lg font-semibold text-[#163250] mb-2">
                {blog.title}
              </h2>

              <p className="text-gray-600 text-sm">{blog.desc}</p>

              <button className="mt-4 text-[#C6A240] font-medium hover:underline">
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
