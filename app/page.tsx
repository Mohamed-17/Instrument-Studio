import About from "@/components/About";
import Hero from "@/components/Hero";
import ScrollContainer from "@/components/ScrollContainer";
import Works from "@/components/Works";
import React from "react";
import Clients from "@/components/Clients";
function HomePage() {
  return (
    <ScrollContainer>
      <Hero />
      <Works />
      <About />
      <Clients />
    </ScrollContainer>
  );
}

export default HomePage;
