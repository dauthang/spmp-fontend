"use client";
import Image from "next/image";
import ImageExam from "../../../public/images/product/logo/logo.jpg";

const BackgroundLoading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="u-loading__symbol">
        <Image src={ImageExam} alt="" />
      </div>
    </div>
  );
};

export default BackgroundLoading;
