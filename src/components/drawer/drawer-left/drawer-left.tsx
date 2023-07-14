"use client";
import React, { useCallback, useEffect, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const DrawerLeft: NextPage<Props> = ({ isOpen, setIsOpen }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();
  const itemNav = [
    {
      href: "/",
      name: "Giới Thiệu",
    },
    {
      href: "/product",
      name: "Sản phẩm",
    },
    {
      href: "/",
      name: "Thông tin kĩ thuật",
    },

    {
      href: "/",
      name: "Liên hệ",
    },
  ];
  useEffect(() => {}, []);

  const navigateLink = useCallback(
    (link: string) => {
      setIsOpen(false);
      router.push(link);
    },
    [router, setIsOpen]
  );
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
              <Image
                src={"/images/product/logo/logo_remove_bg.png"}
                width={220}
                height={31}
                alt=""
              />
              <button
                className="w-[30px] h-[30px] flex items-center justify-center text-gray-500 absolute right-[25px] focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <Image src="icons/close.svg" width={19} height={12} alt="" />
              </button>
            </div>
            <div className="flex flex-col py-[60px] pb-[40px] lg:pb-[60px]">
              {itemNav.map((item) => {
                return (
                  <a
                    key={item.name}
                    className="menu-item relative text-gray-900 pl-[30px] pr-4 mb-8 transition duration-300 ease-in-out last:mb-0 hover:text-gray-900 font-semibold active"
                    onClick={() => navigateLink(item.href)}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </a>
                );
              })}
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
