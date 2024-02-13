import React from "react";

import { Text, Img, Button } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function Cart({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[491px]"
    >
      <div className="bg-white-A700 flex flex-col gap-12 items-center justify-center p-12 w-full">
        <div className="flex flex-row items-end justify-between mt-1 w-full">
          <Text className="!text-bluegray-800 font-bold mt-1.5 text-2xl">
            My Cart
          </Text>
          <Img src="images/img_plus_1.svg" alt="x" className="h-8 w-8" />
        </div>
        <div className="flex flex-col items-start justify-start mb-4 w-full">
          <div className="flex flex-col gap-[34.05px] w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Img
                src="images/img_rectangle_118X110.png"
                alt="Rectangle"
                className="object-cover w-[28%]"
              />
              <div className="flex flex-col items-start justify-start mt-0.5 w-[67%]">
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text className="!text-bluegray-900 font-bold text-lg">
                      Polo Shirt
                    </Text>
                    <Img
                      src="images/img_minus.svg"
                      alt="minus"
                      className="h-6 w-6"
                    />
                  </div>
                  <Text className="!text-bluegray-400 font-normal text-sm">
                    Color: Grey, S
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-start mt-6 w-[43%]">
                  <div className="border border-indigo-51 border-solid h-8 p-1.5 relative w-8">
                    <Img
                      src="images/img_minus.svg"
                      alt="minus One"
                      className="absolute h-5 m-auto w-5"
                    />
                  </div>
                  <Text className="!text-bluegray-900 font-medium ml-5 text-sm">
                    1
                  </Text>
                  <div className="border border-indigo-51 border-solid h-8 ml-[21px] p-1.5 relative w-8">
                    <Img
                      src="images/img_plus_1.svg"
                      alt="plus"
                      className="absolute h-5 m-auto w-5"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-[27px] w-full">
                  <Text className="!text-bluegray-400 font-normal mb-px text-sm">
                    Price
                  </Text>
                  <Text className="!text-bluegray-800 font-semibold mt-px text-sm">
                    $120.0
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-indigo-51 h-px w-full" />
            <div className="flex flex-row items-start justify-between w-full">
              <Img
                src="images/img_3427408800611_353X273.png"
                alt="Rectangle One"
                className="object-cover w-[28%]"
              />
              <div className="flex flex-col items-start justify-start mt-0.5 w-[67%]">
                <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <Text className="!text-bluegray-900 font-bold text-lg">
                      Basic T-shirt
                    </Text>
                    <Img
                      src="images/img_minus.svg"
                      alt="minus One"
                      className="h-6 w-6"
                    />
                  </div>
                  <Text className="!text-bluegray-400 font-normal text-sm">
                    Color: Grey, S
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-start mt-6 w-[43%]">
                  <div className="border border-indigo-51 border-solid h-8 p-1.5 relative w-8">
                    <Img
                      src="images/img_minus.svg"
                      alt="minus One One"
                      className="absolute h-5 m-auto w-5"
                    />
                  </div>
                  <Text className="!text-bluegray-900 font-medium ml-5 text-sm">
                    1
                  </Text>
                  <div className="border border-indigo-51 border-solid h-8 ml-[21px] p-1.5 relative w-8">
                    <Img
                      src="images/img_plus_1.svg"
                      alt="plus One"
                      className="absolute h-5 m-auto w-5"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-[27px] w-full">
                  <Text className="!text-bluegray-400 font-normal mb-px text-sm">
                    Price
                  </Text>
                  <Text className="!text-bluegray-800 font-semibold mt-px text-sm">
                    $120.0
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-between mt-[68px] pl-px pt-px w-full">
            <Text className="!text-bluegray-400 font-normal mt-[3px] text-base">
              Total
            </Text>
            <Text className="!text-bluegray-800 font-bold mt-1 text-lg">
              $240.0
            </Text>
          </div>
          <div className="flex flex-row justify-between mt-8 w-[98%]">
            <Button className="bg-deep_orange-300 font-bold h-12 min-w-[186px] px-[35px] rounded-[24px] text-sm text-white-A700">
              Purchase now
            </Button>
            <Button className="bg-deep_orange-50 font-bold h-12 min-w-[185px] px-[35px] rounded-[24px] text-deep_orange-300 text-sm">
              Add to cart
            </Button>
          </div>
          <div className="flex flex-row gap-6 items-center justify-start mt-8 w-[65%]">
            <Img src="images/img_truck.svg" alt="truck" className="h-6 w-6" />
            <div className="flex flex-col gap-2 items-start justify-end pr-[5px] pt-[5px]">
              <Text className="!text-bluegray-900 font-bold text-base">
                Free nationwide shipping
              </Text>
              <Text className="!text-bluegray-900 font-normal text-sm">
                (For order begin $100.0)
              </Text>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
