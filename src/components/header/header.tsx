import InputText from "@/components/input-text/input-text";
import ButtonMenu from "../button-menu/button-menu";
import LogoMain from "../logo-main/logo-main";
import Phone from "../phone/phone";
import ButtonBudget from "../button-budget/button-budget";
import DrawerLeft from "../drawer/drawer-left/drawer-left";
import { SetStateAction, useState } from "react";
import Drawer from "../drawer/drawer";
import { ImgProduct } from "../list-card-classic/card-classic";

const Header = () => {
  const [isOpenDrawerLeft, setIsOpenDrawerLeft] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imgDetail, setImgDetail] = useState<ImgProduct | undefined>();
  return (
    <div className="flex items-center shadow-mobile text-gray-700 body-font fixed bg-white w-full h-[90px] z-20 lg-shadowHeader  pr-[20px] md:pr-[30px] lg:pr-[40px]">
      <ButtonMenu setIsOpen={setIsOpenDrawerLeft} />
      <LogoMain />
      <InputText
        placehoder="Sản phẩm cần tìm..."
        setIsOpen={setIsOpen}
        setImgDetail={setImgDetail}
      />
      <Phone />
      <ButtonBudget />
      <DrawerLeft isOpen={isOpenDrawerLeft} setIsOpen={setIsOpenDrawerLeft} />
      {setIsOpen && (
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen} detail={imgDetail} />
      )}
    </div>
  );
};

export default Header;
