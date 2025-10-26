import Hero from "@/components/Hero";
import ScrollContainer from "@/components/ScrollContainer";
import Works from "@/components/Works";
import React from "react";

function HomePage() {
  return (
    <ScrollContainer>
      <Hero />
      <Works />
    </ScrollContainer>
  );
}

export default HomePage;
