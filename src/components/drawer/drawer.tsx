"use client";
import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import ImageExam from "../../../public/images/product/sanpham/Trang13-anh1.jpg";
import { ImgProduct } from "../list-card-classic/card-classic";
export interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  img: ImgProduct | undefined;
}
const Drawer: NextPage<Props> = ({ isOpen, setIsOpen, img }: Props) => {
  return (
    <div>
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
              <Image className="w-[100%] mt-5" src={img?.srcImg} alt="" />
            </div>
            <div className="flex flex-col p-[30px] pt-8">
              <div className="flex flex-col items-start mb-4">
                <span className="text-gray-900 font-semibold mb-2">$0.1</span>
                <span className="mb-3">Sergical Mask</span>
                <p className="flex items-center mb-5">
                  <span className=" text-gray-500 text-11px capitalize">
                    Mask
                  </span>
                  <span className="flex bg-gray-500 w-3px h-3px rounded mx-3"></span>
                  <span className=" text-gray-500 text-11px">1 piece</span>
                </p>
                <button
                  className="font-semibold text-11px text-gray-800 mt-2 focus:outline-none"
                  aria-label="details"
                >
                  More Details
                </button>
              </div>

              <div className="flex w-full flex-col">
                <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
                  <span className="text-gray-500 text-11px mb-2">
                    Dosages Form
                  </span>
                  <span className="font-normal text-13px text-gray-900 capitalize">
                    Mask
                  </span>
                </div>
                <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
                  <span className="text-gray-500 text-11px mb-2">Dosages</span>
                  <span className="font-normal text-13px text-gray-900 capitalize">
                    As per need
                  </span>
                </div>
                <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
                  <span className="text-gray-500 text-11px mb-2">
                    Active Substance
                  </span>
                  <span className="font-normal text-13px text-gray-900 capitalize">
                    cloth
                  </span>
                </div>
                <div className="flex flex-col justify-start full mt-10 pr-30px even:pr-0">
                  <span className="text-gray-500 text-11px mb-2">
                    Manufacturer
                  </span>
                  <span className="font-normal text-13px text-gray-900 capitalize">
                    China
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-[30px]">
              <button
                className="flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none text-white bg-gray-900 hover:bg-gray-900 h-11 px-30px w-full big"
                type="button"
                aria-label="button"
              >
                Add To Cart
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
