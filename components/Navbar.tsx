"use client";
import React from "react";
import * as motion from "motion/react-client";
function Navbar() {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        duration: 0.2,
      }}
      className="w-full flex justify-center items-center h-20 mt-4"
    >
      <motion.ul
        className="bg-[#1A1A1A] flex items-center justify-evenly
        w-80 rounded-full h-12"
      >
        <li
          className="cursor-pointer"
          onClick={() => {
            document.querySelector("#work")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Work
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          About
        </li>
        <li
          className="cursor-pointer"
          onClick={() => {
            document.querySelector("#contact")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Contact
        </li>
      </motion.ul>
    </motion.nav>
  );
}

export default Navbar;
