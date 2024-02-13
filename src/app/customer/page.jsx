"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Img, Button, CheckBox, Input } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Sidebar } from "react-pro-sidebar";

const table3Data = [
  {
    rowcustomertwo: "Jack",
    rowaddress: "2371 Reppert Coal Road",
    rowphone: "601-540-6298",
    roworderno: "#12931",
    rowstatus: "Paid",
  },
  {
    rowcustomertwo: "Fort Myers",
    rowaddress: "927 Sunburst Drive",
    rowphone: "239-346-5244",
    roworderno: "#12932",
    rowstatus: "Paid",
  },
  {
    rowcustomertwo: "Benjamin",
    rowaddress: "1671 Carriage Court",
    rowphone: "760-390-1331",
    roworderno: "#12933",
    rowstatus: "Paid",
  },
  {
    rowcustomertwo: "Flanagan",
    rowaddress: "121 Courtright Street",
    rowphone: "701-565-0439",
    roworderno: "#12934",
    rowstatus: "Error",
  },
  {
    rowcustomertwo: "Nicoletti",
    rowaddress: "1060 Stark Hollow Road",
    rowphone: " 970-757-0036",
    roworderno: "#12935",
    rowstatus: "Paid",
  },
  {
    rowcustomertwo: "Robert",
    rowaddress: "424 Charter Street",
    rowphone: "913-207-2627",
    roworderno: "#12936",
    rowstatus: "Paid",
  },
  {
    rowcustomertwo: "Rankin",
    rowaddress: "60 Corpening Drive",
    rowphone: "248-930-4978",
    roworderno: "#12937",
    rowstatus: "Pending",
  },
  {
    rowcustomertwo: "Clementine",
    rowaddress: "4337 Fleming Way",
    rowphone: "757-735-4769",
    roworderno: "#12938",
    rowstatus: "Paid",
  },
  {
    rowcustomertwo: "Mitchell",
    rowaddress: "2758 My Drive",
    rowphone: "631-827-7596",
    roworderno: "#12939",
    rowstatus: "Paid",
  },
];

export default function CustomerPage() {
  const [searchBarValue25, setSearchBarValue25] = React.useState("");
  const table3Columns = React.useMemo(() => {
    const table3ColumnHelper = createColumnHelper();
    return [
      table3ColumnHelper.accessor("rowcustomertwo", {
        cell: (info) => (
          <div className="flex flex-row gap-[57px] items-start justify-start">
            <CheckBox name="vectorstroke" label="" className="ml-[18px] mt-9" />
            <div className="flex flex-row gap-3 items-center justify-center mt-8 pr-[3px] w-[29%]">
              <Img
                src="images/img_robototoyfacefinal2.png"
                alt="RobotoToyFaceFinalTwo"
                className="h-6 rounded-[50%] w-6"
              />
              <Text className="!text-bluegray-800 font-medium text-base">
                {info?.getValue()}
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center p-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Customer
            </Text>
          </div>
        ),
        meta: { width: "273px" },
      }),
      table3ColumnHelper.accessor("rowaddress", {
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
              Address
            </Text>
          </div>
        ),
        meta: { width: "260px" },
      }),
      table3ColumnHelper.accessor("rowphone", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-indigo-400 font-medium mt-8 text-base">
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-[3px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Phone
            </Text>
          </div>
        ),
        meta: { width: "203px" },
      }),
      table3ColumnHelper.accessor("roworderno", {
        cell: (info) => (
          <div className="flex flex-row justify-center">
            <Text className="!text-bluegray-800 font-medium mt-8 text-base">
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
        meta: { width: "154px" },
      }),
      table3ColumnHelper.accessor("rowstatus", {
        cell: (info) => (
          <div className="flex flex-row items-start justify-between">
            <Button className="bg-green-700 font-medium h-[30px] min-w-[93px] mt-8 pl-[31px] pr-[33px] rounded text-sm text-white-A700">
              {info?.getValue()}
            </Button>
            <Img
              src="images/img_morehorizontal.svg"
              alt="morevertical"
              className="h-6 mr-[19px] mt-[35px] w-6"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pr-[3px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Status
            </Text>
          </div>
        ),
        meta: { width: "196px" },
      }),
    ];
  }, []);

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
        <div className="bg-white-A700 flex flex-row items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[242px] h-screen overflow-auto top-0">
            <div className="bg-white-A700 flex flex-col gap-9 items-center justify-start p-7 w-full">
              <Img src="images/img_logo.svg" alt="Logo" className="h-7 mt-2" />
              <div className="flex flex-col items-start justify-start mb-[460px] w-[86%]">
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
                    src="images/img_icon_14.svg"
                    alt="Icon One"
                    className="h-5 w-5"
                  />
                  <Text className="!text-bluegray-800 font-medium text-sm">
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
          <div className="bg-indigo-51 h-[750px] mb-60 w-px" />
          <div className="flex flex-col items-center justify-start w-[84%]">
            <header className="bg-white-A700 flex items-center justify-center w-full">
              <div className="flex flex-row items-center justify-center ml-6 mr-[23px] my-2.5 w-[97%]">
                <Text className="!text-bluegray-800 font-medium text-sm">
                  Welcomback, Team!
                </Text>
                <Input
                  name="SearchBox"
                  placeholder="Search..."
                  value={searchBarValue25}
                  onChange={(e) => setSearchBarValue25(e)}
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      alt="search"
                      className="cursor-pointer mr-2 cursor-pointer mr-2"
                    />
                  }
                  suffix={
                    searchBarValue25?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue25("")}
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
            <div className="bg-gray-51 flex flex-col gap-[37px] items-start justify-end p-[23px] w-full">
              <Text className="!font-poppins !text-bluegray-900 font-medium mt-[15px] text-xl">
                Customer
              </Text>
              <div className="bg-white-A700 flex flex-col items-center justify-start mb-px p-8 rounded shadow-sm w-full">
                <div className="flex flex-col items-center justify-start mb-[3px] w-full">
                  <div className="flex flex-row items-end justify-start w-full">
                    <Text className="!text-bluegray-900 font-bold mb-px mt-[5px] text-lg">
                      Customer List
                    </Text>
                    <Img
                      src="images/img_search_bluegray_900.svg"
                      alt="search"
                      className="h-6 ml-[891px] w-6"
                    />
                    <Img
                      src="images/img_plus_1.svg"
                      alt="plus"
                      className="h-6 ml-6 w-6"
                    />
                  </div>
                  <ReactTable
                    size="sm"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "" }}
                    rowDataProps={{ className: "" }}
                    className="mt-[39px] w-[1087px]"
                    columns={table3Columns}
                    data={table3Data}
                  />
                  <div className="flex flex-row items-center justify-start mt-8 w-full">
                    <div className="border border-indigo-51 border-solid h-8 w-8" />
                    <Button className="border border-bluegray-900 border-solid font-medium h-8 min-w-[32px] ml-2 pl-[11px] pr-3 text-bluegray-900 text-sm">
                      1
                    </Button>
                    <Button className="border border-indigo-51 border-solid font-medium h-8 min-w-[32px] ml-2 px-2.5 text-bluegray-800 text-sm">
                      2
                    </Button>
                    <Button className="border border-indigo-51 border-solid font-medium h-8 min-w-[32px] ml-2 px-[9px] text-bluegray-800 text-sm">
                      ...
                    </Button>
                    <Button className="border border-indigo-51 border-solid font-medium h-8 min-w-[32px] ml-2 px-2.5 text-bluegray-800 text-sm">
                      9
                    </Button>
                    <div className="border border-indigo-51 border-solid h-8 ml-2 p-2.5 relative w-8">
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        alt="arrowright"
                        className="absolute h-[11px] m-auto"
                      />
                    </div>
                    <Text className="!text-bluegray-400 font-medium ml-[764px] text-sm">
                      9 of 200 data
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
