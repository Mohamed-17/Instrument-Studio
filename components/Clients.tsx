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
    <div className="w-[90%] mx-auto flex  gap-4 mt-20 overflow-x-auto remove-scrollbar masked">
      <motion.ul
        className="w-full flex items-center justify-center gap-4 pr-4 "
        animate={{
          x: [0, "-100%"],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {companies.map((company) => (
          <motion.li
            key={company.id}
            className="text-white font-semibold shrink-0 grow-0 basis-1 text-[3rem] p-[1em]"
          >
            {company.name}
          </motion.li>
        ))}
      </motion.ul>
      <motion.ul
        aria-hidden="true"
        className="w-full  items-center justify-center gap-4 hidden md:flex pr-4 "
        animate={{
          x: [0, "-100%"],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {companies.map((company) => (
          <motion.li
            key={company.id}
            className="text-white font-semibold shrink-0 grow-0 text-[3rem] p-[1em]"
          >
            {company.name}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Clients;

// animate={{
//               left: "-100%",
//               transition: {
//                 duration: 30,
//                 repeat: Infinity,
//                 ease: "linear",
//                 delay: (30 / companies.length) * (5 - company.id) * -1,
//               },
//             }}
// style={{
//               left: `calc(100% + ${index * 200}px)`,
//             }}
