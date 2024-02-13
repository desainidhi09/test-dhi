"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Button, Text, Img, SelectBox, Input } from "../../components";
import { Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function EKYCScanIDCardPage() {
  const [searchBarValue40, setSearchBarValue40] = React.useState("");

  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="flex flex-row justify-evenly w-full">
        <Sidebar className="!sticky !w-[243px] h-screen overflow-auto top-0">
          <div className="bg-white-A700 flex flex-col gap-9 items-center justify-start p-[29px] w-full">
            <Img
              src="images/img_logo.svg"
              alt="Logo"
              className="h-7 mt-[7px]"
            />
            <div className="flex flex-col items-start justify-start mb-[422px] w-[87%]">
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px] pr-px py-px">
                <Img
                  src="images/img_icon_12.svg"
                  alt="Icon"
                  className="h-5 w-5"
                />
                <Text className="!text-bluegray-400 font-medium text-sm">
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px] mt-[33px]">
                <Img
                  src="images/img_icon_4.svg"
                  alt="Icon One"
                  className="h-5 w-5"
                />
                <Text className="!text-bluegray-400 font-medium text-sm">
                  Customer
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between ml-[3px] mt-8 w-[99%]">
                <div className="flex flex-row gap-4 items-end justify-start">
                  <Img
                    src="images/img_icon_5.svg"
                    alt="Icon Two"
                    className="h-5 mb-0.5 w-5"
                  />
                  <Text className="!text-bluegray-400 font-medium mt-[5px] text-sm">
                    Message
                  </Text>
                </div>
                <Text className="!text-white-A700 bg-red-600 flex font-bold h-6 items-center justify-center rounded-[50%] text-center text-xs w-6">
                  3
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px] mt-8">
                <Img
                  src="images/img_icon_6.svg"
                  alt="Icon Three"
                  className="h-5 w-5"
                />
                <Text className="!text-bluegray-400 font-medium text-sm">
                  File
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-start justify-start ml-[3px] mt-[33px]">
                <Img
                  src="images/img_icon_7.svg"
                  alt="Icon Four"
                  className="h-5 w-5"
                />
                <Text className="!text-bluegray-400 font-medium mt-[3px] text-sm">
                  Calender
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-end justify-start ml-[3px] mt-[34px]">
                <Img
                  src="images/img_icon_8.svg"
                  alt="Icon Five"
                  className="h-5 mb-0.5 w-5"
                />
                <Text className="!text-bluegray-400 font-medium mt-[5px] text-sm">
                  Shop
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px] mt-[33px]">
                <Img
                  src="images/img_icon_9.svg"
                  alt="Icon Six"
                  className="h-5 w-5"
                />
                <Text className="!text-bluegray-400 font-medium text-sm">
                  Cart
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-end justify-start mt-[31px] w-[61%]">
                <div className="bg-white-A700 flex flex-col h-[26px] items-center justify-start p-[3px] w-[26px]">
                  <div className="bg-bluegray-400 h-5 rounded-[50%] w-5" />
                </div>
                <Text className="!text-bluegray-800 font-medium mb-0.5 mt-[7px] text-sm">
                  Settings
                </Text>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="bg-indigo-51 h-[953px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue40}
                onChange={(e) => setSearchBarValue40(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue40?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue40("")}
                      fillColor="#36414fff"
                    />
                  ) : null
                }
                className="bg-white-A700 border border-bluegray-200 border-solid font-medium h-10 ml-[227px] pr-[35px] rounded text-bluegray-400 text-xs w-[38%]"
              />
              <Img
                src="images/img_shoppingbag.svg"
                alt="shoppingbag"
                className="h-6 ml-[132px] w-6"
              />
              <div className="bg-[url(/images/img_group2427.svg)] bg-cover bg-no-repeat flex flex-col h-6 items-end justify-start ml-6 pl-px py-px w-6">
                <div className="bg-red-600 h-2 mb-3.5 outline outline-[2px] outline-white-A700 rounded-[50%] w-2" />
              </div>
              <Text className="!text-gray-500 font-normal ml-6 text-base">
                Hello, Sam
              </Text>
              <Img
                src="images/img_sherlocktoyfacelow.png"
                alt="SherlockToyFacelow"
                className="h-10 ml-[13px] rounded-[50%] w-10"
              />
            </div>
          </header>
          <div className="bg-gray-51 flex flex-col items-center justify-end p-[23px] w-full">
            <div className="flex flex-col gap-[35px] items-center justify-start mb-px mt-[15px] w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text className="!font-poppins !text-bluegray-900 font-medium mb-0.5 text-xl">
                  eKYC
                </Text>
                <Text className="!text-bluegray-400 font-normal mt-1 text-base">
                  Setting/ eKYC
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-full">
                <div className="flex flex-col items-center justify-start mb-4 mt-5 w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-[28%]">
                    <Text className="!text-bluegray-900 font-bold text-2xl">
                      Scan ID Card
                    </Text>
                    <Text className="!text-bluegray-400 font-normal leading-[22px] text-center text-sm">
                      Please ensure that the image that you uploaded is clear
                      and not blurred
                    </Text>
                  </div>
                  <SelectBox
                    indicator={
                      <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                    }
                    name="group One"
                    placeholder="Select type of Card"
                    options={dropDownOptions}
                    className="bg-white-A700 border border-indigo-51 border-solid font-medium mt-6 pb-4 pl-5 pt-[21px] rounded text-base text-bluegray-800 w-[31%]"
                  />
                  <div className="flex flex-row justify-between mt-10 w-full">
                    <div className="h-[359px] relative w-1/2">
                      <Text className="!text-bluegray-800 font-semibold m-auto text-base">
                        Front
                      </Text>
                      <div className="absolute border-2 border-dashed border-indigo-51 bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto p-[108px] right-0 rounded top-0 w-full">
                        <div className="flex flex-col gap-6 items-center justify-start mt-[19px] w-[47%]">
                          <Button className="bg-red-55 h-14 rounded-[50%] w-14">
                            <Img src="images/img_plus_24X24.svg" />
                          </Button>
                          <Text className="!text-bluegray-400 font-normal leading-[22px] text-center text-sm">
                            Drag or click to upload image
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[359px] justify-end relative w-1/2">
                      <div className="flex flex-col gap-6 h-full items-center justify-start m-auto w-[28%]">
                        <Button className="bg-red-55 h-14 rounded-[50%] w-14">
                          <Img src="images/img_plus_24X24.svg" />
                        </Button>
                        <Text className="!text-bluegray-400 font-normal leading-[22px] text-center text-sm">
                          Drag or click to upload image
                        </Text>
                      </div>
                      <div className="absolute border-2 border-dashed border-indigo-51 bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto p-9 right-0 rounded top-0 w-full">
                        <Text className="!text-bluegray-800 font-semibold mb-[270px] text-base">
                          Back
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-deep_orange-300 font-bold h-12 min-w-[270px] mt-[58px] px-[35px] rounded-[24px] text-sm text-white-A700">
                    Next Step
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
