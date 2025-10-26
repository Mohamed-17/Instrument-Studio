import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
const parentVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
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
    transition: { duration: 0.5 },
  },
};
function Works() {
  return (
    <div className="px-4 md:px-6 space-y-10 mb-20">
      <motion.div
        className="flex  flex-col md:flex-row gap-8 items-center justify-center px-5"
        variants={parentVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <motion.div
          className=" w-[400px] md:w-[500px] lg:w-[709px] h-[550px] lg:h-[700px] bg-[#1B30AE] rounded-xl relative overflow-hidden"
          variants={childVariants}
        >
          <div className="absolute top-0 -left-10">
            <Image
              src={"/silver1.png"}
              alt="silver1"
              width={1000}
              height={1000}
              className="w-[200px] md:w-[300px] lg:w-[400px]  object-contain"
            />
          </div>
          <motion.div className="absolute  lg:top-5 lg:left-20 ">
            <Image
              src={"/silver2.png"}
              alt="silver2"
              width={1000}
              height={1000}
              className="lg:w-[600px] object-contain"
            />
          </motion.div>
          <div className="absolute bottom-0 -right-30">
            <Image
              src={"/silver3.png"}
              alt="silver3"
              width={1000}
              height={1000}
              className="w-[400px] h-[400px] object-contain"
            />
          </div>
          <div className="w-full h-full flex justify-center items-end text-[18px] md:text-[24px] lg:text-[32px] pb-10">
            The future of Web3 on Bitcoin
          </div>
        </motion.div>
        <motion.div
          className=" w-[400px] md:w-[500px] lg:w-[709px] h-[550px] lg:h-[700px] bg-[#87E246] overflow-hidden relative rounded-xl"
          style={{
            backgroundImage: `url(/grass.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          variants={childVariants}
        >
          <div className="absolute top-10 left-[50%] -translate-x-1/2">
            <Image
              src={"/iPhone.png"}
              alt="iphone"
              width={700}
              height={700}
              className="w-60 object-contain"
            />
          </div>
          <div className="w-full h-full flex justify-center items-end text-[18px] md:text-[24px] lg:text-[32px] pb-10 text-black">
            Not ordinary app for not ordinary photos
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex  flex-col md:flex-row gap-8 items-center justify-center px-5"
        variants={parentVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <div className=" w-[400px] md:w-[500px] lg:w-[709px] h-[550px] lg:h-[700px] bg-[#2B2B2B] rounded-xl relative overflow-hidden">
          <Image
            src={"/sweatshirt.png"}
            alt="Sweatshirt"
            width={800}
            height={800}
            className="object-contain absolute w-120 h-120 top-10 left-[50%] -translate-x-[50%]"
          />
          <div className="w-full h-full flex justify-center items-end text-[18px] md:text-[24px] lg:text-[32px] pb-10 text-white">
            May the 4th be with you
          </div>
        </div>
        <div className=" w-[400px] md:w-[500px] lg:w-[709px] h-[550px] lg:h-[700px] bg-[#ED732E] rounded-xl relative overflow-hidden">
          <div className="absolute top-0  left-3">
            <Image
              src={"/bigWhiteBall.png"}
              alt="big_white_ball"
              width={608}
              height={608}
              className="object-contain w-170"
            />
          </div>
          <motion.div
            animate={{
              y: [-20, 20, -20],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "easeInOut",
            }}
            className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
          >
            <Image
              src={"/smallWhiteBall.png"}
              alt="small_white_ball"
              width={600}
              height={600}
              className="object-contain w-40"
            />
          </motion.div>
          <div className="w-full h-full flex justify-center items-end text-[18px] md:text-[24px] lg:text-[32px] pb-10 text-white">
            Forgotten Wikipedia articles
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Works;
