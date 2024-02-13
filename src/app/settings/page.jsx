"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Button, Text, Input, Img, SelectBox, Switch } from "../../components";
import { Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SettingsPage() {
  const [searchBarValue39, setSearchBarValue39] = React.useState("");

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
            <div className="flex flex-col items-start justify-start mb-[339px] w-[87%]">
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
        <div className="bg-indigo-51 h-[870px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue39}
                onChange={(e) => setSearchBarValue39(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue39?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue39("")}
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
            <div className="flex flex-row items-end justify-between mb-px mt-4 w-full">
              <div className="flex flex-col items-start justify-start w-[67%]">
                <Text className="!font-poppins !text-bluegray-900 font-medium text-xl">
                  Settings
                </Text>
                <div className="bg-white-A700 flex flex-col gap-[35px] items-start justify-start mt-8 p-8 rounded shadow-sm w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start pr-[5px] pt-[5px]">
                    <Text className="!text-bluegray-900 font-bold text-lg">
                      Account info.
                    </Text>
                    <Text className="!text-bluegray-900 font-normal text-sm">
                      Verify your information to proctect your account. Verify
                      now
                    </Text>
                  </div>
                  <div className="gap-5 grid grid-cols-2 justify-center min-h-[auto] w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Username
                      </Text>
                      <Input
                        name="Group2524"
                        placeholder="Sam"
                        className="bg-white-A700 border border-indigo-51 border-solid font-semibold h-14 pl-5 pr-[35px] rounded text-base text-bluegray-800 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Email address
                      </Text>
                      <Input
                        name="email"
                        placeholder="sambrown@gmail.com"
                        className="bg-white-A700 border border-indigo-51 border-solid font-semibold h-14 pl-5 pr-[35px] rounded text-base text-bluegray-800 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        First name
                      </Text>
                      <Input
                        name="Group2526"
                        placeholder="Sam"
                        className="bg-white-A700 border border-indigo-51 border-solid font-semibold h-14 pl-5 pr-[35px] rounded text-base text-bluegray-800 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Last name
                      </Text>
                      <Input
                        name="Group2527"
                        placeholder="Brown"
                        className="bg-white-A700 border border-indigo-51 border-solid font-semibold h-14 pl-5 pr-[35px] rounded text-base text-bluegray-800 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between mt-5 w-full">
                  <div className="bg-white-A700 flex flex-col gap-[37px] items-start justify-start p-8 rounded shadow-sm w-[49%]">
                    <div className="flex flex-col items-center justify-end pr-1 py-1">
                      <Text className="!text-bluegray-900 font-bold mt-px text-lg">
                        Password Reset
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[30px] items-center justify-start w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text className="!text-bluegray-800 font-medium text-sm">
                          Current password
                        </Text>
                        <Input
                          type="password"
                          name="password"
                          placeholder="************"
                          className="bg-white-A700 border border-indigo-51 border-solid font-semibold h-14 pl-5 pr-[35px] rounded text-base text-bluegray-800 w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text className="!text-bluegray-800 font-medium text-sm">
                          New password
                        </Text>
                        <Input
                          type="password"
                          name="password One"
                          placeholder="************"
                          className="bg-white-A700 border border-indigo-51 border-solid font-semibold h-14 pl-5 pr-[35px] rounded text-base text-bluegray-800 w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-8 rounded shadow-sm w-[49%]">
                    <div className="flex flex-col gap-[17px] items-start justify-start pr-[5px] pt-[5px]">
                      <Text className="!text-bluegray-900 font-bold text-lg">
                        Notifications
                      </Text>
                      <Text className="!text-bluegray-400 font-normal text-sm">
                        Open notification to receive our news fastly
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-start mt-[42px] w-[84%]">
                      <Switch className="w-[19%]" />
                      <Text className="!text-bluegray-800 font-normal text-base">
                        Send notification to mail
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-end justify-start mt-8 w-3/4">
                      <Switch className="w-[21%]" />
                      <Text className="!text-bluegray-800 font-normal mb-px mt-[5px] text-base">
                        Send new promotion
                      </Text>
                    </div>
                    <div className="flex flex-row gap-6 items-end justify-start mb-5 mt-8 w-[70%]">
                      <Switch className="w-[23%]" />
                      <Text className="!text-bluegray-800 font-normal mb-px mt-[5px] text-base">
                        Notice my balance
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-start justify-start mt-14 p-8 rounded shadow-sm w-[33%]">
                <div className="flex flex-col items-start justify-end pr-px py-px">
                  <Text className="!text-bluegray-900 font-bold mt-[7px] text-lg">
                    Payment
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start mt-8 w-full">
                  <SelectBox
                    indicator={
                      <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                    }
                    name="group One"
                    placeholder="Paypal"
                    options={dropDownOptions}
                    className="font-semibold pb-4 pl-5 pt-[21px] text-base text-bluegray-800 w-full"
                  />
                  <div className="bg-indigo-400 flex flex-row items-start justify-between pt-1.5 rounded w-full">
                    <div className="h-[83px] mt-[94px] relative w-3/5">
                      <Text className="!text-white-A700 absolute bottom-[33%] font-medium m-auto right-[0%] text-base">
                        1234 **** 4567 8901{" "}
                      </Text>
                      <Img
                        src="images/img_group_83X96.png"
                        alt="Group Two"
                        className="absolute bottom-0 h-[83px] left-[0%] m-auto object-cover rounded top-0 w-[54%]"
                      />
                    </div>
                    <div className="h-[161px] mb-4 relative w-[26%]">
                      <Img
                        src="images/img_group_12X40.svg"
                        alt="Group Three"
                        className="h-3 m-auto rounded"
                      />
                      <Img
                        src="images/img_group_161X77.png"
                        alt="Group Four"
                        className="absolute bottom-0 h-[161px] justify-center left-0 m-auto object-cover right-0 rounded top-0 w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start mt-[37px]">
                  <Text className="!text-bluegray-800 font-medium text-sm">
                    Type your email
                  </Text>
                  <Input
                    type="email"
                    name="email One"
                    placeholder="Ackermanlhn@gmail.com"
                    className="bg-white-A700 border border-indigo-51 border-solid font-medium h-14 pl-5 pr-[35px] rounded text-base text-bluegray-800 w-full"
                  />
                </div>
                <Text className="!text-bluegray-400 font-normal leading-[22px] ml-[45px] mt-8 text-center text-sm w-[70%]">
                  Please make sure that all your information precisely
                </Text>
                <Button className="bg-deep_orange-300 font-bold h-12 mt-[60px] px-[35px] rounded-[24px] text-sm text-white-A700 w-full">
                  Save change
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
