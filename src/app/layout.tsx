"use client";
import Header from "@/components/header/header";
import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer";
import Order from "@/components/order/order";
import Delivery from "@/components/delivery/delivery";
import ImageBackground from "@/components/image-background/image-background";
import BackgroundLoading from "@/components/background-loading/background-loading";
import { useEffect, useState } from "react";
import BackgroundClassic from "@/components/background-classic/background-classic";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2800);
  }, []);
  return (
    <html lang="en">
      <body className="relative min-h-screen flex-grow">
        {isLoading ? (
          <BackgroundLoading />
        ) : (
          <>
            <Header />
            <div className="flex flex-col w-full h-full min-h-screen flex-grow">
              <div className="pt-[90px] px-3 pb-[50px] flex-auto md:px-[35px]">
                {/* <Delivery /> */}
                <BackgroundClassic />
                <Order />
                <div>{children}</div>
                <ImageBackground />
              </div>
              <Footer />
            </div>
          </>
        )}
      </body>
    </html>
  );
}
