import Image from "next/image";
const ButtonBudget = () => {
  return (
    <button className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none">
      <Image src="icons/mail.svg" width={20} height={20} alt="" />
      <span className="w-[18px] h-[18px] text-[10px] top-[-10px] right-[-10px] flex items-center justify-center bg-gray-900 text-white absolute rounded-full">
        0
      </span>
    </button>
  );
};

export default ButtonBudget;
