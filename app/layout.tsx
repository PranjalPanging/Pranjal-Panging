import "../styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Pranjal Panging",
  description:
    "My personal portfolio website showcasing my projects and skills.",
  keywords: ["Pranjal Panging", "Panging", "Developer", "Ai ML"],
  authors: [{ name: "Pranjal Panging" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
