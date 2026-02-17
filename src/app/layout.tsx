import type { Metadata } from "next";
import { Instrument_Serif, Roboto_Flex, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yogendra Bisht — Portfolio",
  description:
    "Full-Stack Engineer & CS Undergraduate. Building web products, exploring AI and decentralized tech.",
  keywords: [
    "Yogendra Bisht",
    "Full Stack Developer",
    "Portfolio",
    "React",
    "Next.js",
    "AI",
    "Machine Learning",
  ],
  authors: [{ name: "Yogendra Bisht" }],
  openGraph: {
    title: "Yogendra Bisht — Portfolio",
    description:
      "Full-Stack Engineer & CS Undergraduate. Building web products, exploring AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen antialiased bg-[var(--bg)] text-[var(--fg)]",
          instrumentSerif.variable,
          robotoFlex.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider>
          <div className="max-w-5xl mx-auto min-h-screen border-x border-[var(--border)] bg-[var(--bg)] shadow-2xl shadow-black/5">
            <Navbar />
            <main className="relative">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
