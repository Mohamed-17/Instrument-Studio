import React from "react";
import InfiniteSlider from "./ui/infinite-slider";
import { ProgressiveBlur } from "./ui/progressive-blur";

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
    <main className="overflow-x-hidden mt-10">
      <section className="pb-16 md:pb-32 masked">
        <div className="group relative m-auto max-w-6xl px-6">
          <div className="flex flex-col items-center md:flex-row ">
            <div className="md:max-w-44 md:border-r md:pr-6 border-b md:border-b-0 pb-6 md:pb-0">
              <p className="text-end text-sm">Powering the best teams</p>
            </div>
            <div className="relative py-10 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                {companies.map((company) => (
                  <div key={company.id} className="flex">
                    {company.name}
                  </div>
                ))}
              </InfiniteSlider>

              <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
              <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Clients;
