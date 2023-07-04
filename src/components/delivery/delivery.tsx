"use client";
import Image, { StaticImageData } from "next/image";
import fast from "../../../public/images/fast.png";
import fast1 from "../../../public/images/fast_delivery_2.png";
import fast2 from "../../../public/images/fast_delivery_3.png";
import fast3 from "../../../public/images/fast_delivery_4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useWindowSize from "@/hook/use-window-size";
import { useEffect, useState } from "react";
export interface DeliveryIt {
  label: string;
  srcImg: StaticImageData;
}

const Delivery = () => {
  const [spaceBetween, setSpaceBetween] = useState(10);
  const [slidesPerView, setSlidesPerView] = useState(0);
  const items: DeliveryIt[] = [
    { label: "Fast delivery", srcImg: fast },
    { label: "Coupon Savings", srcImg: fast1 },
    { label: "Custom Order", srcImg: fast2 },
    { label: "Female Care", srcImg: fast3 },
  ];
  const size = useWindowSize();

  useEffect(() => {
    if (size.width === 0) {
      setSpaceBetween(0);
      return setSlidesPerView(0);
    }
    if (size.width >= 1356) {
      setSpaceBetween(10);
      return setSlidesPerView(4);
    } else if (size.width >= 1280) {
      setSpaceBetween(20);
      return setSlidesPerView(3);
    } else if (size.width >= 1024) {
      setSpaceBetween(30);
      return setSlidesPerView(2);
    } else {
      return setSlidesPerView(1);
    }
  }, [size.width]);

  return (
    <div className="w-full relative my-[35px]">
      <div className="flex flex-row">
        {size.width > 0 ? (
          <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper: any) => console.log(swiper)}
          >
            {items.map((item) => {
              return (
                <SwiperSlide key={item.label}>
                  <Image class="w-full" src={item.srcImg} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default Delivery;
