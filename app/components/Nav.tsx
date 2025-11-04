'use client';

import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full mx-auto px-4 md:px-6 lg:px-[80px] py-4 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/Logo.svg"
          alt="LaunchPad Labs"
          width={49}
          height={49}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Hamburger Menu Button - Visible on small and medium screens */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-800 transition-all ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Navigation Links + CTA Button - Hidden on small/medium screens, visible on lg+ */}
      <div className="hidden lg:flex items-center gap-8">
        <ul className="flex items-center gap-10 font-[family-name:var(--font-plus-jakarta-sans)] text-[15px] font-semibold leading-[100%] tracking-[0%] ">
          <li className="cursor-pointer  transition-colors">
            How It Works
          </li>
          <li className="cursor-pointer  transition-colors">
            Our Work
          </li>
          <li className="cursor-pointer      transition-colors">
            Our Process
          </li>
          <li className="cursor-pointer  transition-colors">
            Founder
          </li>
          <li className="cursor-pointer  transition-colors">
            Pricing
          </li>
        </ul>

        <div className="bg-gradient-to-r from-[rgba(156,198,255,1)] to-[rgba(0,208,255,1)] p-[2px] rounded-full">
          <button className="bg-gradient-to-b from-[#3B9DFF] to-[#1E6FFF] text-white px-8 py-3 rounded-full text-base font-semibold shadow-[0_8px_24px_rgba(59,157,255,0.4)] hover:shadow-[0_12px_32px_rgba(59,157,255,0.5)] transition-all w-full">
            Book A Call
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible on small/medium screens when toggled */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden z-50">
          <ul className="flex flex-col px-4 py-4 gap-4 font-[family-name:var(--font-plus-jakarta-sans)] text-[15px] font-semibold leading-[100%] tracking-[0%]">
            <li className="cursor-pointer transition-colors py-2">
              How It Works
            </li>
            <li className="cursor-pointer transition-colors py-2">
              Our Work
            </li>
            <li className="cursor-pointer transition-colors py-2">
              Our Process
            </li>
            <li className="cursor-pointer transition-colors py-2">
              Founder
            </li>
            <li className="cursor-pointer transition-colors py-2">
              Pricing
            </li>
          </ul>
          <div className="px-4 pb-4">
            <div className="bg-gradient-to-r from-[rgba(156,198,255,1)] to-[rgba(0,208,255,1)] p-[2px] rounded-full">
              <button className="bg-gradient-to-b from-[#3B9DFF] to-[#1E6FFF] text-white px-8 py-3 rounded-full text-base font-semibold shadow-[0_8px_24px_rgba(59,157,255,0.4)] hover:shadow-[0_12px_32px_rgba(59,157,255,0.5)] transition-all w-full">
                Book A Call
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}