import type { Metadata } from "next";
import "./globals.css";
import { manropeFont } from "../global/fonts/font";
import "@/src/global/styles/global.scss"
import { Header } from "../components/Header/Header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeFont.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
