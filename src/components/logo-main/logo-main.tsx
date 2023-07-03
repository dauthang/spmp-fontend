import Image from "next/image";
const LogoMain = () => {
  return (
    <a className="hidden mx-auto lg:mr-10 lg:flex">
      <Image src="icons/medsy.svg" width={110} height={31} alt="" />
    </a>
  );
};

export default LogoMain;
