import type { Metadata } from "next";
import "./globals.css";
import { League_Spartan } from "next/font/google"
import Navbar from "@/components/Navbar/Navbar";


export const metadata: Metadata = {
  title: "Mourinho Unofficial",
  description: "An unofficial SPA for José Mourinho",
};


const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: '--font-league-spartan'
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} `}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
