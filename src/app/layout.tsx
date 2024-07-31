import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Quality Barber",
  description: "Salon de coiffure professionnelle sur Dunkerque",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
        <div className="flex items-center m-2 fixed bottom-0 right-0 border border-black rounded p-2 space-x-2 bg-black text-white text-sm">
          <img
            className="mx-auto h-5 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          />
          <span className="ml-1 sm:hidden md:hidden lg:hidden xl:hidden">
            default (&lt; 640px)
          </span>
          <span className="ml-1 hidden sm:inline md:hidden font-extrabold">
            SM
          </span>
          <span className="ml-1 hidden md:inline lg:hidden font-extrabold">
            MD
          </span>
          <span className="ml-1 hidden lg:inline xl:hidden font-extrabold">
            LG
          </span>
          <span className="ml-1 hidden xl:inline font-extrabold">XL</span>
        </div>
      </body>
    </html>
  );
}
