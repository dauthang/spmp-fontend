import Image from "next/image";
const LogoMain = () => {
  return (
    <a className="hidden mx-auto lg:mr-10 lg:flex">
      <Image
        src={"/images/product/logo/logo.jpg"}
        width={500}
        height={31}
        alt=""
      />
    </a>
  );
};

export default LogoMain;
