"use client";
import Image from "next/image";
import { useState } from "react";
import ImageExam from "../../../public/images/product/change-bg/Trang4-anh2-removebg-preview.png";
import Drawer from "../drawer/drawer";

const ListCardClassic = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full mt-[35px] xxl:mt-[60px] mb-[35px]">
      <div className="grid grid-cols-1 gap-x-3 gap-y-3 mt-9 md:grid-cols-2 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 xxl:grid-cols-3 xxl:gap-x-4 xxl:gap-y-4 2xxl:grid-cols-4 large:grid-cols-5">
        {items.map((item) => {
          return (
            <div
              className="w-full flex flex-col border border-gray-300 rounded p-4 bg-white transition duration-350 ease-in-out"
              key={item}
            >
              <div className="flex flex-row items-start">
                <div className="flex justify-center items-center w-5/12 xxl:w-4/12 h-auto rounded overflow-hidden bg-[#f4f6f8] flex-shrink-0 mr-4">
                  <Image src={ImageExam} width={138} height={138} alt="" />
                </div>
                <div className="flex flex-col w-full items-start overflow-hidden">
                  <span className="font-semibold text-gray-900 mb-1 text-[16px]">
                    $2.5
                  </span>
                  <span className="text-[13px] text-gray-700 truncate w-full">
                    Trueplus Fibre Food Supplement 90 Tablets
                  </span>
                  <div className="flex items-center my-1 overflow-hidden w-full">
                    <span className="text-gray-500 text-[11px] capitalize">
                      Tablet
                    </span>
                    <span className="flex bg-gray-500 w-[3px[] h-[3px] rounded mx-3 flex-shrink-0"></span>
                    <span className="text-gray-500 text-[11px] truncate">
                      90 Pieces
                    </span>
                  </div>
                  <button className="text-gray-500 text-[11px] font-semebold text-gray-900 mt-1 focus:outline-none">
                    Details
                  </button>
                  <div className="ml-auto mt-2 w-full flex justify-end items-end">
                    <div className="relative h-[35px] flex-shrink-0 rounded">
                      <div className="group flex items-center justify-between h-[35px] rounded absolute top-0 right-0 bg-gray-900">
                        <button
                          className="flex items-center p-2 rounded justify-center outline-none transition-colors duration-250 ease-in-out h-full  text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none"
                          aria-label="button"
                          onClick={() => setIsOpen(true)}
                        >
                          Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} id={0} />
    </div>
  );
};

export default ListCardClassic;
