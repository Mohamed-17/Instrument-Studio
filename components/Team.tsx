import React from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { instrumentSerif } from "@/fonts";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  left: string;
  zIndex?: number;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "ZARA KENNEDY",
    role: "Founder",
    imageUrl: "/zara.png",
    left: "40%",
    zIndex: 10,
  },
  {
    id: 2,
    name: "RILEY HOWELLS",
    role: "Developer",
    imageUrl: "/riley.png",
    left: "52%",
    zIndex: 5,
  },
  {
    id: 3,
    name: "LILY THOMPSON",
    role: "Art Director",
    imageUrl: "/lily.png",
    left: "64%",
    zIndex: 4,
  },
];

function Team() {
  return (
    <div className="flex justify-center w-full my-5 md:my-20 md:h-100 relative">
      <div className="relative w-full max-w-[1200px] min:h-[420px] flex flex-col md:flex-row items-center justify-center">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            style={{ left: member.left, zIndex: member.zIndex }}
            className="lg:absolute top-0 lg:translate-x-[-50%] flex flex-col items-center gap-6"
          >
            <div className="w-[300px] h-[300px] relative">
              <Image
                src={member.imageUrl}
                alt={member.name}
                fill
                className="object-contain w-full h-full filter grayscale-100"
              />
            </div>
            <motion.div
              className="text-center w-full space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 15, x: -10 }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
            >
              <div className="font-bold text-[14px]">{member.name}</div>
              <div className={`text-[18px] ${instrumentSerif.className}`}>
                {member.role}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Team;
