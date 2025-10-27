import { instrumentSerif } from "@/fonts";
import React from "react";
import Team from "./Team";
function About() {
  return (
    <div className="w-full flex justify-center flex-col items-center gap-15">
      <div className="text-center space-y-2 text-white">
        <div className="font-bold text-[14px] tracking-[1px] uppercase leading-[22px] ">
          Since 2017
        </div>
        <div
          className={`${instrumentSerif.className} text-[18px] font-normal leading-2`}
        >
          We are award winning design studio
        </div>
      </div>
      <div className="xl:w-[1106px] xl:h-[545px]  md:space-y-10">
        <div className="text-center font-bold text-[30px] md:text-[60px] xl:text-[170px] flex flex-col items-center uppercase text-white ">
          <div className="leading-40">FROM London, uk,</div>
        </div>
        <p
          className={`${instrumentSerif.className} italic text-[20px] md:text-[50px] xl:text-[64px] leading-15 text-center`}
        >
          We hold the conviction that excellent design transcends mere
          appearance — it serves as a vital medium for communication and
          engagement.
        </p>
      </div>
      <Team />
    </div>
  );
}

export default About;
