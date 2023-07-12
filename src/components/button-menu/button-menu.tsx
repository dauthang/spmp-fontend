import { NextPage } from "next";

export interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonMenu: NextPage<Props> = ({ setIsOpen }: Props) => {
  return (
    <button
      aria-label="menu"
      className="menuBtn flex flex-col items-center justify-center w-[50px] flex-shrink-0 h-full outline-none focus:outline-none lg:w-[90px]"
      onClick={() => setIsOpen(true)}
    >
      <span className="menuIcon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
    </button>
  );
};

export default ButtonMenu;
