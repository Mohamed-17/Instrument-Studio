import About from "@/components/About";
import Hero from "@/components/Hero";
import ScrollContainer from "@/components/ScrollContainer";
import Works from "@/components/Works";
import React from "react";

function HomePage() {
  return (
    <ScrollContainer>
      <Hero />
      <Works />
      <About />
    </ScrollContainer>
  );
}

export default HomePage;
