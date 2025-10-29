import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { instrumentSerif } from "@/fonts";
import Button from "./Button";
function Hero() {
  return (
    <div className="h-[calc(100vh-96px)] mt-20 md:mt-0 flex justify-center w-full px-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="flex flex-col gap-4 items-center pt-30 relative h-fit text-4xl md:text-8xl"
      >
        <h1 className="flex  gap-4 items-center text[#FFFFFF]  ">
          <span className={`${instrumentSerif.className} italic`}>the</span>
          <span className="uppercase">INSTRUMENT</span>
        </h1>
        <h1 className="flex  gap-4 items-center text[#FFFFFF]">
          <span className="uppercase">Design</span>
          <span className={`${instrumentSerif.className} italic`}>studio</span>
        </h1>
        <motion.div
          whileHover={{
            skewX: 20,
            transition: { duration: 0.3 },
          }}
          className="absolute hidden md:block top-57 left-20"
        >
          <div className="relative w-70 h-75">
            <Image
              src={"/plastic.png"}
              fill
              alt="plastic"
              className="object-contain"
            />
          </div>
        </motion.div>
        <div className="mt-10 w-full flex justify-center md:justify-end ">
          <p className="w-90 text-[15px] leading-5 text[#FFFFFF] text-center md:text-left ">
            The Instrument&apos;s a fresh design studio vibing out of London.
            We&apos;ll hook you up with killer branding, turn your design dreams
            into reality, and build a dope websites.
          </p>
        </div>
        <div className="md:ml-20 group flex justify-center items-center mt-5">
          <Button title="Work with us" goTo={"work"} />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
