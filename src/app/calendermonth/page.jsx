"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Radio, Button, Img, RadioGroup, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Sidebar } from "react-pro-sidebar";

const table1Data = [
  {
    rowframeseven: "9",
    rowframeeight: "10",
    rowframenine: "11",
    rowframeten: "12",
    rowframeeleven: "13",
    rowframetwelve: "14",
    rowframethirteen: "15",
  },
  {
    rowframeseven: "23",
    rowframeeight: "24",
    rowframenine: "25",
    rowframeten: "26",
    rowframeeleven: "27",
    rowframetwelve: "28",
    rowframethirteen: "29",
  },
];

export default function CalenderMonthPage() {
  const [searchBarValue19, setSearchBarValue19] = React.useState("");
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowframeseven", {
        cell: (info) => (
          <div className="flex flex-row justify-evenly">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-[17px] pt-4 text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-evenly">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              2
            </Text>
          </div>
        ),
        meta: { width: "114px" },
      }),
      table1ColumnHelper.accessor("rowframeeight", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              3
            </Text>
          </div>
        ),
        meta: { width: "114px" },
      }),
      table1ColumnHelper.accessor("rowframenine", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-[17px] pt-4 text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              4
            </Text>
          </div>
        ),
        meta: { width: "114px" },
      }),
      table1ColumnHelper.accessor("rowframeten", {
        cell: (info) => (
          <div className="border border-indigo-51 border-solid flex flex-col gap-5 justify-start">
            <Text className="!text-bluegray-800 font-normal h-[18px] ml-[76px] mt-3 text-base">
              {info?.getValue()}
            </Text>
            <div className="bg-indigo-400 flex flex-row gap-[9px] justify-center mb-[62px] p-1 rounded w-full">
              <Radio
                value="am"
                name="profileviewsthirteen"
                label="8:10 am"
                className="bg-white-A700 font-medium mb-1.5 ml-3 pl-2 text-white-A700"
              />
              <Text className="!text-white-A700 font-semibold mb-1.5 mr-0.5 text-sm">
                Mêt
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              5
            </Text>
          </div>
        ),
        meta: { width: "114px" },
      }),
      table1ColumnHelper.accessor("rowframeeleven", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              6
            </Text>
          </div>
        ),
        meta: { width: "114px" },
      }),
      table1ColumnHelper.accessor("rowframetwelve", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              7
            </Text>
          </div>
        ),
        meta: { width: "115px" },
      }),
      table1ColumnHelper.accessor("rowframethirteen", {
        cell: (info) => (
          <div className="flex flex-row justify-evenly">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-evenly">
            <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
              8
            </Text>
          </div>
        ),
        meta: { width: "115px" },
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
                  src="images/img_icon_13.svg"
                  alt="Icon Four"
                  className="h-5 w-5"
                />
                <Text className="!text-bluegray-800 font-medium mt-[3px] text-sm">
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
                value={searchBarValue19}
                onChange={(e) => setSearchBarValue19(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue19?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue19("")}
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
            <div className="flex flex-col gap-[38px] items-start justify-start mb-px mt-3.5 w-full">
              <Text className="!font-poppins !text-bluegray-900 font-medium text-xl">
                Calendar
              </Text>
              <div className="flex flex-row justify-between w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-[24%]">
                  <div className="flex flex-col items-start justify-start mb-2 w-full">
                    <div className="flex flex-col gap-6 items-center justify-start">
                      <Text className="!text-bluegray-400 font-normal leading-[22px] text-sm">
                        Click in the calendar to create event
                      </Text>
                      <Button
                        rightIcon={
                          <Img
                            src="images/img_plus.svg"
                            alt="plus"
                            className="ml-[5px] ml-[5px]"
                          />
                        }
                        className="bg-deep_orange-300 font-semibold h-12 pl-[33px] rounded-[24px] text-sm text-white-A700 w-full"
                      >
                        Create new event
                      </Button>
                    </div>
                    <RadioGroup
                      name="radiogroupprofileviewsone"
                      className="flex flex-col mt-8"
                    >
                      <Radio
                        value="newevent"
                        label="New Event"
                        className="font-medium mr-[30px] pl-2 text-bluegray-800"
                      />
                      <Radio
                        value="myeventonly"
                        label="My Event Only"
                        className="bg-indigo-400 font-medium mr-0.5 mt-[25px] pl-2 text-bluegray-800 w-2"
                      />
                      <Radio
                        value="meeting"
                        label="Meeting"
                        className="bg-amber-300 font-medium mr-[50px] mt-5 pl-2 text-bluegray-800 w-2"
                      />
                      <Radio
                        value="error"
                        label="Error"
                        className="bg-red-600 font-medium mb-[5px] mr-[75px] mt-5 pl-2 text-bluegray-800"
                      />
                    </RadioGroup>
                    <div className="bg-indigo-51 h-px mt-8 w-full" />
                    <Text className="!text-bluegray-400 font-normal mt-[31px] text-sm">
                      Team members
                    </Text>
                    <div className="flex flex-col mt-[38px] w-full">
                      <div className="flex flex-row items-start justify-start w-full">
                        <Text className="!text-bluegray-800 font-bold text-lg">
                          🚗
                        </Text>
                        <Text className="!text-bluegray-900 font-medium ml-2 mt-0.5 text-base">
                          @Avo
                        </Text>
                        <Button className="bg-gray-104 font-medium h-7 min-w-[102px] ml-9 px-4 rounded text-indigo-400 text-xs">
                          Lead design
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text className="!text-bluegray-800 font-bold text-lg">
                          ⚽
                        </Text>
                        <Text className="!text-bluegray-900 font-medium mt-0.5 text-base">
                          @Nhun
                        </Text>
                        <Button className="bg-gray-104 font-medium h-7 min-w-[102px] pl-2 pr-[7px] rounded text-indigo-400 text-xs">
                          Product design
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <Text className="!text-bluegray-800 font-bold text-lg">
                          👑
                        </Text>
                        <Text className="!text-bluegray-900 font-medium ml-2 mt-0.5 text-base">
                          @Riri
                        </Text>
                        <Button className="bg-gray-104 font-medium h-7 min-w-[102px] ml-10 pl-2 pr-[7px] rounded text-indigo-400 text-xs">
                          Product design
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <Text className="!text-bluegray-800 font-bold text-lg">
                          ✈
                        </Text>
                        <Text className="!text-bluegray-900 font-medium ml-2 mt-0.5 text-base">
                          @Juki
                        </Text>
                        <Button className="bg-gray-104 font-medium h-7 min-w-[102px] ml-[34px] pl-2 pr-[7px] rounded text-indigo-400 text-xs">
                          Product design
                        </Button>
                      </div>
                      <div className="flex flex-row items-start justify-start w-full">
                        <Text className="!text-bluegray-800 font-bold text-lg">
                          💣
                        </Text>
                        <Text className="!text-bluegray-900 font-medium ml-2 mt-0.5 text-base">
                          @Nobi
                        </Text>
                        <Button className="bg-gray-104 font-medium h-7 min-w-[102px] ml-[29px] pl-2 pr-[7px] rounded text-indigo-400 text-xs">
                          Product design
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start mt-8">
                      <Img
                        src="images/img_plus_24X24.svg"
                        alt="plus One"
                        className="h-6 w-6"
                      />
                      <Text className="!text-deep_orange-300 font-normal text-base">
                        Add member
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-start p-[26px] rounded shadow-sm w-3/4">
                  <div className="flex flex-col gap-[30px] items-center justify-start w-[99%]">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row items-end justify-between w-[38%]">
                        <Text className="!text-bluegray-900 font-bold mb-0.5 mt-3 text-2xl">
                          January 2022
                        </Text>
                        <div className="flex flex-row gap-4 justify-between w-auto">
                          <Button className="bg-gray-51 h-10 rounded-[50%] w-10">
                            <Img src="images/img_buttonprimary_5.svg" />
                          </Button>
                          <Button className="bg-gray-51 h-10 rounded-[50%] w-10">
                            <Img src="images/img_arrowright.svg" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 justify-between w-auto">
                        <Button className="border border-indigo-51 border-solid font-semibold h-10 min-w-[75px] px-[23px] rounded-[20px] text-bluegray-800 text-sm">
                          Day
                        </Button>
                        <Button className="border border-indigo-51 border-solid font-semibold h-10 min-w-[75px] px-[17px] rounded-[20px] text-bluegray-800 text-sm">
                          Week
                        </Button>
                        <Button className="bg-bluegray-900 font-semibold h-10 min-w-[75px] px-[15px] rounded-[20px] text-sm text-white-A700">
                          Month
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row justify-start w-full">
                        <Button className="border border-indigo-51 border-solid font-semibold h-12 min-w-[114px] px-[34px] text-base text-bluegray-800">
                          Sun
                        </Button>
                        <Button className="border border-indigo-51 border-solid font-semibold h-12 min-w-[114px] px-[34px] text-base text-bluegray-800">
                          Mon
                        </Button>
                        <Button className="border border-indigo-51 border-solid font-semibold h-12 min-w-[114px] px-[34px] text-base text-bluegray-800">
                          Tue
                        </Button>
                        <Button className="border border-indigo-51 border-solid font-semibold h-12 min-w-[114px] px-[34px] text-base text-bluegray-800">
                          Wed
                        </Button>
                        <Button className="border border-indigo-51 border-solid font-semibold h-12 min-w-[114px] px-[34px] text-base text-bluegray-800">
                          Thu
                        </Button>
                        <Button className="border border-indigo-51 border-solid font-semibold h-12 min-w-[115px] px-[34px] text-base text-bluegray-800">
                          Fri
                        </Button>
                        <Button className="border border-indigo-51 border-solid font-semibold h-12 min-w-[115px] px-[34px] text-base text-bluegray-800">
                          Sa
                        </Button>
                      </div>
                      <div className="flex flex-row justify-start w-full">
                        <Text className="!text-bluegray-400 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-[17px] pt-4 text-base">
                          26
                        </Text>
                        <Text className="!text-bluegray-400 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
                          27
                        </Text>
                        <Text className="!text-bluegray-400 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
                          28
                        </Text>
                        <Text className="!text-bluegray-400 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
                          29
                        </Text>
                        <Text className="!text-bluegray-400 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-4 pt-4 text-base">
                          30
                        </Text>
                        <Text className="!text-bluegray-400 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-[17px] pt-4 text-base">
                          31
                        </Text>
                        <Text className="!text-bluegray-800 border border-indigo-51 border-solid font-normal pb-[35px] pl-[35px] pr-[17px] pt-4 text-base">
                          1
                        </Text>
                      </div>
                      <ReactTable
                        size="xs"
                        bodyProps={{ className: "" }}
                        headerProps={{ className: "" }}
                        rowDataProps={{ className: "" }}
                        className="w-[794px]"
                        columns={table1Columns}
                        data={table1Data}
                      />
                      <div className="flex flex-row justify-end px-[114px] w-full">
                        <div className="border border-indigo-51 border-solid flex flex-col items-center justify-end p-1 w-[21%]">
                          <div className="bg-deep_orange-300 h-[30px] mb-3 mt-[50px] rounded w-full" />
                        </div>
                        <div className="border border-indigo-51 border-solid flex flex-col items-center justify-end p-1 w-[21%]">
                          <div className="bg-red-600 h-[30px] mb-3 mt-[50px] rounded w-full" />
                        </div>
                      </div>
                      <div className="h-[100px] mt-[100px] w-full" />
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
