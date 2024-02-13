"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import {
  Button,
  Input,
  Text,
  Img,
  TextArea,
  SelectBox,
} from "../../components";
import { Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AddProductPage() {
  const [searchBarValue80, setSearchBarValue80] = React.useState("");

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
            <div className="flex flex-col items-start justify-start mb-[540px] w-[87%]">
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
                  src="images/img_icon_21.svg"
                  alt="Icon Six"
                  className="h-5 w-5"
                />
                <Text className="!text-bluegray-800 font-medium text-sm">
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
        <div className="bg-indigo-51 h-[1071px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue80}
                onChange={(e) => setSearchBarValue80(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue80?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue80("")}
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
          <div className="bg-gray-51 flex flex-col items-center justify-start p-[23px] w-full">
            <div className="flex flex-col items-center justify-start mb-3 mt-3.5 w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <Text className="!font-poppins !text-bluegray-900 font-medium mb-[3px] text-xl">
                  Add Product
                </Text>
                <Text className="!text-bluegray-400 font-normal mt-1 text-base">
                  Ecommerce/ Add Product
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end mt-[35px] p-8 rounded shadow-sm w-full">
                <div className="flex flex-col items-start justify-start mt-[5px] w-full">
                  <Text className="!text-bluegray-900 font-bold text-lg">
                    Basic information
                  </Text>
                  <div className="flex flex-row items-center justify-between mt-10 w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start w-[57%]">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Product name
                      </Text>
                      <Input
                        type="text"
                        name="Group2322"
                        placeholder="Enter product’s name"
                        className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-3 rounded text-base text-bluegray-400 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[39%]">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Select category
                      </Text>
                      <SelectBox
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        name="group18058"
                        placeholder="Data project"
                        options={dropDownOptions}
                        className="bg-white-A700 border border-indigo-51 border-solid font-semibold pb-4 pl-5 pt-[21px] rounded text-base text-bluegray-800 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-7 w-full">
                    <div className="flex flex-col gap-[27px] items-center justify-start w-[57%]">
                      <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                        <Text className="!text-bluegray-800 font-medium text-sm">
                          Branch
                        </Text>
                        <Input
                          name="Group2323"
                          placeholder="Enter brach"
                          className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-3 rounded text-base text-bluegray-400 w-full"
                        />
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text className="!text-bluegray-800 font-medium text-sm">
                          Price
                        </Text>
                        <Input
                          name="Group2324"
                          placeholder="Enter brach"
                          className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-3 rounded text-base text-bluegray-400 w-full"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-[39%]">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Product description
                      </Text>
                      <TextArea
                        name="Group2325"
                        placeholder="Write something..."
                        className="bg-white-A700 border border-indigo-51 border-solid h-[166px] pb-[35px] pl-5 pr-[35px] pt-[21px] rounded text-base text-bluegray-400 w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-5 w-full">
                <div className="bg-white-A700 flex flex-col gap-8 items-start justify-end p-8 rounded shadow-sm w-1/2">
                  <Text className="!text-bluegray-900 font-bold mt-[7px] text-lg">
                    Product image
                  </Text>
                  <div className="border-2 border-dashed border-indigo-51 flex flex-col items-center justify-end p-[87px] rounded w-full">
                    <div className="flex flex-col gap-10 items-center justify-start mt-2.5 w-[67%]">
                      <Img
                        src="images/img_image_bluegray_900.svg"
                        alt="image"
                        className="h-7 w-7"
                      />
                      <div className="flex flex-col gap-[13px] items-center justify-end pt-[5px] px-[5px] w-full">
                        <Text className="!text-bluegray-800 font-bold text-base">
                          Upload image
                        </Text>
                        <Text className="!text-bluegray-800 font-normal text-sm">
                          Drag or click to upload image
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col justify-end p-[26px] rounded shadow-sm w-1/2">
                  <Text className="!text-bluegray-900 font-bold ml-1.5 mr-[435px] mt-[11px] text-lg">
                    Add link
                  </Text>
                  <div className="flex flex-col gap-[29px] items-center justify-start mr-1.5 mt-10 w-[99%]">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Product Link
                      </Text>
                      <Input
                        name="Group2326"
                        placeholder="Enter link"
                        className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-3 rounded text-base text-bluegray-400 w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text className="!text-bluegray-800 font-medium text-sm">
                        Hashtag
                      </Text>
                      <Input
                        name="Group2327"
                        placeholder="Enter tag"
                        className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-3 rounded text-base text-bluegray-400 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-4 justify-end mb-1.5 ml-[195px] mr-1.5 mt-[62px] w-[61%]">
                    <Button className="bg-deep_orange-300 font-bold h-12 min-w-[148px] px-[35px] rounded-[24px] text-sm text-white-A700">
                      Save
                    </Button>
                    <Button className="bg-gray-51 font-semibold h-12 min-w-[148px] px-[35px] rounded-[24px] text-bluegray-800 text-sm">
                      Cancel
                    </Button>
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
