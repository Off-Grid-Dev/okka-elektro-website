import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@styles/globals.css";
import Header from "@components/Header/Header";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Okka Elektro",
  description: "Elektro reperasjon og salg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
