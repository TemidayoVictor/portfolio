import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JosefinSans = Josefin_Sans({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: "Faulkner Temidayo Victor",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JosefinSans.variable} id="app-container" >
        <Header />
        <StairTransition></StairTransition>
        <PageTransition>
          <div className=" pt-[8.5em]">
            {children}
          </div>
        </PageTransition>
        </body>
    </html>
  );
}
