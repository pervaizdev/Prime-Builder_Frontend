import "./globals.css";
import { Poppins, Parisienne, Playfair_Display_SC } from "next/font/google";
import Navbar from "@/Component/Navbar/navbar";
import FloatingIcons from "@/Component/FloatingIcons";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
});

const playfairSC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-sc",
});

export const metadata = {
  title: " Islamabad Prime Builders",
  description: "Prime Builder Islamabad - Real Estate & Construction",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${parisienne.variable} ${playfairSC.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <FloatingIcons />
      </body>
    </html>
  );
}