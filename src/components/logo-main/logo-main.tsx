import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
const LogoMain = () => {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push("/");
  }, [router]);
  return (
    <a
      className="hidden mx-auto lg:mr-10 lg:flex cursor-pointer"
      onClick={onClick}
    >
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
