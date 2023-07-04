"use client";
import Image from "next/image";
import ImageExam from "../../../public/images/product/change-bg/Trang4-anh2-removebg-preview.png";
import React from "react";
import { NextPage } from "next";
export interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Card: NextPage<Props> = ({ setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen(true)}>
      <div className="w-full flex flex-col items-start cursor-pointer">
        <div className="flex justify-center items-center w-full rounded overflow-hidden">
          <Image className="w-full" src={ImageExam} height={237} alt="" />
        </div>
        <div className="flex flex-col items-start mt-3">
          <span className="font-semibold text-gray-900 mb-2 text-16px">
            $2.5
          </span>
          <span className="text-13px">
            Trueplus Fibre Food Supplement 90 Tablets
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
