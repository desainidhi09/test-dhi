import React from "react";

import { Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function Cartempty({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[491px]"
    >
      <div className="bg-white-A700 flex flex-col justify-start p-12 w-full">
        <div className="flex flex-row items-end justify-between mt-1 w-full">
          <Text className="!text-bluegray-800 font-bold mt-1.5 text-2xl">
            My Cart
          </Text>
          <Img src="images/img_plus_1.svg" alt="x" className="h-8 w-8" />
        </div>
        <Img
          src="images/img_20.svg"
          alt="Twenty"
          className="h-[152px] ml-[119px] mr-[76px] mt-[77px]"
        />
        <Text className="!text-bluegray-400 font-normal mb-[92px] ml-[127px] mr-[126px] mt-11 text-base">
          No item. Add more
        </Text>
      </div>
    </ModalProvider>
  );
}
