"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Radio, SelectBox, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Sidebar } from "react-pro-sidebar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    rowno: "1",
    rowcustomer: "Ackerman",
    rowdate: "12.02.2022",
    rowamount: "$20.0",
    roworderno: "#21033",
    rowpaymenttype: "Visa Card",
  },
  {
    rowno: "2",
    rowcustomer: "Avori",
    rowdate: "12.02.2022",
    rowamount: "$32.0",
    roworderno: "#21034",
    rowpaymenttype: "Visa Card",
  },
];

export default function DashboardThreePage() {
  const [searchBarValue15, setSearchBarValue15] = React.useState("");
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowno", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 font-medium mt-[34px] text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center p-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              No.
            </Text>
          </div>
        ),
        meta: { width: "95px" },
      }),
      tableColumnHelper.accessor("rowcustomer", {
        cell: (info) => (
          <div className="flex flex-row gap-3 items-start justify-center">
            <Img
              src="images/img_robototoyfacefinal2.png"
              alt="RobotoToyFaceFinalTwo"
              className="h-6 mt-[34px] rounded-[50%] w-6"
            />
            <Text className="!text-bluegray-800 font-medium mr-[63px] mt-[38px] text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-start p-px">
            <Text className="!text-bluegray-400 font-normal my-[3px] text-base">
              Customer
            </Text>
          </div>
        ),
        meta: { width: "178px" },
      }),
      tableColumnHelper.accessor("rowdate", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 font-medium mt-[34px] text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-[3px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Date
            </Text>
          </div>
        ),
        meta: { width: "148px" },
      }),
      tableColumnHelper.accessor("rowamount", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 font-medium mt-[38px] text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-[3px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Amount
            </Text>
          </div>
        ),
        meta: { width: "132px" },
      }),
      tableColumnHelper.accessor("roworderno", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 font-medium mt-[34px] text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-[3px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Order No.
            </Text>
          </div>
        ),
        meta: { width: "133px" },
      }),
      tableColumnHelper.accessor("rowpaymenttype", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-between">
            <Text className="!text-bluegray-800 font-medium mt-[38px] text-base">
              {info?.getValue()}
            </Text>
            <Img
              src="images/img_morehorizontal.svg"
              alt="morevertical"
              className="h-6 mr-[18px] mt-[34px] w-6"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-[5px] pt-[5px]">
            <Text className="!text-bluegray-400 font-normal text-base">
              Payment type
            </Text>
          </div>
        ),
        meta: { width: "225px" },
      }),
    ];
  }, []);

  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="flex flex-row justify-evenly w-full">
        <Sidebar className="!sticky !w-[86px] h-screen overflow-auto top-0">
          <div className="bg-white-A700 flex flex-col gap-9 items-center justify-start p-[29px] w-full">
            <Img
              src="images/img_group18018.svg"
              alt="Group18018"
              className="h-7 mt-[7px]"
            />
            <div className="flex flex-col gap-[34px] items-center justify-start mb-[930px] w-full">
              <Img src="images/img_icon_3.svg" alt="Icon" className="h-5 w-5" />
              <Img
                src="images/img_icon_4.svg"
                alt="Icon One"
                className="h-5 w-5"
              />
              <Img
                src="images/img_icon_5.svg"
                alt="Icon Two"
                className="h-5 w-5"
              />
              <Img
                src="images/img_icon_6.svg"
                alt="Icon Three"
                className="h-5 w-5"
              />
              <Img
                src="images/img_icon_7.svg"
                alt="Icon Four"
                className="h-5 w-5"
              />
              <Img
                src="images/img_icon_8.svg"
                alt="Icon Five"
                className="h-5 w-5"
              />
              <Img
                src="images/img_icon_9.svg"
                alt="Icon Six"
                className="h-5 w-5"
              />
              <div className="bg-white-A700 flex flex-col h-[26px] items-center justify-start p-[3px] w-[26px]">
                <div className="bg-bluegray-400 h-5 rounded-[50%] w-5" />
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="bg-indigo-51 h-[1463px] w-px" />
        <div className="flex flex-col items-center justify-start w-[95%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[97%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue15}
                onChange={(e) => setSearchBarValue15(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue15?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue15("")}
                      fillColor="#36414fff"
                    />
                  ) : null
                }
                className="bg-white-A700 border border-bluegray-200 border-solid font-medium h-10 ml-[305px] pr-[35px] rounded text-bluegray-400 text-xs w-[33%]"
              />
              <Img
                src="images/img_shoppingbag.svg"
                alt="shoppingbag"
                className="h-6 ml-[211px] w-6"
              />
              <div className="bg-[url(/images/img_group2653.svg)] bg-cover bg-no-repeat flex flex-col h-6 items-end justify-start ml-6 pl-px py-px w-6">
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
          <div className="bg-gray-51 flex flex-col items-center justify-start pl-3 py-3 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-col items-center justify-start w-[74%]">
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
                          <Img
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        name="dropdown"
                        placeholder="Last week"
                        options={dropDownOptions}
                        className="bg-white-A700 font-medium pb-[17px] pl-4 pt-4 rounded text-bluegray-800 text-sm w-[70%]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-6 w-full">
                    <div className="flex flex-col gap-5 w-[21%]">
                      <div className="bg-white-A700 flex flex-col items-center justify-end p-9 rounded shadow-sm w-full">
                        <div className="flex flex-col gap-8 items-center justify-start mt-[5px] w-[59%]">
                          <Img
                            src="images/img_frame.svg"
                            alt="Frame"
                            className="h-[43px]"
                          />
                          <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                            <Text className="!text-bluegray-400 font-normal text-sm">
                              Total Tasks
                            </Text>
                            <Text className="!text-bluegray-800 font-bold text-lg">
                              120
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700 flex flex-col items-center justify-end p-9 rounded shadow-sm w-full">
                        <div className="flex flex-col gap-[33px] items-center justify-start mt-[5px] w-[57%]">
                          <Img
                            src="images/img_frame_43X73.svg"
                            alt="Frame One"
                            className="h-[43px]"
                          />
                          <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                            <Text className="!text-bluegray-400 font-normal text-sm">
                              New Tasks
                            </Text>
                            <Text className="!text-bluegray-800 font-bold text-lg">
                              60
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-[44%]">
                      <div className="flex flex-col gap-[23px] items-center justify-start w-full">
                        <div className="flex flex-col gap-7 items-center justify-start w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <Text className="!text-bluegray-900 font-bold text-lg">
                              Statistics
                            </Text>
                            <Img
                              src="images/img_morehorizontal.svg"
                              alt="morehorizontal"
                              className="h-8 w-8"
                            />
                          </div>
                          <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                            <Img
                              src="images/img_frame_amber_300.svg"
                              alt="Frame Two"
                              className="h-[139px]"
                            />
                            <div className="flex flex-row justify-between pb-0.5 px-0.5 w-full">
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
                          </div>
                        </div>
                        <div className="bg-gray-104 flex flex-col items-center justify-start p-4 rounded w-full">
                          <div className="flex flex-row items-center justify-between w-[96%]">
                            <div className="flex flex-col items-start justify-start pb-1 pr-1">
                              <Text className="!text-bluegray-900 font-semibold text-base">
                                Data project report
                              </Text>
                              <Text className="!text-bluegray-900 font-normal mt-1 text-sm">
                                • In process
                              </Text>
                            </div>
                            <div className="bg-indigo-52 flex flex-col h-16 items-center justify-start p-1 rounded-[50%] w-16">
                              <div className="bg-indigo-400 h-14 rounded-[50%] shadow-lg w-14" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-[32%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text className="!text-bluegray-900 font-bold text-lg">
                            Sales
                          </Text>
                          <Img
                            src="images/img_morehorizontal.svg"
                            alt="morehorizontal One"
                            className="h-8 w-8"
                          />
                        </div>
                        <div className="h-[190px] mt-8 relative w-[190px]">
                          <CircularProgressbar
                            strokeWidth={1}
                            value={28}
                            styles={{
                              trail: {},
                              path: {
                                strokeLinecap: "square",
                                transformOrigin: "center",
                                transform: "rotate(225deg)",
                              },
                            }}
                            className="border-[12px] border-red-600 border-solid h-[190px] m-auto w-[190px]"
                          />
                          <div className="absolute bottom-0 flex flex-col gap-2 h-full items-center justify-center left-0 m-auto right-0 top-0 w-full">
                            <Text className="!text-bluegray-800 font-normal text-sm">
                              Total
                            </Text>
                            <Text className="!text-bluegray-800 font-bold text-2xl">
                              $2,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-5 mt-[37px] w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <Radio
                              value="currentweek"
                              name="profileviewstwo"
                              label="Current Week"
                              className="bg-red-600 pb-1.5 pl-2 pr-5 text-bluegray-400"
                            />
                            <Text className="!text-bluegray-800 font-medium text-sm">
                              $1,200
                            </Text>
                            <div className="bg-green-700_63 flex flex-row items-start justify-center my-px pr-0.5 py-0.5 rounded">
                              <Img
                                src="images/img_line.svg"
                                alt="line One"
                                className="h-4 mt-px w-4"
                              />
                              <Text className="!text-green-700 font-semibold mr-px mt-0.5 text-sm">
                                0.2%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <Radio
                              value="lastweek"
                              name="profileviewsthree"
                              label="Last Week"
                              className="pb-1.5 pl-2 pr-[35px] text-bluegray-400"
                            />
                            <Text className="!text-bluegray-800 font-medium text-sm">
                              $800
                            </Text>
                            <div className="bg-green-700_63 flex flex-row items-start justify-center my-px pr-0.5 py-0.5 rounded">
                              <Img
                                src="images/img_line.svg"
                                alt="line Two"
                                className="h-4 mt-px w-4"
                              />
                              <Text className="!text-green-700 font-semibold mr-px mt-0.5 text-sm">
                                0.2%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between mt-5 w-full">
                    <div className="flex h-[465px] justify-end relative w-[55%]">
                      <div className="flex flex-col gap-[11px] h-full items-start justify-start mb-[101px] ml-auto mr-[158px] mt-auto pr-1 pt-1">
                        <Text className="!text-white-A700 font-normal ml-[3px] text-sm">
                          Balance
                        </Text>
                        <Text className="!text-white-A700 font-bold text-lg">
                          $0.0
                        </Text>
                      </div>
                      <div className="absolute bg-white-A700 bottom-0 flex flex-col h-full items-center justify-center left-0 m-auto p-6 right-0 rounded shadow-sm top-0 w-full">
                        <div className="flex flex-col items-center justify-start mb-[9px] mt-0.5 w-[99%]">
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
                          <div className="flex flex-col items-center justify-start mt-[26px] w-full">
                            <div className="flex flex-col gap-5 items-center justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-full">
                                <div className="flex flex-col gap-[27px] items-start justify-start">
                                  <Text className="!text-bluegray-400 font-normal text-xs">
                                    Su
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal text-xs">
                                    Sa
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal ml-px text-xs">
                                    Fr
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal text-xs">
                                    Th
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal text-xs">
                                    We
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal h-[13px] text-xs">
                                    Tu
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal text-xs">
                                    Mo
                                  </Text>
                                </div>
                                <div className="h-64 relative w-[88%]">
                                  <div className="absolute bg-[url(/images/img_group2652.svg)] bg-cover bg-no-repeat bottom-0 h-64 left-[0%] m-auto p-[3px] top-0 w-[90%]">
                                    <Img
                                      src="images/img_frame_246X252.svg"
                                      alt="Frame Three"
                                      className="absolute h-[246px] m-auto"
                                    />
                                  </div>
                                  <div className="absolute bg-[url(/images/img_group_white_A700_48X145.svg)] bg-cover bg-no-repeat flex flex-col h-12 items-center justify-end m-auto p-4 right-[0%] shadow-md top-[11%] w-[35%]">
                                    <div className="flex flex-row justify-between mt-0.5 w-[98%]">
                                      <div className="flex flex-row gap-2 items-start justify-start mt-px w-[41%]">
                                        <div className="bg-indigo-400 h-1.5 mb-[5px] mt-0.5 rounded-[50%] w-1.5" />
                                        <Text className="!font-poppins !text-bluegray-900 font-semibold text-xs">
                                          150.0
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-2 items-start justify-start w-2/5">
                                        <div className="bg-amber-300 h-1.5 mb-[5px] mt-0.5 rounded-[50%] w-1.5" />
                                        <Text className="!font-poppins !text-bluegray-900 font-semibold text-xs">
                                          120.0
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-row justify-between pb-px pl-px w-[85%]">
                                <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                                  -300
                                </Text>
                                <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                                  -200
                                </Text>
                                <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                                  -100
                                </Text>
                                <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                                  0
                                </Text>
                                <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                                  100
                                </Text>
                                <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                                  200
                                </Text>
                                <Text className="!text-bluegray-400 font-normal mb-px text-xs">
                                  300
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-6 items-start justify-center mt-8 w-[32%]">
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
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-[44%]">
                      <div className="flex flex-col gap-[29px] items-center justify-start mb-[5px] w-full">
                        <div className="flex flex-row items-end justify-between w-full">
                          <Text className="!text-bluegray-900 font-bold mb-1 mt-1.5 text-lg">
                            Total projects
                          </Text>
                          <Img
                            src="images/img_morehorizontal.svg"
                            alt="morehorizontal Two"
                            className="h-8 w-8"
                          />
                        </div>
                        <div className="flex flex-col gap-[22.91px] w-full">
                          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                            <Text className="!text-bluegray-900 font-semibold text-base">
                              Mobile app (4/12)
                            </Text>
                            <div className="flex flex-row items-end justify-between w-full">
                              <div className="bg-gray-51 h-2 mb-px mt-[9px] relative rounded w-[84%]">
                                <div
                                  style={{ width: "27%" }}
                                  className="absolute bg-indigo-400 h-full rounded"
                                />
                              </div>
                              <Text className="!text-bluegray-900 font-normal text-base">
                                34%
                              </Text>
                            </div>
                          </div>
                          <div className="bg-indigo-51 h-px w-full" />
                          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                            <Text className="!text-bluegray-900 font-semibold text-base">
                              Landing page (2/4)
                            </Text>
                            <div className="flex flex-row items-end justify-between w-full">
                              <div className="bg-gray-51 h-2 mb-px mt-[9px] relative rounded w-[84%]">
                                <div
                                  style={{ width: "62%" }}
                                  className="absolute bg-green-700 h-full rounded"
                                />
                              </div>
                              <Text className="!text-bluegray-900 font-normal text-base">
                                50%
                              </Text>
                            </div>
                          </div>
                          <div className="bg-indigo-51 h-px w-full" />
                          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                            <Text className="!text-bluegray-900 font-semibold text-base">
                              Branding (2/2)
                            </Text>
                            <div className="flex flex-row items-end justify-between w-full">
                              <div className="bg-gray-51 h-2 mb-px mt-[9px] relative rounded w-[87%]">
                                <div
                                  style={{ width: "96%" }}
                                  className="absolute bg-amber-300 h-full rounded"
                                />
                              </div>
                              <Text className="!text-bluegray-900 font-normal text-base">
                                100%
                              </Text>
                            </div>
                          </div>
                          <div className="bg-indigo-51 h-px w-full" />
                          <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                            <Text className="!text-bluegray-900 font-semibold text-base">
                              Branding (2/8)
                            </Text>
                            <div className="flex flex-row items-end justify-between w-full">
                              <div className="bg-gray-51 h-2 mb-px mt-[9px] relative rounded w-[87%]">
                                <div
                                  style={{ width: "17%" }}
                                  className="absolute bg-red-600 h-full rounded"
                                />
                              </div>
                              <Text className="!text-bluegray-900 font-normal text-base">
                                25%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-5 p-[26px] rounded shadow-sm w-full">
                    <div className="flex flex-col items-center justify-start mb-1.5 w-[99%]">
                      <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text className="!text-bluegray-900 font-bold text-lg">
                            Transactions history
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
                        <ReactTable
                          size="md"
                          bodyProps={{ className: "" }}
                          headerProps={{ className: "" }}
                          rowDataProps={{ className: "" }}
                          className="w-[912px]"
                          columns={tableColumns}
                          data={tableData}
                        />
                      </div>
                      <div className="bg-gray-51 flex flex-col items-center justify-start p-5 w-full">
                        <div className="flex flex-row items-center justify-start w-full">
                          <Text className="!text-bluegray-800 font-medium text-base">
                            3
                          </Text>
                          <div className="flex flex-row gap-3 justify-center ml-16 w-[13%]">
                            <Img
                              src="images/img_vangoghbyamrit1.png"
                              alt="VanGoghByAmritOne"
                              className="h-6 rounded-[50%] w-6"
                            />
                            <div className="flex flex-col items-start justify-end pr-[5px] pt-[5px]">
                              <Text className="!text-bluegray-800 font-medium text-base">
                                Benjamin
                              </Text>
                            </div>
                          </div>
                          <Text className="!text-bluegray-800 font-medium ml-[65px] text-base">
                            24.01.2022
                          </Text>
                          <Text className="!text-bluegray-800 font-medium ml-[62px] text-base">
                            $16.0
                          </Text>
                          <Text className="!text-bluegray-800 font-medium ml-[90px] text-base">
                            #21030
                          </Text>
                          <Text className="!text-bluegray-800 font-medium ml-[74px] text-base">
                            MasterCard
                          </Text>
                          <Img
                            src="images/img_morehorizontal.svg"
                            alt="morevertical Two"
                            className="h-6 ml-[91px] w-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-8 rounded shadow-sm w-[26%]">
                  <div className="flex flex-col gap-[37px] items-center justify-start mt-[11px] w-full">
                    <div className="flex flex-col gap-[41px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[23px] items-center justify-start w-[88%]">
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
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-indigo-51 h-px w-full" />
                        <div className="flex flex-row items-center justify-between mt-[31px] w-full">
                          <Text className="!font-poppins !text-bluegray-900 font-medium text-lg">
                            Recent activities
                          </Text>
                          <Img
                            src="images/img_morehorizontal.svg"
                            alt="morehorizontal Three"
                            className="h-8 w-8"
                          />
                        </div>
                        <div className="flex flex-col gap-6 items-start justify-start mt-[37px] w-full">
                          <Text className="!text-bluegray-400 font-medium text-sm">
                            Feb 24, 2022
                          </Text>
                          <div className="flex flex-col w-full">
                            <div className="flex flex-row items-center justify-between pr-1 pt-1 w-full">
                              <Img
                                src="images/img_robototoyfacefinal2.png"
                                alt="RobotoToyFaceFinalTwo One"
                                className="h-[46px] rounded-[50%] w-[46px]"
                              />
                              <div className="flex flex-col items-start justify-start mr-1.5 w-3/4">
                                <Text className="!text-bluegray-900 font-normal text-sm">
                                  Ackerman
                                </Text>
                                <Text className="!text-bluegray-900 font-medium leading-6 mt-2 text-base">
                                  Changelog Revamp #ver 1.0 Homescreen{" "}
                                </Text>
                                <Text className="!text-bluegray-400 font-normal mt-[9px] text-sm">
                                  2min ago
                                </Text>
                              </div>
                            </div>
                            <div className="bg-indigo-51 h-px w-full" />
                            <div className="flex flex-col items-start justify-start pr-1 pt-1 w-full">
                              <div className="flex flex-row gap-4 items-center justify-start w-[98%]">
                                <Img
                                  src="images/img_punktoyface1.png"
                                  alt="PunkToyFaceOne"
                                  className="h-[46px] rounded-[50%] w-[46px]"
                                />
                                <div className="flex flex-col items-start justify-start w-[77%]">
                                  <Text className="!text-bluegray-800 font-normal text-sm">
                                    Blanker
                                  </Text>
                                  <Text className="!text-bluegray-900 font-medium leading-6 mt-2 text-base">
                                    Create user flow for Data Projects
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal mt-[9px] text-sm">
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-indigo-51 h-px w-full" />
                            <div className="flex flex-col items-center justify-start w-[93%]">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Img
                                  src="images/img_vangoghbyamrit1.png"
                                  alt="VanGoghByAmritOne One"
                                  className="h-[46px] rounded-[50%] w-[46px]"
                                />
                                <div className="flex flex-col items-start justify-start pr-[3px] pt-[3px]">
                                  <Text className="!text-bluegray-400 font-normal text-sm">
                                    Lee Ri
                                  </Text>
                                  <Text className="!text-bluegray-900 font-medium mt-[13px] text-base">
                                    Revision design system
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal mt-[9px] text-sm">
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-indigo-51 h-px w-full" />
                            <div className="flex flex-col items-center justify-start w-[96%]">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Img
                                  src="images/img_rarepepenakamototoyface.png"
                                  alt="RarePepeNakamotoToyFace"
                                  className="h-[46px] rounded-[50%] w-[46px]"
                                />
                                <div className="flex flex-col items-start justify-start pr-1 pt-1">
                                  <Text className="!text-bluegray-400 font-normal text-sm">
                                    Jackson
                                  </Text>
                                  <Text className="!text-bluegray-900 font-medium mt-[13px] text-base">
                                    Changelog Scan ID Card
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal mt-[9px] text-sm">
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="bg-indigo-51 h-px w-full" />
                            <div className="flex flex-col items-center justify-start w-[79%]">
                              <div className="flex flex-row items-center justify-between w-full">
                                <Img
                                  src="images/img_tintin22.png"
                                  alt="TinTinTwentyTwo"
                                  className="h-[46px] rounded-[50%] w-[46px]"
                                />
                                <div className="flex flex-col items-start justify-start pr-1 pt-1">
                                  <Text className="!text-bluegray-400 font-normal text-sm">
                                    Yomaha
                                  </Text>
                                  <Text className="!text-bluegray-900 font-medium mt-[13px] text-base">
                                    Pitching with client
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal mt-[9px] text-sm">
                                    2min ago
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6 h-[272px] items-start justify-start w-[272px]">
                      <Text className="!text-bluegray-400 font-medium text-sm">
                        Feb 23, 2022
                      </Text>
                      <div className="flex flex-col w-full">
                        <div className="flex flex-row items-center justify-between pr-1 pt-1 w-full">
                          <Img
                            src="images/img_robototoyfacefinal2.png"
                            alt="RobotoToyFaceFinalTwo Two"
                            className="h-[46px] rounded-[50%] w-[46px]"
                          />
                          <div className="flex flex-col items-start justify-start mr-1.5 w-3/4">
                            <Text className="!text-bluegray-900 font-normal text-sm">
                              Ackerman
                            </Text>
                            <Text className="!text-bluegray-900 font-medium leading-6 mt-2 text-base">
                              Changelog Revamp #ver 1.0 Homescreen{" "}
                            </Text>
                            <Text className="!text-bluegray-400 font-normal mt-[9px] text-sm">
                              2min ago
                            </Text>
                          </div>
                        </div>
                        <div className="bg-indigo-51 h-px w-full" />
                        <div className="flex flex-col items-start justify-start pr-1 pt-1 w-full">
                          <div className="flex flex-row gap-4 items-center justify-start w-[98%]">
                            <Img
                              src="images/img_punktoyface1.png"
                              alt="PunkToyFaceOne One"
                              className="h-[46px] rounded-[50%] w-[46px]"
                            />
                            <div className="flex flex-col items-start justify-start w-[77%]">
                              <Text className="!text-bluegray-800 font-normal text-sm">
                                Blanker
                              </Text>
                              <Text className="!text-bluegray-900 font-medium leading-6 mt-2 text-base">
                                Create user flow for Data Projects
                              </Text>
                              <Text className="!text-bluegray-400 font-normal mt-[9px] text-sm">
                                2min ago
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
    </div>
  );
}
