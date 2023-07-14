"use client";
import Image from "next/image";
import ImgBg from "../../../public/images/product/hinhnen/anhnen_full_hd.jpg";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
const BackgroundClassic = () => {
  const router = useRouter();
  const linkProduct = useCallback(() => {
    router.push("/product");
  }, [router]);
  return (
    <div>
      <div className="w-full flex items-center justify-center bg-gray-f7 p-[30px] h-[480px] md:h-[580px] 2xxl:h-[650px] mb-[35px] relative mt-6 rounded-xl">
        <Image
          src={ImgBg}
          className="w-full h-full hidden md:flex absolute top-0 left-0 object-cover"
          alt={""}
        />
      </div>
      <button
        className="flex items-center justify-center flex-shrink-0 absolute top-[25rem] left-[45rem] font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none text-white bg-gray-900 hover:bg-gray-900 shadow-upside h-11 px-[30px] "
        onClick={() => linkProduct()}
      >
        Xem sản phẩm
      </button>
    </div>
  );
};

export default BackgroundClassic;
