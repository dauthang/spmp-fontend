"use client";
import Header from "@/components/header/header";
import "./globals.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer";
import BackgroundLoading from "@/components/background-loading/background-loading";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
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
                <div>{children}</div>
              </div>
              <Footer />
            </div>
          </>
        )}
      </body>
    </html>
  );
}
