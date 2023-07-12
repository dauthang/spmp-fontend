"use client";
import React, { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

export interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DrawerLeft: NextPage<Props> = ({ isOpen, setIsOpen }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {}, []);

  //   const isCheckActive = useCallback((href: string) => {
  //     const hrefTokens = href.substr(1).split('/');
  //     const pathTokens = router.asPath.substr(1).split('/');

  //     let matched = false;
  //     for (let i = 0; i < hrefTokens.length; i++) {
  //         if (hrefTokens[i] === pathTokens[i]) {
  //         matched = true;
  //         break;
  //         }
  //      }

  //      if ((!fuzzy && router.asPath === href) || (fuzzy && matched)) {
  //         return true;
  //       }
  //   }, [])
  return (
    <div>
      <main
        className={
          " fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out z-50" +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full")
        }
      >
        <section
          className={
            " w-screen max-w-xs left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
            (isOpen ? " translate-x-0 " : " translate-x-[-20rem] ")
          }
        >
          <article className="relative w-screen max-w-xs pb-10 flex flex-col space-y-6 h-full overflow-scroll-y overflow-y-auto">
            <div className="w-full h-[90px] bg-gray-100 flex justify-start items-center relative px-[30px] flex-shrink-0">
              <a>Test</a>
              <button
                className="w-[30px] h-[30px] flex items-center justify-center text-gray-500 absolute right-[25px] focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <Image src="icons/close.svg" width={19} height={12} alt="" />
              </button>
            </div>
            <div className="flex flex-col py-[60px] pb-[40px] lg:pb-[60px]">
              <a className="menu-item relative text-gray-900 pl-[30px] pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900 font-semibold active">
                <Link href="/"> Giới Thiệu</Link>
              </a>
              <a
                className="menu-item relative text-gray-900 pl-[30px] pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                href="/"
              >
                <Link href="/product">Sản phẩm</Link>
              </a>
              <a
                className="menu-item relative text-gray-900 pl-[30px] pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                href="https://medsy-classic.vercel.app/"
              >
                <Link href="/type"> Nguyên liệu</Link>
              </a>
              <a
                className="menu-item relative text-gray-900 pl-[30px] pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                href="/faq"
              >
                <Link href="/info"> Thông tin kĩ thuật</Link>
              </a>
              <a
                className="menu-item relative text-gray-900 pl-[30px] pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900"
                href="/terms"
              >
                <Link href="/contact"> Liên hệ</Link>
              </a>
            </div>
          </article>
        </section>
        <section
          className="w-screen h-full cursor-pointer"
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </div>
  );
};

export default DrawerLeft;
