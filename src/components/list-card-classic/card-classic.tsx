"use client";
import { DATA_PRODUCT_FINAL } from "@/constants/data-product-final.const";
import { DataProduct, DATA_PRODUCT } from "@/constants/data-product.const";
import { useOutsideAlerter } from "@/hook/click-out-side";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Drawer from "../drawer/drawer";
export interface ImgProduct {
  id: number;
  srcImg: StaticImageData;
  srcImgRemoveBg: StaticImageData;
  data: DataProduct;
}
const ListCardClassic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgDetail, setImgDetail] = useState<ImgProduct | undefined>(undefined);
  const [listImg] = useState<ImgProduct[]>(DATA_PRODUCT_FINAL);
  const [isImageReady, setIsImageReady] = useState(false);

  const onClickDetailProduct = useCallback(
    (id: number) => {
      const img = listImg.find((item) => item.id === id);
      setImgDetail(img);
      setIsOpen(true);
    },
    [listImg]
  );

  useEffect(() => {
    if (!isOpen) setImgDetail(undefined);
  }, [isOpen]);

  const onLoadCallBack = useCallback(() => {
    setTimeout(() => {
      setIsImageReady(true);
    }, 1000);
  }, [setIsImageReady]);

  return (
    <div className="w-full mt-[35px] xxl:mt-[60px] mb-[35px]">
      <div className="grid grid-cols-1 gap-x-3 gap-y-3 mt-9 md:grid-cols-2 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 xxl:grid-cols-3 xxl:gap-x-4 xxl:gap-y-4 2xxl:grid-cols-4 large:grid-cols-5">
        {listImg.map((item) => {
          return (
            <div
              className="w-full flex flex-col border border-gray-300 rounded p-4 bg-white transition duration-350 ease-in-out"
              key={item.id}
            >
              <div className="flex flex-row items-start">
                <div
                  className={
                    isImageReady
                      ? "flex justify-center items-center w-5/12 xxl:w-4/12 h-auto rounded overflow-hidden bg-[#f4f6f8] flex-shrink-0 mr-4"
                      : "absolute"
                  }
                >
                  <Image
                    className={
                      isImageReady ? "w-[100$] visible" : "w-[100%] invisible"
                    }
                    src={item.srcImgRemoveBg}
                    width={138}
                    height={138}
                    alt=""
                    onLoadingComplete={onLoadCallBack}
                  />
                </div>
                {!isImageReady && (
                  <div className="flex justify-center items-center w-5/12 xxl:w-4/12 h-auto rounded overflow-hidden bg-[#f4f6f8] flex-shrink-0 mr-4">
                    <div className="w-full">
                      <Skeleton className="w-full h-[138px]" />
                    </div>
                  </div>
                )}

                <div className="flex flex-col w-full items-start overflow-hidden">
                  <span className="font-semibold text-gray-900 mb-1 text-[16px]">
                    {item.data.nameProduct}
                  </span>
                  <span className="text-[13px] text-gray-700 truncate w-full invisible">
                    Trueplus Fibre Food Supplement 90 Tablets
                  </span>
                  <div className="flex items-center my-1 overflow-hidden w-full invisible">
                    <span className="text-gray-500 text-[11px] capitalize">
                      Tablet
                    </span>
                    <span className="flex bg-gray-500 w-[3px[] h-[3px] rounded mx-3 flex-shrink-0 invisible"></span>
                    <span className="text-gray-500 text-[11px] truncate invisible">
                      90 Pieces
                    </span>
                  </div>
                  <button className="text-[11px] font-semebold text-white mt-1 focus:outline-none">
                    O
                  </button>
                  <div className="ml-auto mt-2 w-full flex justify-end items-end">
                    <div className="relative h-[35px] w-full flex-shrink-0 rounded">
                      <div className="group flex items-center justify-between h-[35px] rounded absolute top-0 right-0 bg-gray-900">
                        <button
                          className="flex items-center p-2 rounded justify-center outline-none transition-colors duration-250 ease-in-out h-full  text-white bg-gray-900 transition duration-300 hover:bg-gray-3a focus:outline-none"
                          aria-label="button"
                          onClick={() => onClickDetailProduct(item.id)}
                        >
                          Xem chi tiết
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
      {setIsOpen && (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} detail={imgDetail} />
      )}
    </div>
  );
};

export default ListCardClassic;
