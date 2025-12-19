import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "devkit — Mac Developer Setup Guide 2025",
  description:
    "A curated collection of tools, configurations, and workflows for setting up a new Mac for software development in 2025.",
  keywords: [
    "mac",
    "developer",
    "setup",
    "guide",
    "tools",
    "homebrew",
    "terminal",
    "macos",
    "devkit",
  ],
  authors: [{ name: "Suraj Patil", url: "https://github.com/surajpatildev" }],
  creator: "Suraj Patil",
  openGraph: {
    title: "devkit — Mac Developer Setup Guide 2025",
    description:
      "A curated collection of tools, configurations, and workflows for setting up a new Mac for software development.",
    type: "website",
    siteName: "devkit",
  },
  twitter: {
    card: "summary_large_image",
    title: "devkit — Mac Developer Setup Guide 2025",
    description:
      "A curated collection of tools for setting up a new Mac for software development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
