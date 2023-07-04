const ImageBackground = () => {
  return (
    <div className="h-[400px] bg-[url('/images/product/hinhnen/anhnen_full_hd.jpg')] w-full flex flex-col items-start px-[30px] py-[45px] bg-cover bg-center bg-no-repeat bg-gray-100 border border-gray-300 rounded overflow-hidden relative xxl:py-[60px] xxl:px-[80px]  cta-base ">
      <div className="component-overlay"></div>
      <div className="flex flex-col items-center lg:items-start relative z-10 w-full lg:max-w-half pl-[25px] pt-[35px]">
        <h3 className="font-normal text-white text-[36px] mb-6 text-center lg:text-left">
          Fast, Free Shipping,<br></br>
          <span className="font-bold">Contactless Delivery.</span>
        </h3>
        <p className="text-white text-center lg:text-left mb-10">
          Try it for now, risk free!
        </p>
        <button
          className="flex items-center justify-center flex-shrink-0 font-normal w-auto uppercase rounded outline-none transition duration-250 ease-in-out focus:outline-none text-white bg-gray-900 hover:bg-gray-900 shadow-upside h-11 px-[30px] undefined"
          type="button"
          aria-label="button"
        >
          <span className="mr-2">Shop Now</span>{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13px"
            height="13px"
            viewBox="0 0 15.333 12.825"
          >
            <g
              data-name="arrow-forward (1)"
              transform="translate(-93 -110.588)"
            >
              <path
                data-name="Path 16639"
                d="M268,112l4.517,5L268,122"
                transform="translate(-165.184 0)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
              <line
                data-name="Line 6"
                x1="12.308"
                transform="translate(94 117)"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></line>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageBackground;
