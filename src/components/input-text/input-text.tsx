import {
  DataProductFinal,
  DATA_PRODUCT_FINAL,
} from "@/constants/data-product-final.const";
import { DataProduct } from "@/constants/data-product.const";
import { useOutsideAlerter } from "@/hook/click-out-side";
import { NextPage } from "next";
import Image from "next/image";
import { ChangeEvent, useCallback, useRef, useState, useEffect } from "react";
import { ImgProduct } from "../list-card-classic/card-classic";
export interface InputText {
  label?: string;
  placehoder?: string;
  iconSearch?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImgDetail: React.Dispatch<React.SetStateAction<ImgProduct | undefined>>;
}

const InputText: NextPage<InputText> = (props: InputText) => {
  const { label, placehoder, iconSearch, setIsOpen, setImgDetail } = props;
  const [value, setValue] = useState("");
  const [listFilter, setListFilter] = useState<DataProductFinal[]>([]);
  const wrapperRef = useRef(null);
  const isClickOutside = useOutsideAlerter(wrapperRef);

  useEffect(() => {
    if (isClickOutside) {
      setListFilter([]);
      setValue("");
    }
  }, [isClickOutside, setIsOpen]);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const data = DATA_PRODUCT_FINAL as unknown as DataProductFinal[];
      setValue(event.target.value);
      if (!event.target.value) {
        setListFilter([]);
      } else {
        const dataFilter = data.filter((item) =>
          item.data.nameProduct
            .toUpperCase()
            .includes(event.target.value.toUpperCase())
        );
        console.log(dataFilter, "dataFilter");
        setListFilter(dataFilter);
      }
    },
    [setListFilter]
  );

  const onClick = useCallback(
    (data: DataProductFinal) => {
      setListFilter([]);
      setValue("");
      setIsOpen(true);
      setImgDetail(data as unknown as ImgProduct);
    },
    [setImgDetail, setIsOpen]
  );
  return (
    <div
      className="w-full ml-[10px] mr-[20px] lg:mr-10 lg:ml-auto lg:flex lg:justify-center relative"
      ref={wrapperRef}
    >
      <div className="flex items-center justify-center w-full lg:max-w-screen-md rounded relative overflow-hidden">
        <span className="absolute top-0 left-0 flex items-center justify-center h-full w-[50px]">
          <Image src="icons/search.svg" width={14} height={14} alt="" />
        </span>
        <input
          className="w-full h-12 pl-12 px-4 text-gray-900 placeholder-gray-500 bg-grayInput border-2 border-transparent rounded outline-none transition duration-200 hover:border-gray-400 focus:border-black focus:placeholder-gray-900"
          placeholder={placehoder}
          autoComplete="off"
          onChange={(e) => onChange(e)}
          value={value}
        ></input>
      </div>
      {listFilter && listFilter.length > 0 && (
        <div className="w-full absolute top-[55px] bg-grayInput p-3 overflow-y-auto max-h-[400px] border-2 border-black lg:max-w-screen-mdz">
          {listFilter.map((item: DataProductFinal) => {
            return (
              <>
                <div
                  className="flex gap-10 hover:bg-slate-200 items-center p-2 mb-2 cursor-pointer"
                  key={item.id}
                  onClick={() => onClick(item)}
                >
                  <Image
                    className="rounded"
                    src={item.srcImg}
                    width={50}
                    height={50}
                    alt=""
                  />
                  <div>{item.data.nameProduct}</div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputText;
