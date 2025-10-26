"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
function ScrollContainer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
}

export default ScrollContainer;
