import About from "@/components/About";
import Hero from "@/components/Hero";
import ScrollContainer from "@/components/ScrollContainer";
import Works from "@/components/Works";
import React from "react";
import Clients from "@/components/Clients";
import Capabilities from "@/components/Capabilities";
function HomePage() {
  return (
    <ScrollContainer>
      <Hero />
      <Works />
      <About />
      <Clients />
      <Capabilities />
    </ScrollContainer>
  );
}

export default HomePage;
