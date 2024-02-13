"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, SelectBox, Input } from "../../components";
import { Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function DashboardOnePage() {
  const [searchBarValue13, setSearchBarValue13] = React.useState("");

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
            <div className="flex flex-col items-start justify-start mb-[644px] w-[87%]">
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px] pr-px py-px">
                <Img
                  src="images/img_icon_3.svg"
                  alt="Icon"
                  className="h-5 w-5"
                />
                <Text className="!text-bluegray-800 font-medium text-sm">
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
                <Text className="!text-bluegray-400 font-medium mb-0.5 mt-[7px] text-sm">
                  Settings
                </Text>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="bg-indigo-51 h-[1175px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue13}
                onChange={(e) => setSearchBarValue13(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue13?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue13("")}
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
            <div className="flex flex-col items-center justify-start my-px w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text className="!font-poppins !text-bluegray-900 font-medium text-xl">
                  Overview
                </Text>
                <div className="flex flex-row gap-3 justify-between w-auto">
                  <Button className="bg-white-A700 p-[13px] rounded w-1/4">
                    <Img src="images/img_buttonprimary.svg" />
                  </Button>
                  <SelectBox
                    indicator={
                      <Img src="images/img_arrowdown.svg" alt="arrow_down" />
                    }
                    name="dropdown"
                    placeholder="Last week"
                    options={dropDownOptions}
                    className="bg-white-A700 font-medium pb-[17px] pl-4 pt-4 rounded text-bluegray-800 text-sm w-[70%]"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6 w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-6 rounded shadow-sm w-[33%]">
                  <div className="flex flex-row items-center justify-between mb-1 w-[87%]">
                    <Img
                      src="images/img_group_26X70.svg"
                      alt="Group One"
                      className="h-[26px]"
                    />
                    <div className="flex flex-col items-center justify-start w-[61%]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex h-10 relative w-full">
                          <Text className="!text-bluegray-800 font-bold m-auto text-[28px]">
                            $10.000
                          </Text>
                          <div className="bg-green-700_63 flex flex-row items-start justify-center ml-auto mt-[7px] pr-[3px] rounded w-[32%] z-[1]">
                            <Img
                              src="images/img_line.svg"
                              alt="line One"
                              className="h-4 mt-[3px] w-4"
                            />
                            <Text className="!text-green-700 font-semibold text-sm">
                              0.2%
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-1.5 items-center justify-start mt-[3px]">
                          <div className="bg-indigo-401 h-1.5 mb-[3px] mt-1 rounded-[50%] w-1.5" />
                          <Text className="!text-bluegray-400 font-normal text-sm">
                            Total income
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 w-[67%]">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-6 rounded shadow-sm w-full">
                    <div className="flex flex-row items-center justify-between w-[87%]">
                      <Img
                        src="images/img_group_1.svg"
                        alt="Group Two"
                        className="h-[26px]"
                      />
                      <div className="flex flex-row items-start justify-start w-[61%]">
                        <div className="flex flex-col items-center justify-start w-[70%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text className="!text-bluegray-800 font-bold text-[28px]">
                              $10.000
                            </Text>
                            <div className="flex flex-row items-start justify-evenly mt-[5px]">
                              <div className="bg-indigo-401 h-1.5 mb-2 mt-0.5 rounded-[50%] w-1.5" />
                              <Text className="!text-bluegray-400 font-normal text-sm">
                                Total Expenses
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-red-600_63 flex flex-row items-start justify-center mb-[34px] mt-[7px] pr-[3px] rounded w-[32%]">
                          <Img
                            src="images/img_line_16X16.svg"
                            alt="line Two"
                            className="h-4 mt-[3px] w-4"
                          />
                          <Text className="!text-red-600 font-semibold text-sm">
                            0.2%
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-6 rounded shadow-sm w-full">
                    <div className="flex flex-row items-center justify-between mb-1 w-[87%]">
                      <Img
                        src="images/img_group_26X70.svg"
                        alt="Group Three"
                        className="h-[26px]"
                      />
                      <div className="flex flex-col items-center justify-start w-[61%]">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex h-10 relative w-full">
                            <Text className="!text-bluegray-800 font-bold m-auto text-[28px]">
                              $10.000
                            </Text>
                            <div className="bg-green-700_63 flex flex-row items-start justify-center ml-auto mt-[7px] pr-[3px] rounded w-[32%] z-[1]">
                              <Img
                                src="images/img_line.svg"
                                alt="line Three"
                                className="h-4 mt-[3px] w-4"
                              />
                              <Text className="!text-green-700 font-semibold text-sm">
                                0.2%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-1.5 items-center justify-start mt-1">
                            <div className="bg-indigo-401 h-1.5 my-1 rounded-[50%] w-1.5" />
                            <Text className="!text-bluegray-400 font-normal text-sm">
                              Total Revenue
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between mt-5 w-full">
                <div className="flex flex-col items-center justify-start w-[67%]">
                  <div className="bg-white-A700 flex flex-col gap-[31px] items-center justify-start p-[26px] rounded shadow-sm w-full">
                    <div className="flex flex-row items-center justify-between w-[99%]">
                      <Text className="!text-bluegray-900 font-bold text-lg">
                        Statistics
                      </Text>
                      <Button
                        leftIcon={
                          <Img
                            src="images/img_calendar.svg"
                            alt="calendar"
                            className="mr-2.5 mr-2.5"
                          />
                        }
                        className="bg-white-A700 border border-bluegray-200 border-solid font-semibold h-10 min-w-[172px] pr-4 rounded shadow-sm text-bluegray-800 text-sm"
                      >
                        13 Aug - 20 Aug
                      </Button>
                    </div>
                    <div className="flex flex-row items-start justify-between mb-3.5 w-[99%]">
                      <div className="flex flex-col gap-[19px] items-start justify-start w-[11%]">
                        <div className="flex flex-row gap-2 items-start justify-start">
                          <div className="bg-indigo-400 h-1.5 mb-0.5 mt-[5px] rounded-[50%] w-1.5" />
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            Income
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-start">
                          <div className="bg-amber-300 h-1.5 my-[5px] rounded-[50%] w-1.5" />
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            Expenses
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[84%]">
                        <div className="flex flex-col gap-[15px] items-end justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col items-end justify-start pb-px pl-px">
                              <Text className="!text-bluegray-400 font-normal text-xs">
                                1,400
                              </Text>
                              <Text className="!text-bluegray-400 font-normal mt-4 text-xs">
                                1,200
                              </Text>
                              <Text className="!text-bluegray-400 font-normal mt-4 text-xs">
                                1,000
                              </Text>
                              <Text className="!text-bluegray-400 font-normal mt-4 text-xs">
                                800
                              </Text>
                              <Text className="!text-bluegray-400 font-normal mt-[18px] text-xs">
                                600
                              </Text>
                              <Text className="!text-bluegray-400 font-normal mt-[18px] text-xs">
                                400
                              </Text>
                              <Text className="!text-bluegray-400 font-normal mt-[18px] text-xs">
                                200
                              </Text>
                              <Text className="!text-bluegray-400 font-normal mb-px mt-[18px] text-xs">
                                0
                              </Text>
                            </div>
                            <div className="bg-[url(/images/img_group2426.svg)] bg-cover bg-no-repeat h-[227px] pt-[17px] px-[17px] relative w-[91%]">
                              <Img
                                src="images/img_frame_206X450.svg"
                                alt="Frame"
                                className="absolute bottom-[0%] h-[206px] left-0 m-auto right-0"
                              />
                              <div className="absolute bg-[url(/images/img_group_white_A700.svg)] bg-cover bg-no-repeat flex-col h-[84px] left-[3%] m-auto p-[13px] shadow-md top-[19%] w-[30%]">
                                <div className="absolute flex flex-row gap-2 items-start justify-center mt-[5px] w-[32%]">
                                  <div className="bg-indigo-400 h-1.5 mb-[5px] mt-0.5 rounded-[50%] w-1.5" />
                                  <Text className="!font-poppins !text-bluegray-900 font-semibold text-xs">
                                    200.0
                                  </Text>
                                </div>
                                <div className="absolute flex flex-col items-center justify-start mt-1.5 w-3/4">
                                  <div className="flex flex-col gap-[17px] justify-start w-full">
                                    <div className="flex flex-row gap-2 items-start justify-end ml-[66px] w-[43%]">
                                      <div className="bg-amber-300 h-1.5 mb-1 mt-px rounded-[50%] w-1.5" />
                                      <Text className="!font-poppins !text-bluegray-900 font-semibold text-xs">
                                        2,000
                                      </Text>
                                    </div>
                                    <Text className="!font-poppins !text-bluegray-400 font-medium mr-[19px] text-[10px]">
                                      21 September, 2021
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row justify-end pb-0.5 px-0.5 w-[91%]">
                            <Text className="!text-bluegray-400 font-normal text-xs">
                              Mon
                            </Text>
                            <Text className="!text-bluegray-400 font-normal ml-[46px] text-xs">
                              Tue
                            </Text>
                            <Text className="!text-bluegray-400 font-normal ml-[52px] text-xs">
                              Wed
                            </Text>
                            <Text className="!text-bluegray-400 font-normal mb-px ml-[46px] text-xs">
                              Thu
                            </Text>
                            <Text className="!text-bluegray-400 font-normal mb-px ml-[55px] text-xs">
                              Fri
                            </Text>
                            <Text className="!text-bluegray-400 font-normal mb-px ml-[55px] text-xs">
                              Sat
                            </Text>
                            <Text className="!text-bluegray-400 font-normal mb-px ml-[51px] mr-[33px] text-xs">
                              Sun
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[410px] relative w-[33%]">
                  <div className="absolute flex-col h-[116px] left-0 m-auto right-0 top-[23%] w-full">
                    <Img
                      src="images/img_ellipse.svg"
                      alt="Ellipse One"
                      className="absolute h-[46px] ml-auto"
                    />
                    <Img
                      src="images/img_vector_white_A700.svg"
                      alt="Vector One"
                      className="absolute h-[100px] m-auto"
                    />
                  </div>
                  <div className="absolute bg-deep_orange-300 flex flex-col items-center justify-end left-0 m-auto p-[11px] right-0 rounded-tl rounded-tr shadow-sm top-[0%] w-full">
                    <div className="h-[188px] mt-px relative w-3/4">
                      <div className="h-[188px] m-auto w-full">
                        <div className="h-[188px] m-auto w-full">
                          <div className="absolute bottom-[0%] h-[163px] left-0 m-auto right-0 w-full">
                            <div className="absolute h-[61px] left-[0%] m-auto top-[18%] w-[61px]">
                              <Img
                                src="images/img_sphere.png"
                                alt="sphere"
                                className="h-[61px] m-auto object-cover w-[61px]"
                              />
                              <div className="absolute bg-[url(/images/img_group2344.png)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                                <div className="h-[61px] relative w-[61px]">
                                  <Img
                                    src="images/img_image2.png"
                                    alt="imageTwo"
                                    className="h-[61px] m-auto object-cover w-[61px]"
                                  />
                                  <div className="absolute bottom-0 h-[61px] justify-center left-0 m-auto right-0 top-0 w-[61px]">
                                    <Img
                                      src="images/img_image2.png"
                                      alt="imageThree"
                                      className="h-[61px] m-auto object-cover w-[61px]"
                                    />
                                    <Img
                                      src="images/img_image2.png"
                                      alt="imageFour"
                                      className="absolute bottom-0 h-[61px] justify-center left-0 m-auto object-cover right-0 top-0 w-[61px]"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute bottom-0 h-[163px] m-auto right-[0%] top-0 w-[83%]">
                              <div className="h-[163px] m-auto w-full">
                                <div className="absolute bottom-[0%] flex flex-col items-center justify-start left-0 m-auto right-0 w-[97%]">
                                  <div className="h-28 relative w-full">
                                    <Img
                                      src="images/img_2.png"
                                      alt="Two Three"
                                      className="h-28 m-auto object-cover w-full"
                                    />
                                    <div className="absolute bottom-0 h-28 justify-center left-0 m-auto right-0 top-0 w-full">
                                      <div className="h-28 m-auto w-full">
                                        <Img
                                          src="images/img_2.png"
                                          alt="One"
                                          className="h-28 m-auto object-cover w-full"
                                        />
                                        <div className="absolute bottom-[3%] h-6 m-auto right-[6%] w-[30%]">
                                          <Img
                                            src="images/img_shadow.png"
                                            alt="shadow"
                                            className="h-[11px] m-auto object-cover w-full z-[1]"
                                          />
                                          <div className="h-[19px] mb-[-9.76px] ml-[11px] mt-auto w-[41%] z-[1]">
                                            <Img
                                              src="images/img_1.png"
                                              alt="One One"
                                              className="h-[19px] m-auto object-cover w-full"
                                            />
                                            <Img
                                              src="images/img_color.png"
                                              alt="color"
                                              className="absolute bottom-0 h-[19px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                            />
                                          </div>
                                          <div className="h-[23px] ml-auto mr-1 w-[76%] z-[1]">
                                            <Img
                                              src="images/img_2_23X47.png"
                                              alt="Two Four"
                                              className="h-[23px] m-auto object-cover w-full"
                                            />
                                            <div className="absolute bg-[url(/images/img_group2347.png)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                                              <div className="h-[23px] relative w-full">
                                                <Img
                                                  src="images/img_specular.png"
                                                  alt="specular"
                                                  className="h-[23px] m-auto object-cover w-full"
                                                />
                                                <div className="absolute bottom-0 h-[23px] justify-center left-0 m-auto right-0 top-0 w-full">
                                                  <Img
                                                    src="images/img_specular.png"
                                                    alt="specular One"
                                                    className="h-[23px] m-auto object-cover w-full"
                                                  />
                                                  <Img
                                                    src="images/img_specular.png"
                                                    alt="specular Two"
                                                    className="absolute bottom-0 h-[23px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute h-[88px] left-[30%] m-auto top-[0%] w-[18%]">
                                        <Img
                                          src="images/img_stand.png"
                                          alt="stand"
                                          className="h-[88px] m-auto object-cover w-full"
                                        />
                                        <div className="absolute bg-[url(/images/img_group2349.png)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                                          <div className="h-[88px] relative w-full">
                                            <Img
                                              src="images/img_specular_88X36.png"
                                              alt="specular Three"
                                              className="h-[88px] m-auto object-cover w-full"
                                            />
                                            <div className="absolute bottom-0 h-[88px] justify-center left-0 m-auto right-0 top-0 w-full">
                                              <Img
                                                src="images/img_specular_88X36.png"
                                                alt="specular Four"
                                                className="h-[88px] m-auto object-cover w-full"
                                              />
                                              <Img
                                                src="images/img_specular_88X36.png"
                                                alt="specular Five"
                                                className="absolute bottom-0 h-[88px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[2%] h-[11px] left-[12%] m-auto w-[52%]">
                                        <Img
                                          src="images/img_shadow_11X108.png"
                                          alt="shadow One"
                                          className="absolute bottom-0 h-[11px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                        />
                                        <div className="absolute h-2.5 left-0 m-auto right-0 top-[0%] w-[89%]">
                                          <Img
                                            src="images/img_keyboard.png"
                                            alt="Keyboard"
                                            className="h-2.5 m-auto object-cover w-full"
                                          />
                                          <div className="absolute bg-[url(/images/img_group2353.svg)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                                            <div className="h-2.5 relative w-full">
                                              <Img
                                                src="images/img_specular_10X96.png"
                                                alt="specular Six"
                                                className="h-2.5 m-auto object-cover w-full"
                                              />
                                              <Img
                                                src="images/img_specular_10X96.png"
                                                alt="specular Seven"
                                                className="absolute bottom-0 h-2.5 justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute h-[115px] left-[0%] m-auto top-[0%] w-[81%]">
                                  <Img
                                    src="images/img_screen.png"
                                    alt="Screen"
                                    className="h-[115px] m-auto object-cover w-full"
                                  />
                                  <div className="absolute bg-[url(/images/img_group2355.png)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                                    <div className="h-[115px] relative w-full">
                                      <Img
                                        src="images/img_specular_115X174.png"
                                        alt="specular Eight"
                                        className="h-[115px] m-auto object-cover w-full"
                                      />
                                      <div className="absolute bottom-0 h-[115px] justify-center left-0 m-auto right-0 top-0 w-full">
                                        <Img
                                          src="images/img_specular_115X174.png"
                                          alt="specular Nine"
                                          className="h-[115px] m-auto object-cover w-full"
                                        />
                                        <Img
                                          src="images/img_specular_115X174.png"
                                          alt="specular Ten"
                                          className="absolute bottom-0 h-[115px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Img
                                src="images/img_sceneshadow.png"
                                alt="SceneShadow"
                                className="absolute h-[114px] left-[1%] m-auto object-cover top-[3%] w-[81%]"
                              />
                            </div>
                          </div>
                          <div className="absolute h-[134px] left-0 m-auto pl-[29px] pt-[29px] right-0 top-[0%] w-[87%]">
                            <div className="h-[105px] m-auto w-[74%]">
                              <div className="flex flex-col h-full items-center justify-start m-auto w-[99%]">
                                <div className="h-[105px] relative w-full">
                                  <Img
                                    src="images/img_base.png"
                                    alt="base"
                                    className="h-[105px] m-auto object-cover w-full"
                                  />
                                  <div className="absolute bg-[url(/images/img_group2358.png)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                                    <div className="h-[105px] relative w-full">
                                      <div className="h-[105px] m-auto w-full">
                                        <div className="h-[105px] m-auto w-full">
                                          <Img
                                            src="images/img_specular_105X163.png"
                                            alt="specular Eleven"
                                            className="h-[105px] m-auto object-cover w-full"
                                          />
                                          <div className="absolute h-[25px] left-0 m-auto right-0 top-[0%] w-full">
                                            <div className="h-[25px] m-auto w-full">
                                              <Img
                                                src="images/img_shadow_16X163.png"
                                                alt="shadow Two"
                                                className="h-4 m-auto object-cover w-full"
                                              />
                                              <div className="h-2.5 m-auto w-full z-[1]">
                                                <Img
                                                  src="images/img_statusbar.png"
                                                  alt="statusbar"
                                                  className="h-2.5 m-auto object-cover w-full"
                                                />
                                                <div className="absolute bg-[url(/images/img_group2361.png)] bg-cover bg-no-repeat bottom-0 h-2.5 justify-center left-0 m-auto right-0 top-0 w-full">
                                                  <Img
                                                    src="images/img_specular_10X163.png"
                                                    alt="specular Twelve"
                                                    className="absolute h-2.5 m-auto object-cover w-full"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="absolute h-[13px] left-[4%] m-auto top-[13%] w-[18%]">
                                              <div className="absolute bottom-0 h-[13px] left-[0%] m-auto top-0 w-[83%]">
                                                <div className="absolute bottom-0 h-[13px] left-[0%] m-auto top-0 w-[74%]">
                                                  <Img
                                                    src="images/img_shadow_13X17.png"
                                                    alt="shadow Three"
                                                    className="absolute bottom-0 h-[13px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                  />
                                                  <div className="absolute h-1 left-[5%] m-auto top-[0%] w-1">
                                                    <Img
                                                      src="images/img_dot.png"
                                                      alt="dot"
                                                      className="h-1 m-auto object-cover w-1"
                                                    />
                                                    <div className="absolute bg-[url(/images/img_group2363.png)] bg-cover bg-no-repeat flex flex-col h-[3px] items-center justify-start left-[3%] m-auto p-px top-[2%] w-[3px]">
                                                      <div className="h-[3px] relative w-[3px]">
                                                        <Img
                                                          src="images/img_specular_3X3.png"
                                                          alt="specular Thirteen"
                                                          className="h-[3px] m-auto object-cover w-[3px]"
                                                        />
                                                        <div className="absolute bottom-0 h-[3px] justify-center left-0 m-auto right-0 top-0 w-[3px]">
                                                          <Img
                                                            src="images/img_specular_3X3.png"
                                                            alt="specular Fourteen"
                                                            className="h-[3px] m-auto object-cover w-[3px]"
                                                          />
                                                          <Img
                                                            src="images/img_specular_3X3.png"
                                                            alt="specular Fifteen"
                                                            className="absolute bottom-0 h-[3px] justify-center left-0 m-auto object-cover right-0 top-0 w-[3px]"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="absolute bottom-0 h-[13px] m-auto right-[3%] top-0 w-[74%]">
                                                  <Img
                                                    src="images/img_shadow_13X17.png"
                                                    alt="shadow Four"
                                                    className="absolute bottom-0 h-[13px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                  />
                                                  <div className="absolute h-1 left-[5%] m-auto top-[0%] w-1">
                                                    <Img
                                                      src="images/img_dot.png"
                                                      alt="dot One"
                                                      className="h-1 m-auto object-cover w-1"
                                                    />
                                                    <div className="absolute bg-[url(/images/img_group2367.png)] bg-cover bg-no-repeat flex flex-col h-[3px] items-center justify-start left-[2%] m-auto p-px top-[2%] w-[3px]">
                                                      <div className="h-[3px] relative w-[3px]">
                                                        <Img
                                                          src="images/img_specular_3X3.png"
                                                          alt="specular Sixteen"
                                                          className="h-[3px] m-auto object-cover w-[3px]"
                                                        />
                                                        <div className="absolute bottom-0 h-[3px] justify-center left-0 m-auto right-0 top-0 w-[3px]">
                                                          <Img
                                                            src="images/img_specular_3X3.png"
                                                            alt="specular Seventeen"
                                                            className="h-[3px] m-auto object-cover w-[3px]"
                                                          />
                                                          <Img
                                                            src="images/img_specular_3X3.png"
                                                            alt="specular Eighteen"
                                                            className="absolute bottom-0 h-[3px] justify-center left-0 m-auto object-cover right-0 top-0 w-[3px]"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="absolute bottom-0 h-[13px] m-auto right-[0%] top-0 w-[61%]">
                                                <Img
                                                  src="images/img_shadow_13X17.png"
                                                  alt="shadow Five"
                                                  className="absolute bottom-0 h-[13px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                />
                                                <div className="absolute h-1 left-[5%] m-auto top-[0%] w-1">
                                                  <Img
                                                    src="images/img_dot.png"
                                                    alt="dot Two"
                                                    className="h-1 m-auto object-cover w-1"
                                                  />
                                                  <div className="absolute bg-[url(/images/img_group2371.png)] bg-cover bg-no-repeat flex flex-col h-[3px] items-center justify-start left-[2%] m-auto p-px top-[2%] w-[3px]">
                                                    <div className="h-[3px] relative w-[3px]">
                                                      <Img
                                                        src="images/img_specular_3X3.png"
                                                        alt="specular Nineteen"
                                                        className="h-[3px] m-auto object-cover w-[3px]"
                                                      />
                                                      <div className="absolute bottom-0 h-[3px] justify-center left-0 m-auto right-0 top-0 w-[3px]">
                                                        <Img
                                                          src="images/img_specular_3X3.png"
                                                          alt="specular Twenty"
                                                          className="h-[3px] m-auto object-cover w-[3px]"
                                                        />
                                                        <Img
                                                          src="images/img_specular_3X3.png"
                                                          alt="specular TwentyOne"
                                                          className="absolute bottom-0 h-[3px] justify-center left-0 m-auto object-cover right-0 top-0 w-[3px]"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute flex flex-col items-center justify-start left-0 m-auto right-0 top-[14%] w-[95%]">
                                          <div className="h-[18px] relative w-full">
                                            <div className="h-[18px] m-auto w-full">
                                              <Img
                                                src="images/img_shadow_18X154.png"
                                                alt="shadow Six"
                                                className="absolute bottom-0 h-[18px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                              />
                                              <div className="absolute h-2.5 left-0 m-auto right-0 top-[0%] w-[98%]">
                                                <Img
                                                  src="images/img_search_10X150.png"
                                                  alt="search"
                                                  className="h-2.5 m-auto object-cover w-full"
                                                />
                                                <div className="absolute bg-[url(/images/img_group2375.png)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                                                  <div className="h-2.5 relative w-full">
                                                    <Img
                                                      src="images/img_specular_10X150.png"
                                                      alt="specular TwentyTwo"
                                                      className="h-2.5 m-auto object-cover w-full"
                                                    />
                                                    <div className="absolute bottom-0 h-1.5 left-[3%] m-auto top-0 w-1.5">
                                                      <Img
                                                        src="images/img_shadow_6X6.png"
                                                        alt="shadow Seven"
                                                        className="h-1.5 m-auto object-cover w-1.5"
                                                      />
                                                      <div className="absolute h-1.5 left-[0%] m-auto top-[0%] w-[5px]">
                                                        <Img
                                                          src="images/img_loupe.png"
                                                          alt="loupe"
                                                          className="h-1.5 m-auto object-cover w-[5px]"
                                                        />
                                                        <div className="absolute bg-[url(/images/img_group2378.png)] bg-cover bg-no-repeat bottom-0 h-1.5 justify-center left-0 m-auto right-0 top-0 w-[5px]">
                                                          <Img
                                                            src="images/img_specular_6X5.png"
                                                            alt="specular TwentyThree"
                                                            className="absolute h-1.5 m-auto object-cover w-[5px]"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="absolute bottom-[17%] h-[11px] left-[7%] m-auto w-[19%]">
                                              <Img
                                                src="images/img_shadow_11X29.png"
                                                alt="shadow Eight"
                                                className="absolute bottom-0 h-[11px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                              />
                                              <div className="absolute h-0.5 left-[5%] m-auto top-[0%] w-[63%]">
                                                <Img
                                                  src="images/img_textxs.png"
                                                  alt="textXS"
                                                  className="h-0.5 m-auto object-cover w-full"
                                                />
                                                <div className="absolute bg-[url(/images/img_group2380.png)] bg-cover bg-no-repeat h-0.5 left-0 m-auto right-0 top-[7%] w-full">
                                                  <Img
                                                    src="images/img_specular_2X17.png"
                                                    alt="specular TwentyFour"
                                                    className="absolute h-0.5 m-auto object-cover w-full"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="absolute bottom-[0%] h-[79px] left-0 m-auto right-0 w-[96%]">
                                        <div className="absolute flex flex-col items-center justify-start m-auto right-[0%] top-[0%] w-[35%]">
                                          <div className="h-[30px] relative w-full">
                                            <Img
                                              src="images/img_shadow_27X49.png"
                                              alt="shadow Nine"
                                              className="h-[27px] m-auto object-cover w-[91%]"
                                            />
                                            <div className="absolute bottom-0 h-[30px] justify-center left-0 m-auto right-0 top-0 w-full">
                                              <Img
                                                src="images/img_bg.png"
                                                alt="bg"
                                                className="h-[30px] m-auto object-cover w-full"
                                              />
                                              <div className="absolute bg-[url(/images/img_group2392.svg)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-end justify-center left-0 m-auto p-px right-0 top-0 w-full">
                                                <div className="flex flex-row items-start justify-evenly mb-px mt-[5px] w-[92%]">
                                                  <div className="h-3.5 relative w-3.5">
                                                    <Img
                                                      src="images/img_shadow_14X14.png"
                                                      alt="shadow Ten"
                                                      className="h-3.5 m-auto object-cover w-3.5"
                                                    />
                                                    <div className="absolute bg-[url(/images/img_group2393.svg)] bg-cover bg-no-repeat flex flex-col h-[13px] items-center justify-start left-[2%] m-auto top-[2%] w-[13px]">
                                                      <div className="h-[13px] relative w-[13px]">
                                                        <Img
                                                          src="images/img_specular_13X13.png"
                                                          alt="specular TwentyFive"
                                                          className="h-[13px] m-auto object-cover w-[13px]"
                                                        />
                                                        <Img
                                                          src="images/img_specular_13X13.png"
                                                          alt="specular TwentySix"
                                                          className="absolute bottom-0 h-[13px] justify-center left-0 m-auto object-cover right-0 top-0 w-[13px]"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="h-[15px] mt-[3px] relative w-[64%]">
                                                    <div className="h-2.5 m-auto w-full">
                                                      <Img
                                                        src="images/img_shadow_11X29.png"
                                                        alt="shadow Eleven"
                                                        className="absolute bottom-0 h-[9px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                      />
                                                      <div className="absolute h-0.5 left-[5%] m-auto top-[0%] w-[62%]">
                                                        <Img
                                                          src="images/img_textxs_2X16.png"
                                                          alt="textXS One"
                                                          className="h-0.5 m-auto object-cover w-full"
                                                        />
                                                        <div className="absolute bg-[url(/images/img_group2396.png)] bg-cover bg-no-repeat flex flex-col h-0.5 items-center justify-start left-0 m-auto right-0 top-[7%] w-full">
                                                          <div className="h-0.5 relative w-full">
                                                            <Img
                                                              src="images/img_specular_2X15.png"
                                                              alt="specular TwentySeven"
                                                              className="h-0.5 m-auto object-cover w-full"
                                                            />
                                                            <div className="absolute bottom-0 h-0.5 justify-center left-0 m-auto right-0 top-0 w-full">
                                                              <Img
                                                                src="images/img_specular_2X15.png"
                                                                alt="specular TwentyEight"
                                                                className="h-0.5 m-auto object-cover w-full"
                                                              />
                                                              <Img
                                                                src="images/img_specular_2X15.png"
                                                                alt="specular TwentyNine"
                                                                className="absolute bottom-0 h-0.5 justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="h-2.5 m-auto w-full z-[1]">
                                                      <Img
                                                        src="images/img_shadow_11X29.png"
                                                        alt="shadow Twelve"
                                                        className="absolute bottom-0 h-[9px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                      />
                                                      <div className="absolute h-0.5 left-[5%] m-auto top-[0%] w-[62%]">
                                                        <Img
                                                          src="images/img_textxs_2X16.png"
                                                          alt="textXS Two"
                                                          className="h-0.5 m-auto object-cover w-full"
                                                        />
                                                        <div className="absolute bg-[url(/images/img_group2400.png)] bg-cover bg-no-repeat flex flex-col h-0.5 items-center justify-start left-0 m-auto right-0 top-[7%] w-full">
                                                          <div className="h-0.5 relative w-full">
                                                            <Img
                                                              src="images/img_specular_2X17.png"
                                                              alt="specular Thirty"
                                                              className="h-0.5 m-auto object-cover w-full"
                                                            />
                                                            <div className="absolute bottom-0 h-0.5 justify-center left-0 m-auto right-0 top-0 w-full">
                                                              <Img
                                                                src="images/img_specular_2X17.png"
                                                                alt="specular ThirtyOne"
                                                                className="h-0.5 m-auto object-cover w-full"
                                                              />
                                                              <Img
                                                                src="images/img_specular_2X17.png"
                                                                alt="specular ThirtyTwo"
                                                                className="absolute bottom-0 h-0.5 justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="h-11 relative w-[91%]">
                                            <div className="flex flex-col items-center justify-start m-auto w-full">
                                              <div className="flex flex-col items-center justify-start w-full">
                                                <Img
                                                  src="images/img_3.svg"
                                                  alt="Three"
                                                  className="h-[11px]"
                                                />
                                                <div className="h-[15px] mt-0.5 relative w-full">
                                                  <div className="absolute h-[13px] left-0 m-auto right-0 top-[0%] w-full">
                                                    <Img
                                                      src="images/img_shadow_13X49.png"
                                                      alt="shadow Thirteen"
                                                      className="h-[13px] m-auto object-cover w-full"
                                                    />
                                                    <div className="absolute h-[11px] left-0 m-auto right-0 top-[4%] w-[96%]">
                                                      <Img
                                                        src="images/img_bg_11X47.png"
                                                        alt="bg One"
                                                        className="h-[11px] m-auto object-cover w-full"
                                                      />
                                                      <div className="absolute bg-[url(/images/img_group2382.svg)] bg-cover bg-no-repeat bottom-0 h-[11px] justify-center left-0 m-auto p-[3px] right-0 top-0 w-full">
                                                        <Img
                                                          src="images/img_eye.svg"
                                                          alt="Eye"
                                                          className="absolute h-[3px] ml-auto mr-px mt-auto"
                                                        />
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="absolute bottom-[0%] h-2.5 left-[10%] m-auto w-[54%]">
                                                    <Img
                                                      src="images/img_shadow_11X29.png"
                                                      alt="shadow Fourteen"
                                                      className="absolute bottom-0 h-[9px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                    />
                                                    <div className="absolute h-0.5 left-[5%] m-auto top-[0%] w-[62%]">
                                                      <Img
                                                        src="images/img_textxs_1.png"
                                                        alt="textXS Three"
                                                        className="h-0.5 m-auto object-cover w-full"
                                                      />
                                                      <div className="absolute bg-[url(/images/img_group2384.png)] bg-cover bg-no-repeat flex flex-col h-0.5 items-center justify-start left-0 m-auto right-0 top-[7%] w-full">
                                                        <div className="h-0.5 relative w-full">
                                                          <Img
                                                            src="images/img_specular_2X15.png"
                                                            alt="specular ThirtyThree"
                                                            className="h-0.5 m-auto object-cover w-full"
                                                          />
                                                          <div className="absolute bottom-0 h-0.5 justify-center left-0 m-auto right-0 top-0 w-full">
                                                            <Img
                                                              src="images/img_specular_2X15.png"
                                                              alt="specular ThirtyFour"
                                                              className="h-0.5 m-auto object-cover w-full"
                                                            />
                                                            <Img
                                                              src="images/img_specular_2X15.png"
                                                              alt="specular ThirtyFive"
                                                              className="absolute bottom-0 h-0.5 justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="h-[15px] m-auto w-full z-[1]">
                                              <div className="absolute h-[13px] left-0 m-auto right-0 top-[0%] w-full">
                                                <Img
                                                  src="images/img_shadow_1.png"
                                                  alt="shadow Fifteen"
                                                  className="h-[13px] m-auto object-cover w-full"
                                                />
                                                <div className="absolute h-[11px] left-0 m-auto right-0 top-[4%] w-[96%]">
                                                  <Img
                                                    src="images/img_bg_1.png"
                                                    alt="bg Two"
                                                    className="h-[11px] m-auto object-cover w-full"
                                                  />
                                                  <Img
                                                    src="images/img_eye_bluegray_900.svg"
                                                    alt="Eye One"
                                                    className="absolute bottom-0 h-[3px] m-auto right-[11%] top-0"
                                                  />
                                                </div>
                                              </div>
                                              <div className="absolute bottom-[0%] h-2.5 left-[8%] m-auto w-[54%]">
                                                <Img
                                                  src="images/img_shadow_11X29.png"
                                                  alt="shadow Sixteen"
                                                  className="absolute bottom-0 h-[9px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                />
                                                <div className="absolute h-0.5 left-[5%] m-auto top-[0%] w-[62%]">
                                                  <Img
                                                    src="images/img_textxs_1.png"
                                                    alt="textXS Four"
                                                    className="h-0.5 m-auto object-cover w-full"
                                                  />
                                                  <div className="absolute bg-[url(/images/img_group2390.png)] bg-cover bg-no-repeat h-0.5 left-0 m-auto right-0 top-[7%] w-full">
                                                    <Img
                                                      src="images/img_specular_2X15.png"
                                                      alt="specular ThirtySix"
                                                      className="absolute h-0.5 m-auto object-cover w-full"
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="absolute bottom-[-22%] flex flex-col items-center justify-end left-[0%] m-auto w-[77%]">
                                          <div className="h-[94px] relative w-full">
                                            <Img
                                              src="images/img_shadow_94X119.png"
                                              alt="shadow Seventeen"
                                              className="absolute bottom-0 h-[94px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                            />
                                            <div className="absolute h-[69px] left-[1%] m-auto top-[0%] w-[83%]">
                                              <Img
                                                src="images/img_2xblock.png"
                                                alt="2xblock"
                                                className="h-[69px] m-auto object-cover w-full"
                                              />
                                              <div className="absolute bg-[url(/images/img_group2404.png)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                                                <div className="h-[69px] relative w-full">
                                                  <Img
                                                    src="images/img_specular_69X98.png"
                                                    alt="specular ThirtySeven"
                                                    className="absolute h-[69px] m-auto object-cover w-full"
                                                  />
                                                  <div className="absolute h-9 m-auto w-[72%]">
                                                    <div className="h-9 m-auto w-[86%]">
                                                      <div className="h-9 m-auto w-[84%]">
                                                        <div className="h-9 m-auto w-4/5">
                                                          <div className="h-9 m-auto w-[78%]">
                                                            <div className="absolute bottom-[-1%] h-7 left-[0%] m-auto w-[68%]">
                                                              <div className="absolute bottom-[2%] h-[19px] left-[0%] m-auto w-[53%]">
                                                                <Img
                                                                  src="images/img_shadow_19X11.png"
                                                                  alt="shadow Eighteen"
                                                                  className="h-[19px] m-auto object-cover w-full"
                                                                />
                                                                <div className="absolute h-[13px] left-[9%] m-auto top-[1%] w-[46%]">
                                                                  <Img
                                                                    src="images/img_1_13X5.png"
                                                                    alt="One Two"
                                                                    className="h-[13px] m-auto object-cover w-full"
                                                                  />
                                                                  <div className="absolute bg-[url(/images/img_group2407.png)] bg-cover bg-no-repeat bottom-0 h-[13px] justify-center left-0 m-auto right-0 top-0 w-full">
                                                                    <Img
                                                                      src="images/img_specular_13X5.png"
                                                                      alt="specular ThirtyEight"
                                                                      className="absolute h-[13px] m-auto object-cover w-full"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div className="absolute bottom-0 h-7 m-auto right-[1%] top-0 w-[53%]">
                                                                <Img
                                                                  src="images/img_shadow_28X11.png"
                                                                  alt="shadow Nineteen"
                                                                  className="h-7 m-auto object-cover w-full"
                                                                />
                                                                <div className="absolute h-[21px] left-[8%] m-auto top-[1%] w-[46%]">
                                                                  <Img
                                                                    src="images/img_2_21X5.png"
                                                                    alt="Two Five"
                                                                    className="h-[21px] m-auto object-cover w-full"
                                                                  />
                                                                  <div className="absolute bottom-0 h-[21px] justify-center left-0 m-auto right-0 top-0 w-full">
                                                                    <div className="h-[21px] m-auto w-[5px]" />
                                                                    <Img
                                                                      src="images/img_specular_21X5.png"
                                                                      alt="specular ThirtyNine"
                                                                      className="absolute bottom-0 h-[21px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                                    />
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="absolute bottom-0 h-9 m-auto right-[2%] top-0 w-[36%]">
                                                              <Img
                                                                src="images/img_shadow_36X11.png"
                                                                alt="shadow Twenty"
                                                                className="h-9 m-auto object-cover w-full"
                                                              />
                                                              <div className="absolute h-[30px] left-[9%] m-auto top-[1%] w-[46%]">
                                                                <Img
                                                                  src="images/img_3_30X5.png"
                                                                  alt="Three One"
                                                                  className="h-[30px] m-auto object-cover w-full"
                                                                />
                                                                <div className="absolute bottom-0 h-[30px] justify-center left-0 m-auto right-0 top-0 w-full">
                                                                  <div className="h-[30px] m-auto w-[5px]" />
                                                                  <Img
                                                                    src="images/img_specular_30X5.png"
                                                                    alt="specular Forty"
                                                                    className="absolute bottom-0 h-[30px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                                  />
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <div className="h-[19px] mb-px ml-auto mt-auto w-[28%] z-[1]">
                                                            <Img
                                                              src="images/img_shadow_2.png"
                                                              alt="shadow TwentyOne"
                                                              className="h-[19px] m-auto object-cover w-full"
                                                            />
                                                            <div className="absolute h-[13px] left-[8%] m-auto top-[1%] w-[46%]">
                                                              <Img
                                                                src="images/img_1_13X5.png"
                                                                alt="Four"
                                                                className="h-[13px] m-auto object-cover w-full"
                                                              />
                                                              <div className="absolute bg-[url(/images/img_group2413.png)] bg-cover bg-no-repeat bottom-0 h-[13px] justify-center left-0 m-auto right-0 top-0 w-full">
                                                                <Img
                                                                  src="images/img_specular_13X5.png"
                                                                  alt="specular FortyOne"
                                                                  className="absolute h-[13px] m-auto object-cover w-full"
                                                                />
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="h-7 ml-auto mt-auto w-[22%] z-[1]">
                                                          <Img
                                                            src="images/img_shadow_3.png"
                                                            alt="shadow TwentyTwo"
                                                            className="h-7 m-auto object-cover w-full"
                                                          />
                                                          <div className="absolute h-[21px] left-[9%] m-auto top-[1%] w-[46%]">
                                                            <Img
                                                              src="images/img_2_21X5.png"
                                                              alt="Five"
                                                              className="h-[21px] m-auto object-cover w-full"
                                                            />
                                                            <div className="absolute bottom-0 h-[21px] justify-center left-0 m-auto right-0 top-0 w-full">
                                                              <div className="h-[21px] m-auto w-[5px]" />
                                                              <Img
                                                                src="images/img_specular_21X5.png"
                                                                alt="specular FortyTwo"
                                                                className="absolute bottom-0 h-[21px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                              />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                      <div className="h-7 ml-auto mt-auto w-[19%] z-[1]">
                                                        <Img
                                                          src="images/img_shadow_4.png"
                                                          alt="shadow TwentyThree"
                                                          className="h-7 m-auto object-cover w-full"
                                                        />
                                                        <div className="absolute h-[21px] left-[8%] m-auto top-[1%] w-[46%]">
                                                          <Img
                                                            src="images/img_2_21X5.png"
                                                            alt="Six"
                                                            className="h-[21px] m-auto object-cover w-full"
                                                          />
                                                          <div className="absolute bottom-0 h-[21px] justify-center left-0 m-auto right-0 top-0 w-full">
                                                            <div className="h-[21px] m-auto w-[5px]" />
                                                            <Img
                                                              src="images/img_specular_21X5.png"
                                                              alt="specular FortyThree"
                                                              className="absolute bottom-0 h-[21px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                            />
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="h-9 m-auto w-[16%] z-[1]">
                                                      <Img
                                                        src="images/img_shadow_5.png"
                                                        alt="shadow TwentyFour"
                                                        className="h-9 m-auto object-cover w-full"
                                                      />
                                                      <div className="absolute h-[30px] left-[8%] m-auto top-[1%] w-[46%]">
                                                        <Img
                                                          src="images/img_3_30X5.png"
                                                          alt="Seven"
                                                          className="h-[30px] m-auto object-cover w-full"
                                                        />
                                                        <div className="absolute bottom-0 h-[30px] justify-center left-0 m-auto right-0 top-0 w-full">
                                                          <div className="h-[30px] m-auto w-[5px]" />
                                                          <Img
                                                            src="images/img_specular_30X5.png"
                                                            alt="specular FortyFour"
                                                            className="absolute bottom-0 h-[30px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                                          />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <Img
                                                    src="images/img_group2382.svg"
                                                    alt="fill"
                                                    className="absolute h-[65px] m-auto"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute bottom-0 h-[105px] justify-center left-0 m-auto right-0 top-0 w-full">
                                <Img
                                  src="images/img_dropshadowshere.png"
                                  alt="Dropshadowshere"
                                  className="absolute bottom-0 h-[105px] justify-center left-0 m-auto object-cover right-0 top-0 w-[99%]"
                                />
                                <div className="absolute bottom-[22%] h-3.5 m-auto right-[0%] w-[29%]">
                                  <div className="absolute h-[11px] left-0 m-auto right-0 top-[0%] w-full">
                                    <Img
                                      src="images/img_bg_2.png"
                                      alt="bg Three"
                                      className="h-[11px] m-auto object-cover w-full"
                                    />
                                    <Img
                                      src="images/img_group_gray_101.svg"
                                      alt="Group Four"
                                      className="absolute bottom-0 h-[3px] m-auto right-[11%] top-0"
                                    />
                                  </div>
                                  <div className="absolute bottom-[-5%] h-2.5 left-[7%] m-auto w-[56%]">
                                    <Img
                                      src="images/img_shadow_11X29.png"
                                      alt="shadow TwentyFive"
                                      className="absolute bottom-0 h-[9px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                                    />
                                    <div className="absolute h-0.5 left-[5%] m-auto top-[0%] w-[58%]">
                                      <Img
                                        src="images/img_textxs_2X15.png"
                                        alt="textXS Five"
                                        className="h-0.5 m-auto object-cover w-full"
                                      />
                                      <div className="absolute bg-[url(/images/img_group2422.png)] bg-cover bg-no-repeat bottom-0 h-0.5 justify-center left-0 m-auto right-0 top-0 w-full">
                                        <Img
                                          src="images/img_specular_2X15.png"
                                          alt="specular FortyFive"
                                          className="absolute h-0.5 m-auto object-cover w-full"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="h-[47px] mb-4 ml-auto mt-auto rotate-[180deg] w-1/5 z-[1]">
                              <Img
                                src="images/img_cursor.png"
                                alt="cursor"
                                className="h-[47px] m-auto object-cover w-full"
                              />
                              <div className="absolute bg-[url(/images/img_group2423.png)] bg-cover bg-no-repeat bottom-0 h-[47px] justify-center left-0 m-auto right-0 top-0 w-full">
                                <Img
                                  src="images/img_specular_47X45.png"
                                  alt="specular FortySix"
                                  className="absolute h-[47px] m-auto object-cover w-full"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_sphereshadow.png"
                          alt="Sphereshadow"
                          className="absolute h-[115px] left-0 m-auto object-cover right-0 top-[13%] w-[67%]"
                        />
                      </div>
                      <div className="absolute h-[33px] m-auto right-[24%] top-[5%] w-8">
                        <Img
                          src="images/img_sphere.png"
                          alt="sphere One"
                          className="h-[33px] m-auto object-cover w-8"
                        />
                        <div className="absolute bg-[url(/images/img_group2424.png)] bg-cover bg-no-repeat bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                          <div className="h-[33px] relative w-8">
                            <Img
                              src="images/img_image2.png"
                              alt="imageTwo One"
                              className="h-[33px] m-auto object-cover w-8"
                            />
                            <div className="absolute bottom-0 h-[33px] justify-center left-0 m-auto right-0 top-0 w-8">
                              <Img
                                src="images/img_image2.png"
                                alt="imageThree One"
                                className="h-[33px] m-auto object-cover w-8"
                              />
                              <Img
                                src="images/img_image2.png"
                                alt="imageFour One"
                                className="absolute bottom-0 h-[33px] justify-center left-0 m-auto object-cover right-0 top-0 w-8"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 bottom-[0%] flex flex-col items-start justify-end left-0 m-auto p-6 right-0 rounded-bl rounded-br shadow-sm w-full">
                    <div className="flex flex-col gap-5 items-start justify-start ml-[7px] mt-[5px] w-[76%]">
                      <div className="flex flex-col gap-[11px] items-start justify-start">
                        <Text className="!text-bluegray-800 font-bold text-lg">
                          Subcrible us
                        </Text>
                        <Text className="!text-bluegray-400 font-normal leading-6 text-base">
                          To make friend with others in our community
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between w-full">
                        <Button className="bg-deep_orange-300 font-semibold h-12 min-w-[149px] px-[26px] rounded-[24px] text-sm text-white-A700">
                          Subcrible now
                        </Button>
                        <Button className="bg-gray-51 font-semibold h-12 min-w-[78px] pl-[25px] pr-6 rounded-[24px] text-bluegray-800 text-sm">
                          skip
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between mt-[19px] w-full">
                <div className="h-[436px] relative w-[67%]">
                  <div className="flex flex-col gap-[11px] h-full items-start justify-start m-auto pr-1 pt-1">
                    <Text className="!text-white-A700 font-normal ml-[3px] text-sm">
                      Balance
                    </Text>
                    <Text className="!text-white-A700 font-bold text-lg">
                      $0.0
                    </Text>
                  </div>
                  <div className="absolute bg-white-A700 bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto p-8 right-0 rounded shadow-sm top-0 w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row items-end justify-between w-full">
                        <Text className="!text-bluegray-900 font-bold mb-1 mt-[7px] text-lg">
                          My card
                        </Text>
                        <Img
                          src="images/img_morehorizontal.svg"
                          alt="morehorizontal"
                          className="h-8 w-8"
                        />
                      </div>
                      <SelectBox
                        indicator={
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        getOptionLabel={(e) => (
                          <>
                            <div className="flex items-center">
                              <Img
                                src="images/img_visa_1.svg"
                                alt="visa 1"
                                className="mr-[7px]"
                              />
                              <span>{e.label}</span>
                            </div>
                          </>
                        )}
                        name="language"
                        placeholder="1234 **** 4567 8901 "
                        options={dropDownOptions}
                        className="border border-indigo-51 border-solid font-medium mt-7 pb-[17px] pt-4 rounded text-bluegray-800 text-sm w-[44%]"
                      />
                      <div className="flex flex-row items-start justify-between mt-4 w-[99%]">
                        <div className="flex flex-col gap-4 items-center justify-start w-[44%]">
                          <div className="bg-indigo-400 flex flex-row items-start justify-between pt-1.5 rounded w-full">
                            <div className="h-[83px] mt-[94px] relative w-[61%]">
                              <Text className="!text-white-A700 absolute bottom-[33%] font-medium m-auto right-[0%] text-base">
                                1234 **** 4567 8901{" "}
                              </Text>
                              <Img
                                src="images/img_group_83X96.png"
                                alt="Group Five"
                                className="absolute bottom-0 h-[83px] left-[0%] m-auto object-cover rounded top-0 w-[53%]"
                              />
                            </div>
                            <div className="h-[161px] mb-4 relative w-[26%]">
                              <Img
                                src="images/img_group_12X40.svg"
                                alt="Group Six"
                                className="h-3 m-auto rounded"
                              />
                              <Img
                                src="images/img_group_161X77.png"
                                alt="Group Seven"
                                className="absolute bottom-0 h-[161px] justify-center left-0 m-auto object-cover right-0 rounded top-0 w-full"
                              />
                            </div>
                          </div>
                          <Button className="bg-white-A700 font-semibold h-12 px-[35px] rounded text-deep_orange-300 text-sm w-full">
                            Add new card
                          </Button>
                        </div>
                        <div className="flex flex-col gap-4 items-center justify-start w-1/2">
                          <div className="flex flex-row gap-[91px] items-center justify-start pt-0.5 px-0.5 w-full">
                            <Text className="!text-bluegray-400 font-normal mt-[3px] text-base">
                              Card Type
                            </Text>
                            <Text className="!text-bluegray-800 font-medium text-base">
                              Visa
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[79px] justify-start p-[3px] w-full">
                            <Text className="!text-bluegray-400 font-normal ml-px mt-px text-base">
                              Card holder
                            </Text>
                            <Text className="!text-bluegray-800 font-medium my-px text-base">
                              AvoRi
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between p-0.5 w-full">
                            <Text className="!text-bluegray-400 font-normal ml-0.5 my-px text-base">
                              Card number
                            </Text>
                            <Text className="!text-bluegray-800 font-medium my-px text-base">
                              1234 **** 4567 8901{" "}
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[114px] items-start justify-start pt-px px-px w-full">
                            <Text className="!text-bluegray-400 font-normal mt-1 text-base">
                              Expired
                            </Text>
                            <Text className="!text-bluegray-800 font-medium mt-[3px] text-base">
                              21/09
                            </Text>
                          </div>
                          <div className="flex flex-row justify-between pr-px py-px w-full">
                            <Text className="!text-bluegray-400 font-normal my-0.5 text-base">
                              CVV
                            </Text>
                            <Text className="!text-bluegray-800 font-medium mb-1 mr-[134px] text-base">
                              ***
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[66px] items-center justify-start pt-1 px-1 w-full">
                            <Text className="!text-bluegray-400 font-normal text-base">
                              Total balance
                            </Text>
                            <Text className="!text-bluegray-800 font-medium mt-px text-base">
                              $0.0
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-end justify-end mt-px pt-4 px-4 rounded shadow-sm w-[33%]">
                  <div className="flex flex-col gap-[37px] items-start justify-start mt-[21px] w-[96%]">
                    <Text className="!text-bluegray-900 font-bold text-lg">
                      Transactions
                    </Text>
                    <div className="flex flex-row items-start justify-between w-full">
                      <div className="flex flex-col w-[90%]">
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row items-center justify-between pr-0.5 py-0.5 w-[65%]">
                            <Img
                              src="images/img_robototoyfacefinal2.png"
                              alt="RobotoToyFaceFinalTwo"
                              className="h-[46px] rounded-[50%] w-[46px]"
                            />
                            <div className="flex flex-col gap-3 items-start justify-start mr-1">
                              <Text className="!text-bluegray-800 font-semibold text-base">
                                Ackerman
                              </Text>
                              <Text className="!text-bluegray-400 font-normal text-sm">
                                7:00 • 21/10/2021
                              </Text>
                            </div>
                          </div>
                          <Text className="!text-bluegray-900 font-medium text-base">
                            -$12.0
                          </Text>
                        </div>
                        <div className="bg-indigo-51 h-px w-px" />
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row items-center justify-between pr-px py-px w-[63%]">
                            <Img
                              src="images/img_punktoyface1.png"
                              alt="PunkToyFaceOne"
                              className="h-[46px] my-px rounded-[50%] w-[46px]"
                            />
                            <div className="flex flex-col gap-3 items-start justify-start">
                              <Text className="!text-bluegray-800 font-semibold text-base">
                                Blanker{" "}
                              </Text>
                              <Text className="!text-bluegray-400 font-normal text-sm">
                                7:00 • 21/10/2021
                              </Text>
                            </div>
                          </div>
                          <Text className="!text-bluegray-900 font-medium text-base">
                            +$100.0
                          </Text>
                        </div>
                        <div className="bg-indigo-51 h-px w-px" />
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row items-center justify-between pr-px py-px w-[63%]">
                            <Img
                              src="images/img_vangoghbyamrit1.png"
                              alt="VanGoghByAmritOne"
                              className="h-[46px] my-px rounded-[50%] w-[46px]"
                            />
                            <div className="flex flex-col gap-3 items-start justify-start">
                              <Text className="!text-bluegray-800 font-semibold text-base">
                                Lee Ri
                              </Text>
                              <Text className="!text-bluegray-400 font-normal text-sm">
                                7:00 • 21/10/2021
                              </Text>
                            </div>
                          </div>
                          <Text className="!text-bluegray-900 font-medium text-base">
                            -$12.0
                          </Text>
                        </div>
                        <div className="bg-indigo-51 h-px w-px" />
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-row items-center justify-between pr-px py-px w-[63%]">
                            <Img
                              src="images/img_rarepepenakamototoyface.png"
                              alt="RarePepeNakamotoToyFace"
                              className="h-[46px] my-px rounded-[50%] w-[46px]"
                            />
                            <div className="flex flex-col gap-3 items-start justify-start">
                              <Text className="!text-bluegray-800 font-semibold text-base">
                                Jackson
                              </Text>
                              <Text className="!text-bluegray-400 font-normal text-sm">
                                7:00 • 21/10/2021
                              </Text>
                            </div>
                          </div>
                          <Text className="!text-bluegray-900 font-medium text-base">
                            -$10.0
                          </Text>
                        </div>
                        <div className="bg-indigo-51 h-px w-px" />
                        <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                          <div className="flex flex-row gap-4 items-start justify-start w-[64%]">
                            <Img
                              src="images/img_tintin22.png"
                              alt="TinTinTwentyTwo"
                              className="object-cover rounded-[50%] w-[26%]"
                            />
                            <div className="flex flex-col gap-[13px] items-start justify-start mt-px">
                              <Text className="!text-bluegray-800 font-semibold text-base">
                                Yomaha
                              </Text>
                              <Text className="!text-bluegray-400 font-normal text-sm">
                                7:00 • 21/10/2021
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-51 flex flex-col items-center justify-start mb-8 pb-[177px] rounded-[50%] w-[2%]">
                        <div className="bg-deep_orange-300 h-[134px] w-1" />
                      </div>
                    </div>
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
