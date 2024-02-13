import React from "react";

import { Button, Text, Img } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function NoPromotionPopup({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[478px]"
    >
      <div className="bg-white-A700 flex flex-col items-center justify-start pb-8 pl-8 rounded shadow-xs w-full">
        <div className="flex flex-row gap-[50px] items-start justify-end w-[87%]">
          <div className="bg-white-A700 h-[298px] p-[47px] relative w-[298px]">
            <Img
              src="images/img_group_bluegray_900.svg"
              alt="Group"
              className="absolute h-[194px] m-auto"
            />
          </div>
          <Img
            src="images/img_xcircle.svg"
            alt="xcircle"
            className="h-10 mt-1 w-10"
          />
        </div>
        <div className="flex flex-col gap-[21px] items-center justify-start w-[55%]">
          <Text className="!text-bluegray-800 font-bold text-2xl">
            No promotion
          </Text>
          <Text className="!text-bluegray-800 font-normal text-sm">
            Follow us to review lattest promotion
          </Text>
        </div>
        <Button className="bg-deep_orange-300 font-bold h-14 min-w-[199px] mt-12 px-[35px] rounded-[28px] text-sm text-white-A700">
          Yes, I understand
        </Button>
      </div>
    </ModalProvider>
  );
}
