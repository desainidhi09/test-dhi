"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Input } from "../../components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Sidebar } from "react-pro-sidebar";

export default function DashboardTwoPage() {
  const [searchBarValue14, setSearchBarValue14] = React.useState("");

  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="flex flex-row items-start justify-evenly w-full">
        <Sidebar className="!sticky !w-[242px] h-screen overflow-auto top-0">
          <div className="bg-white-A700 flex flex-col gap-9 items-center justify-start p-7 w-full">
            <Img src="images/img_logo.svg" alt="Logo" className="h-7 mt-2" />
            <div className="flex flex-col items-start justify-start mb-[1012px] w-[86%]">
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
        <div className="bg-indigo-51 h-[1542px] mb-px w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue14}
                onChange={(e) => setSearchBarValue14(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue14?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue14("")}
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
          <div className="bg-gray-51 flex flex-col items-center justify-start mt-px pl-[23px] w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-[74%]">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text className="!font-poppins !text-bluegray-900 font-medium text-xl">
                    Overview
                  </Text>
                  <div className="flex flex-row justify-between w-1/4">
                    <Button className="bg-white-A700 h-12 rounded w-12">
                      <Img src="images/img_buttonprimary.svg" />
                    </Button>
                    <div className="bg-deep_orange-300 flex flex-row gap-[35px] items-center justify-between p-3.5 rounded w-auto">
                      <Text className="!text-white-A700 font-medium ml-[3px] text-sm">
                        Add task
                      </Text>
                      <Img
                        src="images/img_plus.svg"
                        alt="plus"
                        className="h-5 mr-0.5 w-5"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center justify-start w-full">
                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col items-center justify-start w-[44%]">
                      <div className="gap-5 grid grid-cols-2 justify-center min-h-[auto] w-full">
                        <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-[98%]">
                            <Button className="bg-gray-102 h-12 rounded w-12">
                              <Img src="images/img_buttonprimary_48X48.svg" />
                            </Button>
                            <div className="flex flex-col gap-3 items-center justify-end pr-1 py-1 w-full">
                              <Text className="!text-bluegray-800 font-bold mt-px text-lg">
                                50+
                              </Text>
                              <Text className="!text-bluegray-800 font-normal text-sm">
                                Available Tasks
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-[98%]">
                            <Button className="bg-yellow-50 h-12 rounded w-12">
                              <Img src="images/img_buttonprimary_1.svg" />
                            </Button>
                            <div className="flex flex-col gap-3 items-center justify-end pr-1 py-1 w-full">
                              <Text className="!text-bluegray-800 font-bold mt-px text-lg">
                                20
                              </Text>
                              <Text className="!text-bluegray-800 font-normal text-sm">
                                Obsolete Tasks
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-[98%]">
                            <Button className="bg-gray-103 h-12 rounded w-12">
                              <Img src="images/img_buttonprimary_2.svg" />
                            </Button>
                            <div className="flex flex-col gap-[13px] justify-end pr-[5px] pt-[5px] w-full">
                              <Text className="!text-bluegray-800 font-bold ml-9 mr-[42px] text-lg">
                                23
                              </Text>
                              <Text className="!text-bluegray-800 font-normal mr-[27px] text-sm">
                                In Progress
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-[98%]">
                            <Button className="bg-gray-52 h-12 rounded w-12">
                              <Img src="images/img_buttonprimary_3.svg" />
                            </Button>
                            <div className="flex flex-col gap-3 justify-end pr-1 py-1 w-full">
                              <Text className="!text-bluegray-800 font-bold ml-9 mr-[43px] mt-px text-lg">
                                35
                              </Text>
                              <Text className="!text-bluegray-800 font-normal mr-[27px] text-sm">
                                Done Tasks
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-6 rounded shadow-sm w-[55%]">
                      <div className="flex flex-col items-start justify-start mb-2 w-[97%]">
                        <div className="flex flex-row items-center justify-between w-full">
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
                        <div className="flex flex-row items-center justify-between mt-7 w-[99%]">
                          <div className="flex flex-col gap-[27px] items-start justify-start">
                            <Text className="!text-bluegray-400 font-normal text-xs">
                              800
                            </Text>
                            <Text className="!text-bluegray-400 font-normal text-xs">
                              600
                            </Text>
                            <Text className="!text-bluegray-400 font-normal text-xs">
                              400
                            </Text>
                            <Text className="!text-bluegray-400 font-normal ml-px text-xs">
                              200
                            </Text>
                            <Text className="!text-bluegray-400 font-normal ml-[15px] text-xs">
                              0
                            </Text>
                          </div>
                          <Img
                            src="images/img_frame_176X344.svg"
                            alt="Frame"
                            className="h-44"
                          />
                        </div>
                        <div className="flex flex-row gap-[34px] justify-start ml-[43px] mt-5 pb-0.5 px-0.5">
                          <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                            Mon
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                            Tue
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                            Wed
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                            Thu
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                            Fri
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                            Sat
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                            Sun
                          </Text>
                        </div>
                        <div className="flex flex-row gap-6 items-start justify-center ml-[125px] mt-8 w-[38%]">
                          <div className="flex flex-row gap-2 items-start justify-start w-[38%]">
                            <div className="bg-amber-300 h-1.5 mb-0.5 mt-[5px] rounded-[50%] w-1.5" />
                            <Text className="!text-bluegray-400 font-medium text-xs">
                              Income
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-start w-[47%]">
                            <div className="bg-indigo-400 h-1.5 my-[5px] rounded-[50%] w-1.5" />
                            <Text className="!text-bluegray-400 font-medium text-xs">
                              Expenses
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between w-full">
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-[44%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-between w-full">
                          <Text className="!text-bluegray-900 font-bold mb-1 mt-1.5 text-lg">
                            Projects
                          </Text>
                          <Img
                            src="images/img_morehorizontal.svg"
                            alt="morehorizontal"
                            className="h-8 w-8"
                          />
                        </div>
                        <div className="h-[190px] mt-7 relative w-[190px]">
                          <div className="h-[190px] m-auto w-[190px]">
                            <CircularProgressbar
                              strokeWidth={1}
                              value={17}
                              styles={{
                                trail: {},
                                path: { strokeLinecap: "square" },
                              }}
                              className="border-[12px] border-green-700 border-solid h-[190px] m-auto w-[190px]"
                            />
                            <CircularProgressbar
                              strokeWidth={1}
                              value={24}
                              styles={{
                                trail: {},
                                path: {
                                  strokeLinecap: "square",
                                  transformOrigin: "center",
                                  transform: "rotate(51deg)",
                                },
                              }}
                              className="absolute border-[12px] border-green-700 border-solid bottom-0 h-[190px] justify-center left-0 m-auto right-0 top-0 w-[190px]"
                            />
                          </div>
                          <div className="absolute bottom-[34%] flex flex-col gap-[9px] items-center justify-start m-auto right-[31%] w-[34%]">
                            <Text className="!text-bluegray-800 font-bold text-2xl">
                              230+
                            </Text>
                            <Text className="!text-bluegray-800 font-normal text-sm">
                              Projects
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-8 items-start justify-center mt-6 w-[72%]">
                          <div className="flex flex-row items-center justify-between w-[22%]">
                            <div className="bg-green-700 h-1.5 my-[17px] rounded-[50%] w-1.5" />
                            <div className="flex flex-col gap-1.5 items-start justify-start">
                              <Text className="!text-bluegray-900 font-semibold text-base">
                                100
                              </Text>
                              <Text className="!text-bluegray-400 font-medium text-xs">
                                High
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row gap-3 items-center justify-center w-1/5">
                            <div className="bg-indigo-400 h-1.5 mb-3.5 mt-[17px] rounded-[50%] w-1.5" />
                            <div className="flex flex-col gap-1.5 items-start justify-start">
                              <Text className="!text-bluegray-900 font-semibold text-base">
                                30
                              </Text>
                              <Text className="!text-bluegray-400 font-medium text-xs">
                                Low
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between w-[30%]">
                            <div className="bg-amber-300 h-1.5 my-[17px] rounded-[50%] w-1.5" />
                            <div className="flex flex-col gap-1.5 items-start justify-start pb-px pr-px">
                              <Text className="!text-bluegray-900 font-semibold text-base">
                                100
                              </Text>
                              <Text className="!text-bluegray-400 font-medium mb-px text-xs">
                                Medium
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] rounded shadow-sm w-[55%]">
                      <div className="flex flex-col gap-8 items-center justify-start mb-1.5 w-[98%]">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text className="!text-bluegray-900 font-bold text-lg">
                            Active tasks
                          </Text>
                          <div className="flex flex-row gap-2 justify-between w-auto">
                            <Button className="bg-bluegray-900 font-semibold h-10 min-w-[75px] px-6 rounded text-sm text-white-A700">
                              Day
                            </Button>
                            <Button className="border border-indigo-51 border-solid font-semibold h-10 min-w-[75px] px-[17px] rounded text-bluegray-800 text-sm">
                              Week
                            </Button>
                            <Button className="border border-indigo-51 border-solid font-semibold h-10 min-w-[75px] px-3.5 rounded text-bluegray-800 text-sm">
                              Month
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-5 w-[97%]">
                            <div className="flex flex-row gap-5 items-center justify-start w-[95%]">
                              <Img
                                src="images/img_square.svg"
                                alt="square"
                                className="h-6 w-6"
                              />
                              <div className="flex flex-col gap-2 items-start justify-start w-[89%]">
                                <Text className="!text-bluegray-400 font-medium text-xs">
                                  ACKERMAN_LHN
                                </Text>
                                <div className="flex flex-row gap-2 items-center justify-start">
                                  <div className="bg-red-600 h-4 my-1 w-1" />
                                  <Text className="!text-bluegray-900 font-medium text-base">
                                    Changelog Revamp #ver 1.0 Homescreen{" "}
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-indigo-51 h-px w-full" />
                            <div className="flex flex-row gap-5 items-center justify-start w-[81%]">
                              <Img
                                src="images/img_squarecheckbox.svg"
                                alt="squarecheckbox"
                                className="h-6 w-6"
                              />
                              <div className="flex flex-col gap-[11px] items-start justify-start w-[87%]">
                                <Text className="!text-bluegray-400 font-medium text-xs">
                                  JOHNSON
                                </Text>
                                <div className="flex flex-row gap-2 items-center justify-start">
                                  <div className="bg-deep_orange-300 h-4 my-1 w-1" />
                                  <Text className="!text-bluegray-900 font-medium text-base">
                                    Create user flow for Data Projects
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-indigo-51 h-px w-full" />
                            <div className="flex flex-row items-center justify-between w-full">
                              <Img
                                src="images/img_square.svg"
                                alt="square One"
                                className="h-6 w-6"
                              />
                              <div className="flex flex-col gap-[11px] items-start justify-start w-[89%]">
                                <Text className="!text-bluegray-400 font-medium text-xs">
                                  AVORI
                                </Text>
                                <div className="flex flex-row gap-2 items-center justify-start">
                                  <div className="bg-indigo-400 h-4 my-4 w-1" />
                                  <Text className="!text-bluegray-900 font-medium leading-6 text-base w-[97%]">
                                    Gather to discuss about new project deriving
                                    from Avocado
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-[30px] rounded shadow-sm w-full">
                    <div className="flex flex-col items-start justify-start my-px w-full">
                      <div className="flex flex-row items-end justify-between w-full">
                        <Text className="!text-bluegray-900 font-bold mb-1 mt-[7px] text-lg">
                          Posting Tasks
                        </Text>
                        <Img
                          src="images/img_morehorizontal.svg"
                          alt="morehorizontal One"
                          className="h-8 w-8"
                        />
                      </div>
                      <Text className="!text-bluegray-900 font-normal mt-[9px] text-sm">
                        Crucial tasks/ Urgent tasks/ Normal tasks
                      </Text>
                      <div className="flex flex-col h-[401px] mt-[29px] relative w-full">
                        <div className="absolute bg-gray-51 flex flex-row justify-evenly m-auto w-full">
                          <div className="flex h-12 justify-end relative w-[13%]">
                            <Text className="!text-bluegray-900 font-semibold mb-3.5 ml-auto mr-6 mt-auto text-sm">
                              Time
                            </Text>
                            <div className="absolute bg-deep_orange-300 bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto p-4 right-0 top-0 w-full">
                              <Text className="!text-white-A700 font-semibold mb-px text-sm">
                                Time
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-evenly w-[88%]">
                            <div className="flex flex-col items-center justify-start p-4 w-[29%]">
                              <Text className="!text-bluegray-400 font-medium mb-px text-sm">
                                Mon 10
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start p-4 w-[15%]">
                              <Text className="!text-bluegray-400 font-medium mb-px text-sm">
                                Tue 11
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start p-4 w-[15%]">
                              <Text className="!text-bluegray-400 font-medium mb-px text-sm">
                                Wed 12
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start p-4 w-[15%]">
                              <Text className="!text-bluegray-400 font-medium mb-px text-sm">
                                Thu 13
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start p-4 w-[15%]">
                              <Text className="!text-bluegray-400 font-medium mb-px text-sm">
                                Fri 14
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start p-4 w-[15%]">
                              <Text className="!text-bluegray-400 font-medium mb-px text-sm">
                                Sat 15
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col items-start justify-start mb-7 ml-[13px] mt-auto">
                          <Text className="!text-bluegray-400 font-normal ml-[3px] text-xs">
                            09 am
                          </Text>
                          <Text className="!text-bluegray-400 font-normal ml-0.5 mt-[34px] text-xs">
                            10 am
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mt-[34px] text-xs">
                            11 am
                          </Text>
                          <Text className="!text-bluegray-400 font-normal ml-px mt-[34px] text-xs">
                            12 pm
                          </Text>
                          <Text className="!text-bluegray-400 font-normal ml-px mt-8 text-xs">
                            01 pm
                          </Text>
                          <Text className="!text-bluegray-400 font-normal ml-[3px] mt-8 text-xs">
                            02 pm
                          </Text>
                          <Text className="!text-bluegray-400 font-normal ml-0.5 mt-8 text-xs">
                            03 pm
                          </Text>
                        </div>
                        <div className="absolute bg-[url(/images/img_group2313.svg)] bg-cover bg-no-repeat flex flex-col gap-2.5 h-[401px] m-auto p-[11px] w-[89%]">
                          <div className="bg-white-A700 flex flex-col items-start justify-start rounded shadow-sm w-1/4">
                            <div className="flex flex-row gap-4 items-center justify-start w-[72%]">
                              <div className="bg-green-700 h-[171px] w-1" />
                              <div className="flex flex-col items-start justify-start w-[84%]">
                                <Button className="bg-deep_orange-300 font-poppins font-semibold h-6 min-w-[93px] px-[7px] rounded text-[10px] text-white-A700">
                                  #Data projects
                                </Button>
                                <Text className="!text-bluegray-800 font-semibold mt-[13px] text-sm">
                                  Revamp UI, UX
                                </Text>
                                <div className="h-6 mt-[61px] relative w-[36%]">
                                  <Img
                                    src="images/img_robototoyfacefinal2.png"
                                    alt="RobotoToyFaceFinalTwo"
                                    className="absolute bottom-0 h-6 left-[0%] m-auto rounded-[50%] top-0 w-6"
                                  />
                                  <Img
                                    src="images/img_fidenza978toyface.png"
                                    alt="Fidenza978ToyFace"
                                    className="absolute bottom-0 h-6 m-auto right-[0%] rounded-[50%] top-0 w-6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col items-start justify-start rounded shadow-sm w-[15%]">
                            <div className="flex flex-row gap-4 items-center justify-start w-[77%]">
                              <div className="bg-indigo-400 h-[137px] rounded-[50%] w-1" />
                              <div className="flex flex-col items-start justify-start w-[74%]">
                                <Button className="bg-indigo-400 font-poppins font-semibold h-6 min-w-[49px] px-2.5 rounded text-[10px] text-white-A700">
                                  #2011
                                </Button>
                                <Text className="!text-bluegray-800 font-semibold mt-[13px] text-sm">
                                  Meeting
                                </Text>
                                <div className="h-6 mt-[27px] relative w-[65%]">
                                  <Img
                                    src="images/img_robototoyfacefinal2.png"
                                    alt="RobotoToyFaceFinalTwo One"
                                    className="absolute bottom-0 h-6 left-[0%] m-auto rounded-[50%] top-0 w-6"
                                  />
                                  <Img
                                    src="images/img_fidenza978toyface.png"
                                    alt="Fidenza978ToyFace One"
                                    className="absolute bottom-0 h-6 m-auto right-[0%] rounded-[50%] top-0 w-6"
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
              <div className="bg-white-A700 flex flex-col items-center justify-start p-4 rounded shadow-sm w-[26%]">
                <div className="flex flex-col items-center justify-start mb-[27px] w-[90%]">
                  <div className="flex flex-row items-center justify-between w-[99%]">
                    <Text className="!font-poppins !text-bluegray-900 font-medium text-lg">
                      Calendar
                    </Text>
                    <Img
                      src="images/img_morehorizontal.svg"
                      alt="morehorizontal Two"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex flex-col gap-[23px] items-center justify-start mt-[15px] w-full">
                    <div className="flex flex-row items-start justify-between w-[99%]">
                      <Button className="bg-gray-51 h-10 rounded-[50%] w-10">
                        <Img src="images/img_buttonprimary_40X40.svg" />
                      </Button>
                      <Text className="!text-bluegray-800 font-semibold mt-3.5 text-sm">
                        Febuary 2022
                      </Text>
                      <Button className="bg-gray-51 h-10 rounded-[50%] w-10">
                        <Img src="images/img_buttonprimary_4.svg" />
                      </Button>
                    </div>
                    <div className="w-full" />
                  </div>
                  <div className="flex flex-row items-center justify-between mt-[53px] w-[99%]">
                    <Text className="!font-poppins !text-bluegray-900 font-medium text-lg">
                      Recent activities
                    </Text>
                    <Img
                      src="images/img_morehorizontal.svg"
                      alt="morehorizontal Three"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="flex flex-col gap-[18.54px] mt-[37px] w-[99%]">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text className="!text-bluegray-400 font-medium text-sm">
                        Feb 24, 2022
                      </Text>
                      <div className="flex flex-col pr-0.5 w-full">
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[76%]">
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start">
                            <div className="bg-red-600 h-[47px] my-px w-1" />
                            <Text className="!text-bluegray-900 font-medium leading-6 text-base w-[94%]">
                              Changelog Revamp Homescreen{" "}
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-51 h-px w-full" />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[76%]">
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start">
                            <div className="bg-indigo-400 h-[47px] my-px w-1" />
                            <Text className="!text-bluegray-900 font-medium leading-6 text-base w-[94%]">
                              Create user flow for Data Projects
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-51 h-px w-full" />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start">
                            <div className="bg-green-700 h-[47px] my-px w-1" />
                            <Text className="!text-bluegray-900 font-medium leading-6 text-base w-[95%]">
                              Gather to discuss about new project deriving
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-51 h-px w-full" />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[76%]">
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start">
                            <div className="bg-indigo-400 h-[47px] my-px w-1" />
                            <Text className="!text-bluegray-900 font-medium leading-6 text-base w-[94%]">
                              Urgent meeting with CEO
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-51 h-px w-px" />
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text className="!text-bluegray-400 font-medium text-sm">
                        Feb 24, 2022
                      </Text>
                      <div className="flex flex-col pr-[46px] w-full">
                        <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 justify-start">
                            <div className="bg-red-600 h-6 w-1" />
                            <Text className="!text-bluegray-900 font-medium text-base">
                              Daily meeting with tem
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-51 h-px w-full" />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[94%]">
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start">
                            <div className="bg-indigo-400 h-[47px] my-px w-1" />
                            <Text className="!text-bluegray-900 font-medium leading-6 text-base w-[94%]">
                              Revision design system
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-51 h-px w-full" />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[94%]">
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start">
                            <div className="bg-green-700 h-[47px] my-px w-1" />
                            <Text className="!text-bluegray-900 font-medium leading-6 text-base w-[94%]">
                              Changelog authentication
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-51 h-px w-full" />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[85%]">
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start">
                            <div className="bg-indigo-400 h-[22px] my-px w-1" />
                            <Text className="!text-bluegray-900 font-medium text-base">
                              Pitching with client
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-51 h-px w-full" />
                        <div className="flex flex-col gap-[11px] items-start justify-start w-[94%]">
                          <Text className="!text-bluegray-400 font-medium text-xs">
                            8:00 AM -9:00 AM
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-start">
                            <div className="bg-red-600 h-[47px] my-px w-1" />
                            <Text className="!text-bluegray-900 font-medium leading-6 text-base w-[94%]">
                              Year end party and plan for 2022
                            </Text>
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
      </div>
    </div>
  );
}
