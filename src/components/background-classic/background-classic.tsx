import Image from "next/image";
import ImgBg from "../../../public/images/product/hinhnen/anhnen_full_hd.jpg";
const BackgroundClassic = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-f7 p-[30px] h-[480px] md:h-[580px] 2xxl:h-[650px] mb-[35px] relative mt-6 rounded-xl">
      <Image
        src={ImgBg}
        className="w-full h-full hidden md:flex absolute top-0 left-0 object-cover hover:opacity-70"
        alt={""}
      />
      <button className="bg-white w-20 z-50">Test</button>
    </div>
  );
};

export default BackgroundClassic;
