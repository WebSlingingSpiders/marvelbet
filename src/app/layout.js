import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Btn24hr from "./components/button24hr";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MarvelBet: Next Js",
  description: "Converted MarvelBet to NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
