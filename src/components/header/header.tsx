import InputText from "@/components/input-text/input-text";
import ButtonMenu from "../button-menu/button-menu";
import LogoMain from "../logo-main/logo-main";
import Phone from "../phone/phone";
import ButtonBudget from "../button-budget/button-budget";

const Header = () => {
  return (
    <div className="flex items-center shadow-mobile text-gray-700 body-font fixed bg-white w-full h-[90px] z-20 lg-shadowHeader  pr-[20px] md:pr-[30px] lg:pr-[40px]">
      <ButtonMenu />
      <LogoMain />
      <InputText placehoder="Test" />
      <Phone />
      <ButtonBudget />
    </div>
  );
};

export default Header;
