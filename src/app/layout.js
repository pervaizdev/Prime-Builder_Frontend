import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/Component/Navbar/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Islamabad Prime Builder",
  description: "We are creators of transformative spaces that inspire, innovate, and endure.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-white`}>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
