import React from "react";

import { Input, Img, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function DashboardSubcrible({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[478px]"
    >
      <div className="bg-white-A700 flex flex-col gap-[35px] items-start justify-start p-8 rounded shadow-xs w-full">
        <div className="flex flex-col gap-[21px] items-start justify-start">
          <Text className="!text-bluegray-800 font-bold text-2xl">
            Subcrible
          </Text>
          <Text className="!text-bluegray-800 font-normal text-sm">
            Subcribe our newletter and get notification to stay update
          </Text>
        </div>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <Text className="!text-bluegray-800 font-medium text-sm">Email</Text>
          <div className="h-14 relative w-full">
            <Img
              src="images/img_iconsendglyph.svg"
              alt="IconSendGlyph"
              className="h-5 m-auto w-5"
            />
            <Input
              type="email"
              name="email One"
              placeholder="Ackermanlhn@gmail.com"
              prefix={
                <Img
                  src="images/img_icon.svg"
                  alt="Icon "
                  className="mr-4 mr-4"
                />
              }
              className="absolute bg-white-A700 border border-indigo-51 border-solid bottom-0 font-medium h-14 left-0 m-auto pr-[35px] right-0 rounded text-base text-bluegray-800 top-0 w-full"
            />
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
