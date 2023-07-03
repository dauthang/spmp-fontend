const ButtonMenu = () => {
  return (
    <button
      aria-label="menu"
      className="menuBtn flex flex-col items-center justify-center w-[50px] flex-shrink-0 h-full outline-none focus:outline-none lg:w-[90px]"
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
