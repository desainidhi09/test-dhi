"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Input, CheckBox } from "../../components";
import { Sidebar } from "react-pro-sidebar";

export default function PaymentInfoPage() {
  const [searchBarValue50, setSearchBarValue50] = React.useState("");

  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="flex flex-row items-start justify-evenly w-full">
        <Sidebar className="!sticky !w-[243px] h-screen overflow-auto top-0">
          <div className="bg-white-A700 flex flex-col gap-9 items-center justify-start p-[29px] w-full">
            <Img
              src="images/img_logo.svg"
              alt="Logo"
              className="h-7 mt-[7px]"
            />
            <div className="flex flex-col items-start justify-start mb-[459px] w-[87%]">
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px] pr-px py-px">
                <Img
                  src="images/img_icon_3.svg"
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
                  src="images/img_icon_17.svg"
                  alt="Icon Five"
                  className="h-5 mb-0.5 w-5"
                />
                <Text className="!text-bluegray-800 font-medium mt-[5px] text-sm">
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
                <Text className="!text-bluegray-400 font-medium mb-0.5 mt-[7px] text-sm">
                  Settings
                </Text>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="bg-indigo-51 h-[750px] mb-60 w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue50}
                onChange={(e) => setSearchBarValue50(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue50?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue50("")}
                      fillColor="#36414fff"
                    />
                  ) : null
                }
                className="bg-gray-51 font-medium h-10 ml-[227px] pr-[35px] rounded text-bluegray-400 text-xs w-[38%]"
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
            <div className="flex flex-col gap-[35px] items-center justify-start mb-2 mt-3.5 w-full">
              <div className="flex flex-row items-start justify-between w-[99%]">
                <Text className="!font-poppins !text-bluegray-900 font-medium mb-[3px] text-xl">
                  Checkout
                </Text>
                <Text className="!text-bluegray-400 font-normal mt-1 text-base">
                  Shop Central/ Product detail/ Checkout
                </Text>
              </div>
              <div className="flex flex-row items-center justify-between w-full">
                <div className="h-[803px] relative w-[67%]">
                  <div className="absolute flex flex-col gap-[11px] items-start justify-start ml-[54px] mt-auto pr-1 pt-1">
                    <Text className="!text-white-A700 font-normal ml-[3px] text-sm">
                      Balance
                    </Text>
                    <Text className="!text-white-A700 font-bold text-lg">
                      $0.0
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 flex flex-col gap-8 items-start justify-start m-auto p-[31px] rounded shadow-sm w-full">
                    <div className="flex flex-col gap-[11px] items-start justify-end ml-px mt-px pr-1 py-1">
                      <Text className="!text-bluegray-900 font-bold mt-0.5 text-lg">
                        Payment information
                      </Text>
                      <Text className="!text-bluegray-900 font-normal text-sm">
                        Fill form below
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[277px] ml-px w-full">
                      <div className="flex flex-col gap-5 items-start justify-start">
                        <CheckBox
                          name="Remember"
                          label="Cash on delivery"
                          className="font-medium pb-px pl-2 pt-[7px] text-bluegray-800 text-left text-sm"
                        />
                        <CheckBox
                          name="Remember One"
                          label="Credit card"
                          className="font-medium h-[18px] outline outline-[0.7px] outline-bluegray-400_87 pb-1 pl-[11px] pt-[5px] text-bluegray-800 text-left text-sm w-[18px]"
                        />
                        <CheckBox
                          name="Remember Two"
                          label="RiriBa wallet"
                          className="font-medium pb-1 pl-2 pt-[5px] text-bluegray-800 text-left text-sm"
                        />
                      </div>
                      <div className="bg-indigo-51 h-px mt-8 w-full" />
                      <div className="flex flex-col gap-[27px] items-center justify-start mt-[34px] w-full">
                        <div className="flex flex-col gap-3 items-start justify-start w-full">
                          <Text className="!text-bluegray-800 font-medium text-sm">
                            Card number
                          </Text>
                          <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-start justify-end p-4 rounded w-full">
                            <Input
                              type="number"
                              name="Frame"
                              placeholder="Enter your card number"
                              prefix={
                                <Img
                                  src="images/img_icon_18.svg"
                                  alt="Icon "
                                  className="mr-4 mr-4"
                                />
                              }
                              className="h-[22px] ml-1 mt-0.5 text-base text-bluegray-400 w-[33%]"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <div className="flex flex-col gap-3 items-start justify-start mt-px w-[49%]">
                            <Text className="!text-bluegray-800 font-medium text-sm">
                              Card holder
                            </Text>
                            <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-start justify-start p-4 rounded w-full">
                              <Input
                                type="text"
                                name="Frame One"
                                placeholder="Enter your name"
                                prefix={
                                  <Img
                                    src="images/img_icon_19.svg"
                                    alt="Icon "
                                    className="mr-4 mr-4"
                                  />
                                }
                                className="h-6 ml-1 pr-[3px] text-base text-bluegray-400 w-[54%]"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-3 items-start justify-start w-[49%]">
                            <Text className="!text-bluegray-800 font-medium text-sm">
                              CVV
                            </Text>
                            <Input
                              name="Frame Two"
                              placeholder="***"
                              prefix={
                                <Img
                                  src="images/img_icon_20.svg"
                                  alt="Icon "
                                  className="mr-4 mr-4"
                                />
                              }
                              className="bg-white-A700 border border-indigo-51 border-solid h-14 pr-[35px] rounded text-base text-bluegray-400 w-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-center justify-start w-[33%]">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          src="images/img_rectangle_118X110.png"
                          alt="Rectangle"
                          className="object-cover w-[36%]"
                        />
                        <div className="flex flex-col gap-[41px] items-start justify-start w-[57%]">
                          <div className="flex flex-col gap-[18px] items-start justify-start pr-px pt-px">
                            <Text className="!text-bluegray-900 font-bold mt-1 text-lg">
                              Polo Shirt
                            </Text>
                            <Text className="!text-bluegray-400 font-normal text-sm">
                              Color: Grey, S
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between w-full">
                            <Text className="!text-bluegray-400 font-normal mb-px text-sm">
                              Price
                            </Text>
                            <Text className="!text-bluegray-800 font-semibold mt-px text-sm">
                              $120.0
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-51 h-px mt-8 w-full" />
                      <Input
                        name="Group One"
                        placeholder="Enter reffered code"
                        className="bg-white-A700 border border-indigo-51 border-solid h-14 mt-[31px] pl-5 pr-3 rounded-lg text-base text-bluegray-400 w-full"
                      />
                      <div className="bg-indigo-51 h-px mt-8 w-full" />
                      <div className="flex flex-col gap-5 items-center justify-start mt-[35px] w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text className="!text-bluegray-400 font-normal text-base">
                            Price
                          </Text>
                          <Text className="!text-bluegray-800 font-medium mt-px text-base">
                            $120.0
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-between pl-[3px] pt-[3px] w-full">
                          <Text className="!text-bluegray-400 font-normal mt-0.5 text-base">
                            Shipping fee
                          </Text>
                          <Text className="!text-bluegray-800 font-medium mt-px text-base">
                            $10.0
                          </Text>
                        </div>
                      </div>
                      <div className="bg-indigo-51 h-px mt-8 w-full" />
                      <div className="flex flex-row items-start justify-between mt-[31px] pl-px pt-px w-full">
                        <Text className="!text-bluegray-400 font-normal mt-[3px] text-base">
                          Total
                        </Text>
                        <Text className="!text-bluegray-800 font-bold mt-1 text-lg">
                          $130.0
                        </Text>
                      </div>
                      <div className="flex flex-col gap-4 items-center justify-start mt-8 w-full">
                        <Button className="bg-deep_orange-300 font-bold h-12 px-[35px] rounded-[24px] text-sm text-white-A700 w-full">
                          Purchase now
                        </Button>
                        <Button className="bg-gray-51 font-semibold h-12 px-[35px] rounded-[24px] text-bluegray-800 text-sm w-full">
                          Scan QR code
                        </Button>
                      </div>
                      <Text className="!text-bluegray-400 font-normal leading-[22px] mt-8 text-center text-sm w-[98%]">
                        By clicking “Purchase” button, I agree with RiriBa Term
                        and Policy
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 items-end justify-center w-[57%]">
                    <Img
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                      className="h-6 w-6"
                    />
                    <Text className="!text-indigo-400 font-medium mt-[5px] text-base">
                      Back to shopping cart
                    </Text>
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
