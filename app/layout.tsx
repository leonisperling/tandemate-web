import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TandeMate — Local Language Exchange for Free",
  description:
    "Find language exchange partners near you. Chat with locals, practice together, and make friends while learning a new language — completely free.",
  openGraph: {
    title: "TandeMate — Local Language Exchange for Free",
    description:
      "Find language exchange partners near you. Chat with locals, practice together, and make friends while learning a new language.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
