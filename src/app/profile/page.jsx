"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Sidebar } from "react-pro-sidebar";

const table2Data = [
  {
    rowno: "1",
    rowprojects: "Branding guideline",
    rowstart: "2 Sep, 2020",
    rowlinetwo: "10 Sep, 2020",
    rowbudget: "$1,000",
  },
  {
    rowno: "2",
    rowprojects: "Mobile design",
    rowstart: "2 Sep, 2020",
    rowlinetwo: "10 Sep, 2020",
    rowbudget: "$1,200",
  },
  {
    rowno: "3",
    rowprojects: "Landing pages",
    rowstart: "2 Sep, 2020",
    rowlinetwo: "10 Sep, 2020",
    rowbudget: "$1,800",
  },
  {
    rowno: "2",
    rowprojects: "Mobile design",
    rowstart: "2 Sep, 2020",
    rowlinetwo: "10 Sep, 2020",
    rowbudget: "$1,200",
  },
  {
    rowno: "3",
    rowprojects: "Landing pages",
    rowstart: "2 Sep, 2020",
    rowlinetwo: "10 Sep, 2020",
    rowbudget: "$1,800",
  },
  {
    rowno: "2",
    rowprojects: "Mobile design",
    rowstart: "2 Sep, 2020",
    rowlinetwo: "10 Sep, 2020",
    rowbudget: "$1,200",
  },
  {
    rowno: "3",
    rowprojects: "Landing pages",
    rowstart: "2 Sep, 2020",
    rowlinetwo: "10 Sep, 2020",
    rowbudget: "$1,800",
  },
  {
    rowno: "2",
    rowprojects: "Mobile design",
    rowstart: "2 Sep, 2020",
    rowlinetwo: "10 Sep, 2020",
    rowbudget: "$1,200",
  },
];

export default function ProfilePage() {
  const [searchBarValue24, setSearchBarValue24] = React.useState("");
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("rowno", {
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
        meta: { width: "115px" },
      }),
      table2ColumnHelper.accessor("rowprojects", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 font-medium mt-[39px] text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-px py-px">
            <Text className="!text-bluegray-400 font-normal mt-[5px] text-base">
              Projects
            </Text>
          </div>
        ),
        meta: { width: "193px" },
      }),
      table2ColumnHelper.accessor("rowstart", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 font-medium mt-[39px] text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-[3px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Start
            </Text>
          </div>
        ),
        meta: { width: "136px" },
      }),
      table2ColumnHelper.accessor("rowlinetwo", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 font-medium mt-[39px] text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-[3px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Deadline
            </Text>
          </div>
        ),
        meta: { width: "143px" },
      }),
      table2ColumnHelper.accessor("rowbudget", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 font-medium mt-[38px] text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-[5px] pt-[5px]">
            <Text className="!text-bluegray-400 font-normal text-base">
              Budget
            </Text>
          </div>
        ),
        meta: { width: "110px" },
      }),
    ];
  }, []);

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
            <div className="flex flex-col items-start justify-start mb-[507px] w-[87%]">
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
        <div className="bg-indigo-51 h-[1038px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue24}
                onChange={(e) => setSearchBarValue24(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue24?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue24("")}
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
            <div className="flex flex-row items-end justify-between mb-px mt-3.5 w-full">
              <div className="flex flex-col items-start justify-start w-[33%]">
                <Text className="!font-poppins !text-bluegray-900 font-medium text-xl">
                  Profile
                </Text>
                <div className="bg-white-A700 flex flex-col items-center justify-start mt-[37px] pb-9 rounded shadow-sm w-full">
                  <div className="flex flex-col h-[196px] relative w-full">
                    <Img
                      src="images/img_imglibimg15.png"
                      alt="ImgLibIMGFifteen"
                      className="h-[136px] m-auto object-cover w-full"
                    />
                    <Img
                      src="images/img_sherlocktoyfacelow.png"
                      alt="SherlockToyFacelow One"
                      className="h-[120px] m-auto object-cover rounded-[24px] w-[120px] z-[1]"
                    />
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start mt-6 w-[72%]">
                    <div className="flex flex-col gap-[13px] items-center justify-start pt-1 px-1 w-full">
                      <Text className="!text-bluegray-900 font-bold text-2xl">
                        Sam Brown
                      </Text>
                      <Text className="!text-bluegray-400 font-normal text-sm">
                        sambrown@gmail.com
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center pr-px py-px w-1/2">
                      <Img
                        src="images/img_group_3.svg"
                        alt="globe"
                        className="h-5 w-5"
                      />
                      <Text className="!text-bluegray-800 font-medium ml-[5px] mr-0.5 text-sm">
                        sambrown.com
                      </Text>
                    </div>
                  </div>
                  <Button className="bg-red-600 font-bold h-12 min-w-[147px] mt-10 pl-8 pr-[35px] rounded-[24px] text-sm text-white-A700">
                    Logout
                  </Button>
                  <Img
                    src="images/img_socialicons.svg"
                    alt="socialicons"
                    className="h-5 mt-6"
                  />
                  <div className="bg-indigo-51 h-px mt-8 w-[83%]" />
                  <Text className="!text-bluegray-400 font-normal mt-[34px] text-sm">
                    Member since 2021
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end mt-[21px] p-6 rounded shadow-xl w-full">
                  <div className="flex flex-col gap-7 items-center justify-start mt-2 w-[96%]">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text className="!text-bluegray-900 font-bold text-lg">
                        Personal info.
                      </Text>
                      <Img
                        src="images/img_morehorizontal.svg"
                        alt="morehorizontal"
                        className="h-8 w-8"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-row justify-between pl-[3px] py-[3px] w-full">
                        <Text className="!text-bluegray-400 font-normal my-px text-base">
                          Full name
                        </Text>
                        <Text className="!text-bluegray-800 font-medium my-px text-base">
                          Avori
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between pl-px py-px w-full">
                        <Text className="!text-bluegray-400 font-normal mb-0.5 mt-[3px] text-base">
                          Mobile
                        </Text>
                        <Text className="!text-bluegray-800 font-medium mb-0.5 mt-[3px] text-base">
                          701-565-0439
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[63px] items-center justify-start pl-0.5 pt-0.5 w-full">
                        <Text className="!text-bluegray-400 font-normal text-base">
                          E-mail
                        </Text>
                        <Text className="!text-bluegray-800 font-medium mt-[3px] text-base">
                          ackermanlhn@gmail.com
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-between pl-px pt-px w-full">
                        <Text className="!text-bluegray-400 font-normal text-base">
                          Location
                        </Text>
                        <Text className="!text-bluegray-800 font-medium mt-1 text-base">
                          Hanoi, Vietnam
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[21px] items-center justify-start mt-[57px] w-[67%]">
                <div className="flex flex-row gap-[18px] w-full">
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-xl w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row items-center justify-between w-[62%]">
                        <Button className="bg-gray-51 h-12 my-[5px] rounded w-12">
                          <Img src="images/img_buttonprimary_6.svg" />
                        </Button>
                        <div className="flex flex-col gap-3.5 items-start justify-end pr-1 py-1">
                          <Text className="!text-bluegray-800 font-normal mt-px text-sm">
                            Completed tasks
                          </Text>
                          <Text className="!text-bluegray-800 font-bold text-lg">
                            125
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_morehorizontal.svg"
                        alt="morehorizontal One"
                        className="h-8 w-8"
                      />
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-xl w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-row items-center justify-between w-[62%]">
                        <Button className="bg-gray-51 h-12 my-[5px] rounded w-12">
                          <Img src="images/img_buttonprimary_6.svg" />
                        </Button>
                        <div className="flex flex-col gap-[18px] items-start justify-start pr-1 pt-1">
                          <Text className="!text-bluegray-800 font-normal text-sm">
                            Total revenue
                          </Text>
                          <Text className="!text-bluegray-800 font-bold text-lg">
                            $10,000
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_morehorizontal.svg"
                        alt="morehorizontal Two"
                        className="h-8 w-8"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-[29px] rounded shadow-xl w-full">
                  <div className="flex flex-col gap-[31px] items-center justify-start mt-[3px] w-full">
                    <div className="flex flex-row items-end justify-start w-full">
                      <Text className="!text-bluegray-900 font-bold mb-1 mt-1.5 text-lg">
                        My projects
                      </Text>
                      <Img
                        src="images/img_search_bluegray_400.svg"
                        alt="search"
                        className="h-8 ml-[505px] w-8"
                      />
                      <Img
                        src="images/img_morehorizontal.svg"
                        alt="morehorizontal Three"
                        className="h-8 ml-6 w-8"
                      />
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <ReactTable
                        size="md"
                        bodyProps={{ className: "" }}
                        headerProps={{ className: "" }}
                        rowDataProps={{ className: "" }}
                        className="w-[697px]"
                        columns={table2Columns}
                        data={table2Data}
                      />
                      <div className="h-6 w-6" />
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
