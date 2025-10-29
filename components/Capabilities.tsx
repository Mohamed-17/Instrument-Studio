import { instrumentSerif } from "@/fonts";
import * as motion from "motion/react-client";
import React from "react";
const parentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};
function Capabilities() {
  return (
    <div className="flex w-full justify-center mt-20 ">
      <div className="flex-1 h-100 hidden md:block"></div>
      <div className="flex-1 h-100 p-3 md:p-8 flex flex-col justify-center  gap-14">
        <motion.h1
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.5,
          }}
          className={`text-5xl md:text-[64px] px-5 ${instrumentSerif.className}`}
        >
          Our Capabilities
        </motion.h1>
        <div className=" md:w-[412px] flex justify-between  ">
          <motion.ul
            className="flex flex-col gap-3"
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              Web design
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              Product design
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              Product design
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              UX & UI design
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              Art direction
            </motion.li>
          </motion.ul>
          <motion.ul
            className="flex flex-col gap-3"
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              Visual design
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              Ecommerce
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              Back-end
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              Front-end
            </motion.li>
            <motion.li
              variants={childVariants}
              className="text-xl text-[#ffffff]"
            >
              Responsive
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
