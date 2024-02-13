import React from "react";

import { Button, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function DeletePopup({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[478px]"
    >
      <div className="bg-white-A700 flex flex-col justify-start pl-1 py-1 rounded shadow-xs w-full">
        <Img
          src="images/img_xcircle.svg"
          alt="xcircle"
          className="h-10 ml-[434px] w-10"
        />
        <Img
          src="images/img_12.svg"
          alt="Twelve"
          className="h-[175px] ml-[149px] mr-[153px] mt-5"
        />
        <div className="flex flex-col gap-[21px] items-center justify-start ml-[71px] mr-[74px] mt-[58px] w-[70%]">
          <Text className="!text-bluegray-800 font-bold text-2xl">
            Are you sure to delete item?
          </Text>
          <Text className="!text-bluegray-800 font-normal text-sm">
            This item will be delete from your cart
          </Text>
        </div>
        <div className="flex flex-row gap-4 justify-start mb-7 ml-7 mr-8 mt-12 w-[88%]">
          <Button className="bg-red-600 font-bold h-14 min-w-[199px] px-[35px] rounded-[28px] text-sm text-white-A700">
            Yes, Delete item
          </Button>
          <Button className="bg-gray-51 font-semibold h-14 min-w-[199px] px-[35px] rounded-[28px] text-bluegray-800 text-sm">
            Cancel
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
