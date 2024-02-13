import React from "react";

import { Button, Img, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function DashboardPaymentsuccessful({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[400px]"
    >
      <div className="bg-white-A700 flex flex-col items-center justify-end p-8 rounded shadow-xs w-full">
        <Img
          src="images/img_layer2.svg"
          alt="LayerTwo"
          className="h-[152px] mt-[86px]"
        />
        <div className="flex flex-col gap-4 items-center justify-start mt-[45px] w-[73%]">
          <Text className="!text-bluegray-800 font-bold text-2xl">
            Payment Successful
          </Text>
          <Text className="!text-bluegray-800 font-normal leading-[22px] text-center text-sm">
            Add 200.000đ to your wallet already
            <br />
            Check your new balance!
          </Text>
        </div>
        <Text className="!text-bluegray-400 font-normal mt-[21px] text-sm">
          Send receipt to
        </Text>
        <div className="flex flex-row gap-4 justify-center mt-4 w-[53%]">
          <Button className="border border-indigo-51 border-solid h-12 rounded-[50%] w-12">
            <Img src="images/img_group_48X48.svg" />
          </Button>
          <Button className="border border-indigo-51 border-solid h-12 rounded-[50%] w-12">
            <Img src="images/img_group_2.svg" />
          </Button>
          <Button className="border border-indigo-51 border-solid h-12 rounded-[50%] w-12">
            <Img src="images/img_group_3.svg" />
          </Button>
        </div>
        <Button className="bg-deep_orange-300 font-bold h-14 mt-8 px-[35px] rounded-[28px] text-sm text-white-A700 w-full">
          Yes, I understand
        </Button>
      </div>
    </ModalProvider>
  );
}
