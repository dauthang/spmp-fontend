"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import { ImgProduct } from "../list-card-classic/card-classic";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useOutsideAlerter } from "@/hook/click-out-side";
export interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  detail?: ImgProduct | undefined;
}
const Drawer: NextPage<Props> = ({ isOpen, setIsOpen, detail }: Props) => {
  const [isImageReady, setIsImageReady] = useState(false);
  const wrapperRef = useRef(null);
  const isClickOutside = useOutsideAlerter(wrapperRef);

  useEffect(() => {
    if (isClickOutside) {
      setIsOpen(false);
    }
  }, [isClickOutside, setIsOpen]);

  const onLoadCallBack = useCallback(() => {
    setIsImageReady(true);
  }, [setIsImageReady]);

  return (
    <div ref={wrapperRef}>
      <main
        className={
          " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out z-50" +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full")
        }
      >
        <section
          className={
            " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 h-full overflow-scroll-y overflow-y-auto">
            <div className="w-full flex justify-center relative px-[30px] py-[20px]">
              <button
                className="w-auto h-10 flex items-center justify-center text-gray-500 absolute top-half left-[30px] transition duration-300 focus:outline-none hover:text-gray-900"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src="icons/arrow_left.svg"
                  width={19}
                  height={12}
                  alt=""
                />
              </button>
              <h2 className="font-bold text-[24px] m-0">Details</h2>
            </div>
            <div className="flex items-center justify-center w-full h-[360px] rounded mb-[30px] p-8">
              {!isImageReady && (
                <div className="h-[360px] w-full">
                  <Skeleton className="h-[360px]" />
                </div>
              )}
              {detail?.srcImg && (
                <Image
                  className={
                    isImageReady
                      ? "w-[100%] mt-5  rounded-[10px] visible"
                      : "invisible absolute"
                  }
                  src={detail.srcImg}
                  alt=""
                  onLoadingComplete={onLoadCallBack}
                />
              )}
            </div>
            <div className="flex flex-col p-[30px] pt-8">
              <div className="flex flex-col items-start mb-4">
                <span className="mb-3">Thành phần</span>
                <p className="flex items-center mb-5">
                  <span
                    className=" text-gray-500 text-11px capitalize"
                    dangerouslySetInnerHTML={{
                      __html: detail?.data.ingredient ?? "",
                    }}
                  ></span>
                </p>
              </div>

              <div className="flex flex-col items-start mb-4">
                <span className="mb-3">Công dụng</span>
                <p className="flex items-center mb-5">
                  <span
                    className=" text-gray-500 text-11px capitalize"
                    dangerouslySetInnerHTML={{
                      __html: detail?.data.uses ?? "",
                    }}
                  ></span>
                </p>
              </div>

              <div className="flex flex-col items-start mb-4">
                <span className="mb-3">Liều dùng</span>
                <p className="flex items-center mb-5">
                  <span
                    className=" text-gray-500 text-11px capitalize"
                    dangerouslySetInnerHTML={{
                      __html: detail?.data.dosage ?? "",
                    }}
                  ></span>
                </p>
              </div>
            </div>

            <div className="flex flex-col p-[30px]">
              <button
                className="flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none text-white bg-gray-900 hover:bg-gray-900 h-11 px-30px w-full big"
                type="button"
                aria-label="button"
              >
                Mua ngay
              </button>
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

export default Drawer;
