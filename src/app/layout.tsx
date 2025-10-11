import type { Metadata } from "next";
import { Lato, Rubik } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header/page";
import Footer from "../Components/Footer/page";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const rubik = Rubik({
  variable: "--rubik",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Plant Gallery | Discover Your Green Space",
  description: "Explore a curated collection of beautiful indoor and outdoor plants. Discover tips, care guides, and inspiration for creating your perfect green space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${lato.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
