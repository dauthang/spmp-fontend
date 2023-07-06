import Image from "next/image";
import ImgBg from "../../../public/images/product/hinhnen/anhnen_full_hd.jpg";
const BackgroundClassic = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-f7 p-[30px] h-[480px] md:h-[580px] 2xxl:h-[650px] mb-[35px] relative">
      <Image
        src={ImgBg}
        className="w-full h-full hidden md:flex absolute top-0 left-0 object-cover"
        alt={""}
      />
    </div>
  );
};

export default BackgroundClassic;
