import { NextPage } from "next";
import Image from "next/image";
import { ChangeEvent, useCallback, useState } from "react";
export interface InputText {
  label?: string;
  placehoder?: string;
  iconSearch?: string;
}

const InputText: NextPage<InputText> = (props: {
  label: string;
  placehoder: string;
  iconSearch: string;
}) => {
  const { label, placehoder, iconSearch } = props;
  const [value, setValue] = useState("");
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  }, []);
  return (
    <div className="w-full ml-[10px] mr-[20px] lg:mr-10 lg:ml-auto lg:flex lg:justify-center">
      <div className="flex items-center justify-center w-full lg:max-w-screen-md rounded relative overflow-hidden">
        <span className="absolute top-0 left-0 flex items-center justify-center h-full w-[50px]">
          <Image src="icons/search.svg" width={14} height={14} alt="" />
        </span>
        <input
          className="w-full h-12 pl-12 px-4 text-gray-900 placeholder-gray-500 bg-grayInput border-2 border-transparent rounded outline-none transition duration-200 hover:border-gray-400 focus:border-black focus:placeholder-gray-900"
          placeholder={placehoder}
          autoComplete="off"
          onChange={(e) => onChange(e)}
        ></input>
      </div>
    </div>
  );
};

export default InputText;
