"use client";
import React from "react";
import Card from "../card/card";
import Drawer from "../drawer/drawer";

const ListCard = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="w-full py-10">
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 md:gap-x-4 md:gap-y-8 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-10 xxl:grid-cols-5 xxl:gap-x-4 xxl:gap-y-12 2xxl:grid-cols-7 2xxl:gap-x-5 2xxl:gap-y-12">
        {items.map((item) => {
          return (
            <div key={item}>
              <Card setIsOpen={setIsOpen} />
            </div>
          );
        })}
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} id={0} />
    </div>
  );
};

export default ListCard;
