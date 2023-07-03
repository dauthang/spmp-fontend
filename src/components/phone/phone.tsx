import Image from "next/image";

const Phone = () => {
  return (
    <div className="hidden items-center text-gray-900 mr-10 flex-shrink-0 lg:flex">
      <Image src="icons/phone.svg" width={20.182} height={20.851} alt="" />
      <span className="font-semibold text-base text-14px ml-3">
        +1 855-766-5885
      </span>
    </div>
  );
};

export default Phone;
