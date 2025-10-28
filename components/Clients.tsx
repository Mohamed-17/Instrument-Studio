import React from "react";
import * as motion from "motion/react-client";

interface Company {
  id: number;
  name: string;
}
const companies: Company[] = [
  { id: 1, name: "Meta" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "Corporation" },
  { id: 4, name: "Oracle" },
  { id: 5, name: "Adobe" },
  { id: 6, name: "Figma" },
];

function Clients() {
  return (
    <div className="mt-10 text-3xl md:text-6xl text-white relative">
      <motion.ul className="w-full flex items-center justify-around py-6 md:py-10 relative max-w-[350px] sm:max-w-[700px] md:max-w-[1536px] mx-auto overflow-x-hidden mb-10 masked h-20 md:h-28">
        {companies.map((company, index) => (
          <motion.li
            animate={{
              left: "-100%",
              transition: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                delay: (30 / companies.length) * (3 - company.id) * -1,
              },
            }}
            key={company.id}
            style={{
              left: `calc(100% + ${index * 200}px)`,
            }}
            className="text-white font-semibold absolute w-fit flex items-center justify-center whitespace-nowrap px-8 md:px-16"
          >
            {company.name}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Clients;
