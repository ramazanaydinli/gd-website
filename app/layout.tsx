import type { Metadata } from "next";
import { Anton, Inter_Tight, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gündoğu İnşaat — Altyapıdan Üst Yapıya",
  description:
    "Katı atık tesisleri, atık su arıtma, içme suyu ve kanalizasyon sistemleri ile altyapı ve üst yapı işlerinde anahtar teslim mühendislik çözümleri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${anton.variable} ${interTight.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
