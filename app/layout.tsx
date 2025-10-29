import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { instrument } from "@/fonts";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Instrument Studio",
  description: "Instrument Design Studio built with Next.js and Tailwind CSS ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${instrument.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
