import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Btn24hr from "./components/button24hr";

import Script from "next/script";

import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MarvelBet: Next Js",
  description:
    "Attention cricket fans! Bet on cricket with the best odds at Marvel bet casino and join the ranks of winners! Play cricket every day and earn huge bonuses!",
  keywords: "Cricket bonuses,Cricket betting,Cricket odds",
  alternates: {
    canonical: "https://www.marvel365bet.com/",
  },
  openGraph: {
    title: "MarvelBet: Next Js",
    description:
      "Attention cricket fans! Bet on cricket with the best odds at Marvel bet casino and join the ranks of winners! Play cricket every day and earn huge bonuses!",
    locale: "Language-Country",
    type: "website",
    url: "/",
    images: [
      {
        url: "/home-og.jpeg",
        width: 1200,
        height: 630,
        alt: "MarvelBet",
        secure_url: "/home-og.jpeg",
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-9JP0GRY20C" />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Btn24hr />
        <Chatbot />
      </body>
    </html>
  );
}
