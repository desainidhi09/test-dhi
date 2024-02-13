"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import {
  Img,
  Button,
  Text,
  Input,
  CheckBox,
  SeekBar,
  SelectBox,
} from "../../components";
import { Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ShopSearchPage() {
  const [searchBarValue69, setSearchBarValue69] = React.useState("");
  const [searchBarValue70, setSearchBarValue70] = React.useState("");

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
            <div className="flex flex-col items-start justify-start mb-[1007px] w-[87%]">
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
        <div className="bg-indigo-51 h-[1538px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="frame"
                placeholder="Search..."
                value={searchBarValue70}
                onChange={(e) => setSearchBarValue70(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue70?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue70("")}
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
          <div className="bg-gray-51 flex flex-col items-center justify-start p-[23px] w-full">
            <div className="flex flex-row items-start justify-between mb-[25px] mt-4 w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-[24%]">
                <Text className="!font-poppins !text-bluegray-900 font-medium text-xl">
                  Shopping centre
                </Text>
                <div className="flex h-[1050px] justify-end relative w-full">
                  <div className="flex flex-col gap-[11px] h-full items-start justify-start m-auto pr-1 pt-1">
                    <Text className="!text-white-A700 font-normal ml-[3px] text-sm">
                      Balance
                    </Text>
                    <Text className="!text-white-A700 font-bold text-lg">
                      $0.0
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto p-[31px] right-0 rounded shadow-sm top-0 w-full">
                    <div className="flex flex-col items-start justify-start mb-px mt-2 w-full">
                      <Text className="!text-bluegray-900 font-bold text-lg">
                        Categories
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[34px] w-full">
                        <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text className="!text-bluegray-800 font-medium text-base">
                              Clothes
                            </Text>
                            <Img
                              src="images/img_chevronup.svg"
                              alt="chevronup"
                              className="h-5 w-5"
                            />
                          </div>
                          <div className="flex flex-col gap-6 items-start justify-start p-[3px]">
                            <Text className="!text-bluegray-800 font-medium ml-[5px] mt-px text-base">
                              T-shirts
                            </Text>
                            <Text className="!text-bluegray-800 font-medium ml-[5px] text-base">
                              Jeans
                            </Text>
                            <Text className="!text-bluegray-800 font-medium mb-px ml-[5px] text-base">
                              Jackets
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-51 h-px mt-5 w-full" />
                        <SelectBox
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          name="Frame One"
                          placeholder="Hats"
                          options={dropDownOptions}
                          className="font-medium mt-[21px] pb-px pt-0.5 text-base text-bluegray-800 w-full"
                        />
                        <div className="bg-indigo-51 h-px mt-[22px] w-full" />
                        <SelectBox
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          name="Frame Two"
                          placeholder="Shoes"
                          options={dropDownOptions}
                          className="font-medium mt-[21px] pb-px pt-0.5 text-base text-bluegray-800 w-full"
                        />
                        <div className="bg-indigo-51 h-px mt-[22px] w-full" />
                        <SelectBox
                          indicator={
                            <Img
                              src="images/img_arrowdown.svg"
                              alt="arrow_down"
                            />
                          }
                          name="Frame Three"
                          placeholder="Other accessories"
                          options={dropDownOptions}
                          className="font-medium mt-[21px] pb-px pt-0.5 text-base text-bluegray-800 w-full"
                        />
                        <div className="bg-indigo-51 h-px mt-[22px] w-full" />
                      </div>
                      <div className="flex flex-col gap-[19px] items-start justify-start mt-[23px] w-full">
                        <Text className="!text-bluegray-800 font-medium text-base">
                          Price
                        </Text>
                        <div className="flex flex-col gap-2 items-center justify-start w-full">
                          <SeekBar
                            inputValue={[0]}
                            trackColors={["", "#e2e8ed"]}
                            className="flex h-3.5 w-full"
                            trackClassName="undefined"
                            thumbClassName="undefined"
                          />
                          <div className="flex flex-row justify-between w-full">
                            <Text className="!text-bluegray-400 font-medium h-4 text-xs">
                              $0
                            </Text>
                            <Text className="!text-bluegray-400 font-medium text-xs">
                              $10,000
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text className="!text-bluegray-800 font-medium mt-[25px] text-base">
                        Rating
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-4 w-full">
                        <CheckBox
                          name="Remember"
                          label="5 Stars"
                          className="font-medium pb-1 pl-2 pt-[5px] text-bluegray-800 text-left text-sm"
                        />
                        <Img
                          src="images/img_frame_11X77.png"
                          alt="Frame Four"
                          className="object-cover w-[37%]"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between mt-4 w-full">
                        <CheckBox
                          name="Remember One"
                          label="4 Stars"
                          className="font-medium pb-1 pl-2 pt-[5px] text-bluegray-800 text-left text-sm"
                        />
                        <Img
                          src="images/img_frame_11X61.png"
                          alt="Frame Five"
                          className="object-cover w-[30%]"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between mt-4 w-full">
                        <CheckBox
                          name="Remember Two"
                          label="3 Stars"
                          className="font-medium pb-1 pl-2 pt-[5px] text-bluegray-800 text-left text-sm"
                        />
                        <Img
                          src="images/img_frame_11X45.png"
                          alt="Frame Six"
                          className="object-cover w-[22%]"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between mt-4 w-full">
                        <CheckBox
                          name="Remember Three"
                          label="2 Stars"
                          className="font-medium pb-1 pl-2 pt-[5px] text-bluegray-800 text-left text-sm"
                        />
                        <Img
                          src="images/img_frame_11X28.png"
                          alt="Frame Seven"
                          className="object-cover w-[14%]"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-between mt-4 w-full">
                        <CheckBox
                          name="Remember Four"
                          label="1 Star"
                          className="font-medium pb-1 pl-2 pt-[5px] text-bluegray-800 text-left text-sm"
                        />
                        <Img
                          src="images/img_vector_11X12.png"
                          alt="Vector One"
                          className="object-cover w-3"
                        />
                      </div>
                      <div className="flex flex-col gap-[19px] items-start justify-start mt-6 w-[73%]">
                        <Text className="!text-bluegray-800 font-medium text-base">
                          Color
                        </Text>
                        <div className="flex flex-row justify-between w-full">
                          <Img
                            src="images/img_icon_bluegray_400.svg"
                            alt="Icon Seven"
                            className="h-6 w-6"
                          />
                          <div className="bg-light_blue-A700 flex flex-col h-6 items-center justify-start p-1.5 rounded-[50%] w-6">
                            <div className="bg-white-A700 h-3 rounded-[50%] w-3" />
                          </div>
                          <div className="bg-pink-400 h-6 rounded-[50%] w-6" />
                          <div className="bg-amber-302 h-6 rounded-[50%] w-6" />
                          <div className="bg-pink-A100 h-6 rounded-[50%] w-6" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 items-center justify-start mt-8 w-full">
                        <Button
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              alt="plus"
                              className="ml-[15px] ml-[15px]"
                            />
                          }
                          className="bg-deep_orange-300 font-semibold h-12 pl-[35px] rounded-[24px] text-sm text-white-A700 w-full"
                        >
                          Apply filter
                        </Button>
                        <div className="bg-gray-51 flex flex-row gap-[27px] items-center justify-center p-3.5 rounded-[24px] w-full">
                          <Text className="!text-bluegray-900 font-semibold ml-10 text-sm">
                            Clear all
                          </Text>
                          <Img
                            src="images/img_trash2.svg"
                            alt="trashTwo"
                            className="h-5 mr-10 w-5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-14 w-3/4">
                <Input
                  name="frame Eight"
                  placeholder="Seach name, type,..."
                  value={searchBarValue69}
                  onChange={(e) => setSearchBarValue69(e)}
                  prefix={
                    <Img
                      src="images/img_search_bluegray_900.svg"
                      alt="search"
                      className="cursor-pointer mr-4 cursor-pointer mr-4"
                    />
                  }
                  suffix={
                    searchBarValue69?.length > 0 ? (
                      <Img
                        src="images/img_sliders.svg"
                        alt="sliders"
                        onClick={() => setSearchBarValue69("")}
                        className="cursor-pointer ml-[35px]"
                      />
                    ) : null
                  }
                  className="bg-white-A700 h-14 rounded shadow-sm text-base text-bluegray-400 w-full"
                />
                <div className="h-[1186px] mt-[19px] relative w-full">
                  <div className="absolute bg-white-A700 h-[308px] left-0 m-auto right-0 rounded shadow-sm top-[1%] w-[32%]" />
                  <div className="bg-white-A700 h-[308px] ml-auto mt-[9px] rounded shadow-sm w-[32%]" />
                  <div className="absolute bottom-0 grid grid-cols-1 justify-center left-0 m-auto min-h-[auto] right-0 top-0 w-full">
                    <div className="flex flex-row justify-between w-full">
                      <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-sm w-[32%]">
                        <div className="h-[353px] relative w-full">
                          <Img
                            src="images/img_3427408800611.png"
                            alt="3427408800611"
                            className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_zap.svg"
                                  alt="zap"
                                  className="ml-[11px] ml-[11px]"
                                />
                              }
                              className="bg-red-400_19 h-[30px] min-w-[82px] pl-2 rounded text-red-600 text-xs"
                            >
                              Feature
                            </Button>
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_tag.svg"
                                  alt="tag"
                                  className="ml-[13px] ml-[13px]"
                                />
                              }
                              className="bg-indigo-400_19 h-[30px] min-w-[98px] pl-2 rounded text-indigo-400 text-xs"
                            >
                              Flash sale
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[42%]">
                          <div className="flex flex-col gap-8 items-center justify-start w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[96%]">
                              <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                                <Text className="!text-bluegray-900 font-medium text-sm">
                                  Avo T-Shirt
                                </Text>
                                <div className="flex flex-row items-start justify-evenly w-full">
                                  <Text className="!text-bluegray-900 font-bold text-lg">
                                    $120.0
                                  </Text>
                                  <Text className="!font-poppins !text-bluegray-400 font-normal line-through mt-0.5 text-sm">
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_frame_11X77.png"
                                alt="Frame Eleven"
                                className="object-cover w-[72%]"
                              />
                            </div>
                            <div className="flex flex-row justify-between w-full">
                              <Button className="bg-deep_orange-300 h-12 rounded-[50%] w-12">
                                <Img src="images/img_plus.svg" />
                              </Button>
                              <Button className="bg-gray-51 h-12 rounded-[50%] w-12">
                                <Img src="images/img_buttonprimary_10.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-sm w-[32%]">
                        <div className="h-[353px] relative w-full">
                          <Img
                            src="images/img_3427408800611_353X273.png"
                            alt="3427408800611 One"
                            className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_zap.svg"
                                  alt="zap"
                                  className="ml-[11px] ml-[11px]"
                                />
                              }
                              className="bg-red-400_19 h-[30px] min-w-[82px] pl-2 rounded text-red-600 text-xs"
                            >
                              Feature
                            </Button>
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_tag.svg"
                                  alt="tag"
                                  className="ml-[13px] ml-[13px]"
                                />
                              }
                              className="bg-indigo-400_19 h-[30px] min-w-[98px] pl-2 rounded text-indigo-400 text-xs"
                            >
                              Flash sale
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[42%]">
                          <div className="flex flex-col gap-8 items-center justify-start w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[96%]">
                              <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                                <Text className="!text-bluegray-900 font-medium text-sm">
                                  Basic T-Shirt
                                </Text>
                                <div className="flex flex-row items-start justify-evenly w-full">
                                  <Text className="!text-bluegray-900 font-bold text-lg">
                                    $120.0
                                  </Text>
                                  <Text className="!font-poppins !text-bluegray-400 font-normal line-through mt-0.5 text-sm">
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_frame_11X77.png"
                                alt="Frame One"
                                className="object-cover w-[72%]"
                              />
                            </div>
                            <div className="flex flex-row justify-between w-full">
                              <Button className="bg-deep_orange-300 h-12 rounded-[50%] w-12">
                                <Img src="images/img_plus.svg" />
                              </Button>
                              <Button className="bg-gray-51 h-12 rounded-[50%] w-12">
                                <Img src="images/img_buttonprimary_10.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-[37px] items-center justify-start pb-8 rounded-lg shadow-sm w-[32%]">
                        <div className="h-[353px] relative w-full">
                          <Img
                            src="images/img_3427408800611_1.png"
                            alt="3427408800611 Two"
                            className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_zap.svg"
                                  alt="zap"
                                  className="ml-[11px] ml-[11px]"
                                />
                              }
                              className="bg-red-400_19 h-[30px] min-w-[82px] pl-2 rounded text-red-600 text-xs"
                            >
                              Feature
                            </Button>
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_tag.svg"
                                  alt="tag"
                                  className="ml-[13px] ml-[13px]"
                                />
                              }
                              className="bg-indigo-400_19 h-[30px] min-w-[98px] pl-2 rounded text-indigo-400 text-xs"
                            >
                              Flash sale
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[42%]">
                          <div className="flex flex-col gap-8 items-center justify-start w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[96%]">
                              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                                <Text className="!text-bluegray-900 font-medium text-sm">
                                  Trendy Polo
                                </Text>
                                <div className="flex flex-row items-start justify-evenly w-full">
                                  <Text className="!text-bluegray-900 font-bold text-lg">
                                    $120.0
                                  </Text>
                                  <Text className="!font-poppins !text-bluegray-400 font-normal line-through mt-0.5 text-sm">
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_frame_11X77.png"
                                alt="Frame Two"
                                className="object-cover w-[72%]"
                              />
                            </div>
                            <div className="flex flex-row justify-between w-full">
                              <Button className="bg-deep_orange-300 h-12 rounded-[50%] w-12">
                                <Img src="images/img_plus.svg" />
                              </Button>
                              <Button className="bg-gray-51 h-12 rounded-[50%] w-12">
                                <Img src="images/img_buttonprimary_10.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-sm w-[32%]">
                        <div className="h-[353px] relative w-full">
                          <Img
                            src="images/img_3427408800611_2.png"
                            alt="3427408800611 One"
                            className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_zap.svg"
                                  alt="zap"
                                  className="ml-[11px] ml-[11px]"
                                />
                              }
                              className="bg-red-400_19 h-[30px] min-w-[82px] pl-2 rounded text-red-600 text-xs"
                            >
                              Feature
                            </Button>
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_tag.svg"
                                  alt="tag"
                                  className="ml-[13px] ml-[13px]"
                                />
                              }
                              className="bg-indigo-400_19 h-[30px] min-w-[98px] pl-2 rounded text-indigo-400 text-xs"
                            >
                              Flash sale
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[42%]">
                          <div className="flex flex-col gap-8 items-center justify-start w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[96%]">
                              <div className="flex flex-col gap-[17px] justify-start w-full">
                                <Text className="!text-bluegray-900 font-medium ml-3.5 text-sm">
                                  Polo Shirt
                                </Text>
                                <div className="flex flex-row items-start justify-evenly w-full">
                                  <Text className="!text-bluegray-900 font-bold text-lg">
                                    $120.0
                                  </Text>
                                  <Text className="!font-poppins !text-bluegray-400 font-normal line-through mt-0.5 text-sm">
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_frame_11X77.png"
                                alt="Frame Twelve"
                                className="object-cover w-[72%]"
                              />
                            </div>
                            <div className="flex flex-row justify-between w-full">
                              <Button className="bg-deep_orange-300 h-12 rounded-[50%] w-12">
                                <Img src="images/img_plus.svg" />
                              </Button>
                              <Button className="bg-gray-51 h-12 rounded-[50%] w-12">
                                <Img src="images/img_buttonprimary_10.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-sm w-[32%]">
                        <div className="h-[353px] relative w-full">
                          <Img
                            src="images/img_3427408800611_3.png"
                            alt="3427408800611 One One"
                            className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_zap.svg"
                                  alt="zap"
                                  className="ml-[11px] ml-[11px]"
                                />
                              }
                              className="bg-red-400_19 h-[30px] min-w-[82px] pl-2 rounded text-red-600 text-xs"
                            >
                              Feature
                            </Button>
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_tag.svg"
                                  alt="tag"
                                  className="ml-[13px] ml-[13px]"
                                />
                              }
                              className="bg-indigo-400_19 h-[30px] min-w-[98px] pl-2 rounded text-indigo-400 text-xs"
                            >
                              Flash sale
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[42%]">
                          <div className="flex flex-col gap-8 items-center justify-start w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[96%]">
                              <div className="flex flex-col gap-[17px] justify-start w-full">
                                <Text className="!text-bluegray-900 font-medium ml-3.5 text-sm">
                                  Bomber
                                </Text>
                                <div className="flex flex-row items-start justify-evenly w-full">
                                  <Text className="!text-bluegray-900 font-bold text-lg">
                                    $120.0
                                  </Text>
                                  <Text className="!font-poppins !text-bluegray-400 font-normal line-through mt-0.5 text-sm">
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_frame_11X77.png"
                                alt="Frame One One"
                                className="object-cover w-[72%]"
                              />
                            </div>
                            <div className="flex flex-row justify-between w-full">
                              <Button className="bg-deep_orange-300 h-12 rounded-[50%] w-12">
                                <Img src="images/img_plus.svg" />
                              </Button>
                              <Button className="bg-gray-51 h-12 rounded-[50%] w-12">
                                <Img src="images/img_buttonprimary_10.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-sm w-[32%]">
                        <div className="h-[353px] relative w-full">
                          <Img
                            src="images/img_3427408800611_4.png"
                            alt="3427408800611 Two One"
                            className="h-[353px] m-auto object-cover rounded-tl-lg rounded-tr-lg w-full"
                          />
                          <div className="absolute flex flex-row gap-2 justify-center m-auto right-[7%] top-[6%] w-[69%]">
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_zap.svg"
                                  alt="zap"
                                  className="ml-[11px] ml-[11px]"
                                />
                              }
                              className="bg-red-400_19 h-[30px] min-w-[82px] pl-2 rounded text-red-600 text-xs"
                            >
                              Feature
                            </Button>
                            <Button
                              rightIcon={
                                <Img
                                  src="images/img_tag.svg"
                                  alt="tag"
                                  className="ml-[13px] ml-[13px]"
                                />
                              }
                              className="bg-indigo-400_19 h-[30px] min-w-[98px] pl-2 rounded text-indigo-400 text-xs"
                            >
                              Flash sale
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[42%]">
                          <div className="flex flex-col gap-8 items-center justify-start w-full">
                            <div className="flex flex-col gap-4 items-center justify-start w-[96%]">
                              <div className="flex flex-col gap-[17px] justify-start w-full">
                                <Text className="!text-bluegray-900 font-medium ml-3.5 text-sm">
                                  Over Shirt
                                </Text>
                                <div className="flex flex-row items-start justify-evenly w-full">
                                  <Text className="!text-bluegray-900 font-bold text-lg">
                                    $120.0
                                  </Text>
                                  <Text className="!font-poppins !text-bluegray-400 font-normal line-through mt-0.5 text-sm">
                                    $140.0
                                  </Text>
                                </div>
                              </div>
                              <Img
                                src="images/img_frame_11X77.png"
                                alt="Frame Two One"
                                className="object-cover w-[72%]"
                              />
                            </div>
                            <div className="flex flex-row justify-between w-full">
                              <Button className="bg-deep_orange-300 h-12 rounded-[50%] w-12">
                                <Img src="images/img_plus.svg" />
                              </Button>
                              <Button className="bg-gray-51 h-12 rounded-[50%] w-12">
                                <Img src="images/img_buttonprimary_10.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 justify-center mt-[41px] w-[28%]">
                  <div className="border border-indigo-51 border-solid h-8 p-1.5 relative w-8">
                    <Img
                      src="images/img_chevronleft_20X20.svg"
                      alt="chevronleft"
                      className="absolute h-5 m-auto w-5"
                    />
                  </div>
                  <Button className="border border-bluegray-900 border-solid font-medium h-8 min-w-[32px] pl-[11px] pr-3 text-bluegray-900 text-sm">
                    1
                  </Button>
                  <Button className="border border-indigo-51 border-solid font-medium h-8 min-w-[32px] px-2.5 text-bluegray-800 text-sm">
                    2
                  </Button>
                  <Button className="border border-indigo-51 border-solid font-medium h-8 min-w-[32px] px-[9px] text-bluegray-800 text-sm">
                    ...
                  </Button>
                  <Button className="border border-indigo-51 border-solid font-medium h-8 min-w-[32px] px-2.5 text-bluegray-800 text-sm">
                    9
                  </Button>
                  <div className="border border-indigo-51 border-solid h-8 p-1.5 relative rotate-[180deg] w-8">
                    <Img
                      src="images/img_chevronright.svg"
                      alt="chevronright"
                      className="absolute h-5 m-auto w-5"
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
