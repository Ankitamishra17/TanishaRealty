"use client";
import React from "react";
import Image from "next/image";

import { Libre_Baskerville, Poppins } from "next/font/google";

const libre = Libre_Baskerville({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const navLinks = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Service", link: "#service" },
  { name: "Properties", link: "#properties" },
  { name: "Contact", link: "#contact" },
];

const serviceLinks = [
  { name: "Property Buying", link: "#service" },
  { name: "Property Selling", link: "#service" },
  { name: "Rental Services", link: "#service" },
  { name: "Property Consulting", link: "#service" },
];

const socialLinks = ["in", "tw", "ig", "yt"];

export default function Footer() {
  return (
    <footer className="bg-white text-[#163250] font-['Poppins',sans-serif]">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c6a240] to-transparent" />

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block">
              <Image
                src="/tanisha-logo.svg"
                alt="Tanisha Logo"
                width={150}
                height={140}
                className="object-contain -mt-18"
                priority
              />
            </a>

            <p
              className={`${poppins.className} text-[#163250]/70 text-sm leading-relaxed`}
            >
              Crafting refined experiences for those who appreciate the
              extraordinary in every detail.
            </p>

            <div className="flex items-center gap-2 mt-6">
              <div className="h-px w-8 bg-[#c6a240]" />
              <div className="h-1 w-1 rounded-full bg-[#c6a240]" />
              <div className="h-px w-4 bg-[#c6a240]/40" />
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3
              className={`${libre.className} text-lg font-semibold text-[#c6a240] tracking-[0.15em] uppercase mb-6`}
            >
              Navigate
            </h3>

            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-sm text-[#163250]/70 hover:text-[#c6a240] tracking-wider uppercase flex items-center gap-2 group transition"
                  >
                    <span className="h-px w-0 bg-[#c6a240] group-hover:w-4 transition-all duration-300" />
                    {item.name} {/* ✅ FIXED */}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className={`${libre.className} text-lg font-semibold text-[#c6a240] tracking-[0.15em] uppercase mb-6`}
            >
              Services
            </h3>

            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    className="text-sm text-[#163250]/70 hover:text-[#c6a240] tracking-wider uppercase flex items-center gap-2 group transition"
                  >
                    <span className="h-px w-0 bg-[#c6a240] group-hover:w-4 transition-all duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className={`${libre.className} text-lg font-semibold text-[#c6a240] tracking-[0.15em] uppercase mb-6`}
            >
              Connect
            </h3>

            <div
              className={`${poppins.className}  cursor-pointer  space-y-2 mb-6 text-sm text-[#163250]/70`}
            >
              <p className="hover:text-[#C6A240] transition-all">
                anisharealty01@gmail.com
              </p>
                          <p className="hover:text-[#C6A240] transition-all">

              +91 7428145157</p>
                           <p className="hover:text-[#C6A240] transition-all">

                1818, Galaxy Diamond Plaza
                <br /> Greater Noida
              </p>
            </div>

            <p className="italic text-[#163250]/50 mb-3">Stay in the loop</p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-[#163250]/20 text-[#163250] text-sm px-4 py-2.5 flex-1 outline-none placeholder-[#163250]/40 focus:border-[#c6a240] transition"
              />
              <button className="bg-[#c6a240] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#b89a32] transition">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#163250]/10 to-transparent" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-[#163250]/50">
          © 2026 <span className="text-[#c6a240]">TANISHA</span>. All rights
          reserved.
        </p>

        <div className="flex gap-3">
          {socialLinks.map((s) => (
            <button
              key={s}
              className="w-8 h-8 cursor-pointer border border-[#c6a240]/40 text-[#163250]/60 hover:bg-[#c6a240] hover:text-white transition"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c6a240] to-transparent" />
    </footer>
  );
}
