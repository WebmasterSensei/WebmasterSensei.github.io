import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/pages/nav";

const mont = Poppins({
  weight: [ "400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenji Portfolio",
  description: "Credits to Next and Magic Ui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mont.className}`}
      >
       <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
