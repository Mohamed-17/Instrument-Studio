import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-50" id="contact">
      <div
        className="mx-10  h-fit pb-10 md:h-120 rounded-2xl relative flex flex-col justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #212121, #1d1d1d, #0f0f0f, #0f0f0f, #0f0f0f)",
        }}
      >
        <div className="absolute top-0 md:-top-60 left-[50%] -translate-x-[50%] z-10">
          <Image
            src={"/mailbox.png"}
            alt="mailbox"
            width={4000}
            height={2000}
            quality={100}
            className="object-cover  md:w-130"
          />
        </div>
        <div className="mt-40 z-50">
          <div className="group flex justify-center items-center ">
            <Button title="Get in Touch" />
          </div>
          <ul className="mt-40 flex flex-col md:flex-row justify-center items-center gap-10">
            <li className="text-[#616161]  font-medium">About</li>
            <li className="text-[#616161]  font-medium">Careers</li>
            <li className="text-[#616161]  font-medium">Privacy Policy</li>
            <Link
              href={"https://www.instagram.com/sneaky.starboy/"}
              className="text-[#616161]  font-medium"
            >
              Instagram
            </Link>
            <Link
              href={"https://www.linkedin.com/in/mohamed-ashraf-68b36828a/"}
              className="text-[#616161]  font-medium"
            >
              Linkedin
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
