"use client"

import Image from "next/image"
import PrimaryButton from "./PrimaryButton"
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="flex justify-center w-full fixed top-0 z-20">
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 70, damping: 20 }}
        className="relative bg-my-deep-black w-full max-w-6xl h-16 flex items-center justify-between px-4 mx-8 md:mx-4 rounded-b-3xl outline outline-my-black"
      >
        <div>
          <Image src="/images/chiglogo.png" alt="Logo" width={120} height={120} />
        </div>
        <nav className="gap-7 hidden md:flex">
          <button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Home</button>
          <button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Projects</button>
          <button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Process</button>
          <button className="hover:text-my-blue cursor-pointer transition-colors duration-300">Contact</button>
        </nav>
        <div ref={menuRef}>
          <div className="hidden md:block">
            <PrimaryButton text="Book a Call" scrollTo="" />
          </div>
          <div>
            <button
              className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`block h-0.5 bg-my-white transition-all duration-300 origin-center rounded-full ${menuOpen ? "rotate-45 translate-y-2.25" : ""
                  }`}
              />
              <span
                className={`block h-0.5 bg-my-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 bg-my-white transition-all duration-300 origin-center rounded-full ${menuOpen ? "-rotate-45 -translate-y-2.25" : ""
                  }`}
              />
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ scale: 0, originX: 1, originY: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="absolute top-18 right-0 w-full bg-my-deep-black flex flex-col items-center py-4 md:hidden rounded-3xl outline outline-my-black"
              >
                <button onClick={() => setMenuOpen(false)} className="cursor-pointer hover:bg-my-black w-full py-2">Home</button>
                <button onClick={() => setMenuOpen(false)} className="cursor-pointer hover:bg-my-black w-full py-2">Projects</button>
                <button onClick={() => setMenuOpen(false)} className="cursor-pointer hover:bg-my-black w-full py-2">Process</button>
                <button onClick={() => setMenuOpen(false)} className="cursor-pointer hover:bg-my-black w-full py-2">Contact</button>
                <button onClick={() => setMenuOpen(false)} className="cursor-pointer hover:bg-my-black w-full py-2">Contact</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </div>
  )
}

export default Header