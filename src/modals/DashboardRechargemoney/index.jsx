import React from "react";

import { Button, Img, Text, Input } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function DashboardRechargemoney({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[763px]"
    >
      <div className="bg-white-A700 flex flex-col items-start justify-start p-7 rounded shadow-xs w-full">
        <Text className="!text-bluegray-800 font-bold mt-1 text-2xl">
          Pick a wallet
        </Text>
        <Input
          name="Textinput"
          placeholder="0.0"
          prefix={
            <Img
              src="images/img_icon_10.svg"
              alt="Icon "
              className="mr-4 mr-4"
            />
          }
          className="bg-white-A700 border border-indigo-51 border-solid font-medium h-14 mt-8 pr-[35px] rounded text-base text-bluegray-400 w-[99%]"
        />
        <div className="flex flex-row gap-5 justify-start mt-8">
          <Button className="bg-gray-51 font-semibold h-12 min-w-[116px] px-6 rounded text-bluegray-800 text-sm">
            200.000đ
          </Button>
          <Button className="bg-gray-51 font-semibold h-12 min-w-[116px] px-6 rounded text-bluegray-800 text-sm">
            500.000đ
          </Button>
          <Button className="bg-gray-51 font-semibold h-12 min-w-[126px] px-6 rounded text-bluegray-800 text-sm">
            1.000.000đ
          </Button>
          <Button className="bg-gray-51 font-semibold h-12 min-w-[129px] px-6 rounded text-bluegray-800 text-sm">
            2.000.000đ
          </Button>
        </div>
        <div className="bg-indigo-51 h-px mt-8 w-[99%]" />
        <div className="flex flex-row items-center justify-between mt-[31px] w-[99%]">
          <div className="flex flex-col items-start justify-start w-1/2">
            <Text className="!text-bluegray-800 font-medium text-base">
              Available Wallet
            </Text>
            <Input
              name="WalletOptions"
              placeholder="Torus"
              prefix={
                <Img
                  src="images/img_logo_32X32.svg"
                  alt="Logo"
                  className="mr-2.5 mr-2.5"
                />
              }
              className="border border-indigo-51 border-solid font-semibold h-16 mt-[19px] pr-[35px] rounded text-base text-bluegray-800 w-full"
            />
            <div className="bg-gray-51 border border-indigo-51 border-solid flex flex-row items-center justify-between mt-4 p-4 rounded w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start">
                <Img
                  src="images/img_metamaskicon0.png"
                  alt="MetaMaskIconZero"
                  className="object-cover rounded-[5px] w-8"
                />
                <Text className="!text-bluegray-800 font-semibold text-base">
                  Metamask
                </Text>
              </div>
              <Img
                src="images/img_arrowright.svg"
                alt="arrowright"
                className="h-5 w-5"
              />
            </div>
            <div className="border border-indigo-51 border-solid flex flex-row gap-2.5 items-center justify-start mt-4 p-4 rounded w-full">
              <div className="h-8 p-0.5 relative w-8">
                <Img
                  src="images/img_portisicon.png"
                  alt="PortisIcon"
                  className="absolute h-[26px] m-auto object-cover w-[26px]"
                />
              </div>
              <Text className="!text-bluegray-800 font-semibold text-base">
                Portis
              </Text>
            </div>
            <div className="border border-indigo-51 border-solid flex flex-row gap-2.5 items-center justify-start mt-4 p-4 rounded">
              <Img
                src="images/img_logofortmatic.png"
                alt="LogoFortmatic"
                className="object-cover w-8"
              />
              <Text className="!text-bluegray-800 font-semibold text-base">
                Fortmatic
              </Text>
            </div>
          </div>
          <div className="bg-indigo-51 h-[344px] w-px" />
          <div className="flex flex-col gap-[23px] items-center justify-start w-[42%]">
            <div className="h-[42px] relative w-full">
              <div className="absolute flex flex-col items-end justify-start left-0 m-auto pl-0.5 py-0.5 right-0 top-[0%] w-full">
                <div className="flex flex-row gap-2 items-center justify-end w-[31%]">
                  <Img
                    src="images/img_icon_11.svg"
                    alt="Icon One"
                    className="h-5 w-5"
                  />
                  <Text className="!text-indigo-400 font-medium text-base">
                    Refresh
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[1%] flex flex-col gap-[7px] items-start justify-start left-[0%] m-auto">
                <Text className="!text-bluegray-800 font-medium text-base">
                  QR Code
                </Text>
                <Text className="!text-bluegray-400 font-normal text-sm">
                  Scan this QR code{" "}
                </Text>
              </div>
            </div>
            <Img
              src="images/img_barcodeqr1.svg"
              alt="barcodeqrOne"
              className="h-[279px]"
            />
          </div>
        </div>
        <Button className="bg-deep_orange-300 font-bold h-14 mb-1 min-w-[699px] mt-8 px-[35px] rounded-[28px] text-sm text-white-A700">
          Pay now
        </Button>
      </div>
    </ModalProvider>
  );
}
