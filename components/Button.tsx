"use client";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

function Button({ title, goTo }: { title: string; goTo?: string }) {
  return (
    <button
      className="bg-white flex items-center justify-center gap-4 px-3 w-[181px] h-14 rounded-full text-black text-base cursor-pointer"
      onClick={() => {
        if (goTo)
          document.querySelector(`#${goTo}`)?.scrollIntoView({
            behavior: "smooth",
          });
      }}
    >
      <span className="text-[14px] font-medium">{title}</span>
      <motion.div className="group-hover:rotate-180 transition-all duration-500  ease-in-out ">
        <Image
          src="/arrow-right.svg"
          alt="arrow"
          width={20}
          height={20}
          className="object-contain"
        />
      </motion.div>
    </button>
  );
}

export default Button;
