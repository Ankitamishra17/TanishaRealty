"use client";

import { useEffect, useState } from "react";
import { Libre_Baskerville, Poppins } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ modal state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // prevent scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open || isOpen ? "hidden" : "auto";
  }, [open, isOpen]);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Service", link: "#service" },
    { name: "Properties", link: "#properties" },
    { name: "Contact", link: "#contact" },
    { name: "Blog", link: "#blog" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* LOGO */}
          <a href="#home" className="flex items-center">
            <img
              src="/tanisha-logo.svg"
              alt="Logo"
              className="h-14 w-auto scale-x-150 scale-y-150 origin-left"
            />
          </a>

          {/* DESKTOP MENU */}
          <nav
            className={`${libre.className} hidden md:flex gap-6 md:ml-14 lg:gap-8 text-[#163250] font-medium`}
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="relative group hover:text-[#C6A240] transition"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#C6A240] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className={`${libre.className} flex items-center gap-3`}>
            {/* ✅ BUTTON (OPEN MODAL) */}
            <button
              onClick={() => setIsOpen(true)}
              className="hidden sm:block text-[#163250] border border-[#C6A240] px-4 py-2 rounded-xl hover:bg-[#C6A240] hover:text-white transition"
            >
              Enquire Now
            </button>

            {/* HAMBURGER */}
            <button
              className="md:hidden text-[#163250] text-2xl"
              onClick={() => setOpen(!open)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
            open ? "max-h-96 py-4 shadow-md" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-4 text-[#163250] font-medium">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-[#C6A240] transition"
              >
                {item.name}
              </a>
            ))}

            {/* ✅ MOBILE BUTTON */}
            <button
              onClick={() => {
                setOpen(false);
                setIsOpen(true);
              }}
              className="mt-2 border border-[#C6A240] px-4 py-2 rounded-xl hover:bg-[#C6A240] hover:text-white transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </header>

      {/* ✅ MODAL */}
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
              {/* CLOSE */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-xl"
              >
                ✕
              </button>

              {/* TITLE */}
              <h2 className={`${libre.className} text-3xl text-center`}>
                Enquire Now
              </h2>
              <p className="text-center text-gray-500 mt-2 mb-6">
                CONNECT WITH OUR TEAM
              </p>

              {/* FORM */}
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
    </>
  );
}
