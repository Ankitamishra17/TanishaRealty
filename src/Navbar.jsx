"use client";

import { useEffect, useState } from "react";
import { Libre_Baskerville, Poppins } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ❗ Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Service", link: "#service" },
    { name: "Properties", link: "#properties" },
    { name: "Contact", link: "#contact" },
    { name: "Blog", link: "#blog" },
  ];

  return (
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
            className="h-14 w-auto scale-x-250 scale-y-250 origin-left"
          />
        </a>

        {/* DESKTOP MENU */}
        <div>
          <nav className=" hidden md:flex gap-6 lg:gap-8 text-[#163250] font-medium">
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
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* BUTTON */}
          <a
            href="#contact"
            className="hidden sm:block text-[#163250] border border-[#C6A240] px-4 py-2 rounded-xl hover:bg-[#C6A240] hover:text-white transition"
          >
           Enquire Now
          </a>

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

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-[#163250] border border-[#C6A240] px-4 py-2 rounded-xl hover:bg-[#C6A240] hover:text-white transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
