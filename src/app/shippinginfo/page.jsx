"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import {
  Text,
  Img,
  Button,
  Input,
  TextArea,
  SelectBox,
} from "../../components";
import { Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ShippingInfoPage() {
  const [searchBarValue68, setSearchBarValue68] = React.useState("");

  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="flex flex-row justify-evenly w-full">
        <Sidebar className="!sticky !w-[242px] h-screen overflow-auto top-0">
          <div className="bg-white-A700 flex flex-col gap-9 items-center justify-start p-7 w-full">
            <Img src="images/img_logo.svg" alt="Logo" className="h-7 mt-2" />
            <div className="flex flex-col items-start justify-start mb-[460px] w-[86%]">
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
        <div className="bg-indigo-51 h-[990px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue68}
                onChange={(e) => setSearchBarValue68(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue68?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue68("")}
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
            <div className="flex flex-col gap-[35px] items-center justify-start mb-[9px] mt-3.5 w-full">
              <div className="flex flex-row items-start justify-between w-[99%]">
                <Text className="!font-poppins !text-bluegray-900 font-medium mb-[3px] text-xl">
                  Checkout
                </Text>
                <Text className="!text-bluegray-400 font-normal mt-1 text-base">
                  Shop Central/ Product detail/ Checkout
                </Text>
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-[67%]">
                  <div className="flex flex-col items-start justify-start mb-1 w-full">
                    <div className="flex flex-col gap-3 items-start justify-end pr-1 py-1">
                      <Text className="!text-bluegray-900 font-bold mt-0.5 text-lg">
                        Shipping information
                      </Text>
                      <Text className="!text-bluegray-900 font-normal text-sm">
                        Fill form below
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start mt-9 w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Name
                      </Text>
                      <Input
                        type="text"
                        name="Group2340"
                        placeholder="Enter your name"
                        className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-3 rounded text-base text-bluegray-400 w-full"
                      />
                    </div>
                    <div className="flex flex-row justify-between mt-[27px] w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-[49%]">
                        <Text className="!text-bluegray-800 font-medium text-sm">
                          Email address
                        </Text>
                        <Input
                          type="email"
                          name="group One"
                          placeholder="Enter your email"
                          className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-[35px] rounded text-base text-bluegray-400 w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start mt-px w-[49%]">
                        <Text className="!text-bluegray-800 font-medium text-sm">
                          Phone number
                        </Text>
                        <Input
                          type="number"
                          name="group Two"
                          placeholder="Enter your phone number"
                          className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-[35px] rounded text-base text-bluegray-400 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[13px] items-start justify-start mt-7 w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Your address
                      </Text>
                      <TextArea
                        name="group Three"
                        placeholder="Enter full address"
                        className="bg-white-A700 border border-indigo-51 border-solid h-[115px] pb-[35px] pl-5 pr-[35px] pt-5 rounded text-base text-bluegray-400 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mt-[29px] w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Country
                      </Text>
                      <SelectBox
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        name="country One"
                        placeholder="Vietnam"
                        options={dropDownOptions}
                        className="bg-white-A700 border border-indigo-51 border-solid font-semibold pb-5 pl-5 pt-[19px] rounded text-base text-bluegray-800 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start mt-[27px] w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Note
                      </Text>
                      <TextArea
                        name="group Four"
                        placeholder="Write somethhing for us..."
                        className="bg-white-A700 border border-indigo-51 border-solid h-[115px] pb-[35px] pl-5 pr-[35px] pt-[21px] rounded text-base text-bluegray-400 w-full"
                      />
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
                          <div className="flex flex-col gap-[19px] items-start justify-start pr-px pt-px">
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
                        name="group Five"
                        placeholder="Enter reffered code"
                        className="bg-white-A700 border border-indigo-51 border-solid h-14 mt-[31px] pl-5 pr-[35px] rounded-lg text-base text-bluegray-400 w-full"
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
