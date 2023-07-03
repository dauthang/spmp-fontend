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
export interface DeliveryIt {
  label: string;
  srcImg: StaticImageData;
}

const Delivery = () => {
  const items: DeliveryIt[] = [
    { label: "Fast delivery", srcImg: fast },
    { label: "Coupon Savings", srcImg: fast1 },
    { label: "Custom Order", srcImg: fast2 },
    { label: "Female Care", srcImg: fast3 },
  ];
  return (
    <div className="w-full relative my-[35px]">
      <div className="flex flex-row">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.label}>
                <Image src={item.srcImg} width={322} height={176} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Delivery;
