"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Img, Text, Input } from "../../components";
import { Sidebar } from "react-pro-sidebar";

export default function EKYCIntroductionStepThreePage() {
  const [searchBarValue61, setSearchBarValue61] = React.useState("");

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
            <div className="flex flex-col items-start justify-start mb-[419px] w-[87%]">
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
        <div className="bg-indigo-51 h-[950px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue61}
                onChange={(e) => setSearchBarValue61(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue61?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue61("")}
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
              <div className="bg-white-A700 flex flex-col gap-[58px] items-center justify-start p-20 rounded shadow-sm w-full">
                <Text className="!text-bluegray-900 font-bold text-2xl">
                  Introduction
                </Text>
                <div className="flex flex-col gap-5 items-center justify-start mb-[60px] w-[46%]">
                  <div className="border border-indigo-51 border-solid flex flex-row items-center justify-between p-[25px] rounded shadow-md w-full">
                    <div className="flex flex-row gap-5 items-center justify-center ml-[7px] w-[39%]">
                      <div className="flex flex-col h-7 items-center justify-start p-px w-7">
                        <div className="flex flex-col items-end justify-start my-[3px] outline outline-[0.9px] outline-bluegray-900 p-px rounded-sm w-[97%]">
                          <Img
                            src="images/img_vector415_bluegray_900.svg"
                            alt="Vector415"
                            className="h-px mt-0.5"
                          />
                          <div className="flex flex-row items-start justify-evenly mr-[3px] my-px w-[83%]">
                            <Img
                              src="images/img_01navigation_9X9.svg"
                              alt="01navigation"
                              className="h-[9px] mt-px w-[9px]"
                            />
                            <Img
                              src="images/img_vector415_bluegray_900.svg"
                              alt="Vector416"
                              className="h-px"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start pr-[3px] py-[3px]">
                        <Text className="!text-bluegray-800 font-normal text-sm">
                          Bước 1:
                        </Text>
                        <Text className="!text-bluegray-800 font-bold mb-px text-base">
                          Scan ID Card
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_checkcircle.svg"
                      alt="checkcircle"
                      className="h-6 mr-[7px] w-6"
                    />
                  </div>
                  <div className="border border-indigo-51 border-solid flex flex-row items-center justify-between p-[25px] rounded shadow-md w-full">
                    <div className="flex flex-row gap-5 items-center justify-center ml-[7px] w-[34%]">
                      <div className="bg-[url(/images/img_group_28X28.svg)] bg-cover bg-no-repeat h-7 p-px relative w-7">
                        <Img
                          src="images/img_group_26X26.svg"
                          alt="Group One"
                          className="absolute h-[26px] m-auto w-[26px]"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start pr-[3px] py-[3px]">
                        <Text className="!text-bluegray-800 font-normal mt-px text-sm">
                          Bước 2:
                        </Text>
                        <Text className="!text-bluegray-800 font-bold mb-px text-base">
                          Scan Face
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_checkcircle.svg"
                      alt="checkcircle One"
                      className="h-6 mr-[7px] w-6"
                    />
                  </div>
                  <div className="bg-white-A700 flex flex-row items-center justify-between p-[25px] rounded shadow-md w-full">
                    <div className="bg-white-A700 flex flex-row gap-5 items-center justify-start ml-[7px] rounded w-[55%]">
                      <div className="h-[30px] relative w-[13%]">
                        <Img
                          src="images/img_02essential_28X24.svg"
                          alt="02essential"
                          className="absolute h-7 left-[0%] m-auto top-[0%]"
                        />
                        <div className="absolute bottom-[-2%] flex flex-col h-4 items-center justify-start m-auto p-px right-[0%] w-4">
                          <div className="bg-white-A700 h-[13px] mb-px outline outline-[0.9px] outline-deep_orange-300 p-0.5 relative rounded-md w-[13px]">
                            <Img
                              src="images/img_02essential_1.svg"
                              alt="02essential One"
                              className="absolute h-[9px] m-auto w-[9px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start pr-[3px] py-[3px]">
                        <Text className="!text-bluegray-800 font-normal text-sm">
                          Bước 3:
                        </Text>
                        <Text className="!text-bluegray-800 font-bold mb-px text-base">
                          Confirm Information
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white-A700 h-6 mr-[7px] my-[13px] p-1 relative rounded w-6">
                      <Img
                        src="images/img_arrowright_bluegray_900.svg"
                        alt="arrowright"
                        className="absolute h-4 m-auto w-4"
                      />
                    </div>
                  </div>
                  <div className="border border-indigo-51 border-solid flex flex-row items-center justify-between p-[25px] rounded shadow-md w-full">
                    <div className="flex flex-row gap-5 items-center justify-center ml-[7px] w-[33%]">
                      <Img
                        src="images/img_02essential_28X28.svg"
                        alt="02essential Two"
                        className="h-7 w-7"
                      />
                      <div className="flex flex-col gap-[13px] items-start justify-start pr-[3px] pt-[3px]">
                        <Text className="!text-bluegray-400 font-normal text-sm">
                          Bước 4:
                        </Text>
                        <Text className="!text-bluegray-800 font-bold text-base">
                          Signature
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_lock.svg"
                      alt="lock"
                      className="h-6 mr-[7px] w-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
