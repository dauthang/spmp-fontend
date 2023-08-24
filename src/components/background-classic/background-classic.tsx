"use client";
import Image from "next/image";
import ImgBg from "../../../public/images/product/hinhnen/anhnen_full_hd.jpg";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const BackgroundClassic = () => {
  const router = useRouter();
  const [isImageReady, setIsImageReady] = useState(false);
  const linkProduct = useCallback(() => {
    router.push("/product");
  }, [router]);

  const onLoadCallBack = useCallback(() => {
    setTimeout(() => {
      setIsImageReady(true);
    }, 1000);
  }, [setIsImageReady]);

  return (
    <div>
      {!isImageReady && (
        <div className="w-full flex items-center justify-center bg-gray-f7 p-[30px] h-[480px] md:h-[580px] 2xxl:h-[650px] mb-[35px] relative mt-6 rounded-xl">
          <div className="h-full w-full">
            <Skeleton className="h-full w-full" />
          </div>
        </div>
      )}
      <div
        className={
          isImageReady
            ? "w-full flex items-center justify-center bg-gray-f7 p-[30px] h-[480px] md:h-[580px] 2xxl:h-[650px] mb-[35px] relative mt-6 rounded-xl"
            : "invisible"
        }
      >
        <Image
          src={ImgBg}
          className="w-full h-full hidden md:flex absolute top-0 left-0 object-cover"
          alt={""}
          onLoadingComplete={onLoadCallBack}
        />
      </div>
      <button
        className={
          isImageReady
            ? "flex items-center justify-center flex-shrink-0 absolute top-[25rem] left-[50%] font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none text-white bg-gray-900 hover:bg-gray-900 shadow-upside h-11 px-[30px] "
            : "invisible"
        }
        onClick={() => linkProduct()}
      >
        Xem sản phẩm
      </button>
    </div>
  );
};

export default BackgroundClassic;
