import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tayo Car Selling Website",
  description: "Tayo cars is car selling website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <NextTopLoader
          color="#007054"
          initialPosition={0.08}
          crawlSpeed={100}
          height={5}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
  <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
