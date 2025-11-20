import "../styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const homeMetadata: Metadata = {
  title: "Pranjal Panging – Interested in AI, ML, Maths & Physics",
  description:
    "Welcome to the personal website of Pranjal Panging. Explore my projects, skills in AI & Web Development, and my passion for Maths and Physics.",
  keywords: [
    "Pranjal Panging",
    "Portfolio",
    "Developer",
    "AI",
    "Machine Learning",
    "Maths",
    "Physics",
    "STEM",
    "Coding",
    "Projects",
    "Personal Website",
  ],
  authors: [{ name: "Pranjal Panging" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",

  openGraph: {
    title: "Pranjal Panging – Interested in AI, ML, Maths & Physics",
    description:
      "A personal website showcasing projects, AI/ML skills, and my interests in Maths & Physics.",
    url: "https://pranjal-panging.vercel.app",
    siteName: "Pranjal Panging Personal Website",
    images: [
      {
        url: "https://pranjal-panging.vercel.app/favicons/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pranjal Panging Personal Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pranjal Panging – Interested in AI, ML, Maths & Physics",
    description:
      "Showcasing projects, AI/ML skills, and my interests in Maths & Physics.",
    images: ["https://pranjal-panging.vercel.app/favicons/og-image.png"],
    creator: "@YourTwitterHandle",
  },

  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon-16x16.png",
    apple: "/favicons/apple-touch-icon.png",
  },

  themeColor: "#0a192f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
