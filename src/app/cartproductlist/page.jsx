"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Img, Text, Input, Button, CheckBox } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { Sidebar } from "react-pro-sidebar";

const table4Data = [
  { rowprice: "Polo Shirt", rowquantity: "$120.0", rowtotal: "1" },
  { rowprice: "Basic T- Shirt", rowquantity: "$120.0", rowtotal: "1" },
  { rowprice: "Trendy Polo", rowquantity: "$120.0", rowtotal: "1" },
  { rowprice: "Over Shirt", rowquantity: "$120.0", rowtotal: "1" },
  { rowprice: "Avo T-Shirt", rowquantity: "$120.0", rowtotal: "1" },
  { rowprice: "Bomber", rowquantity: "$120.0", rowtotal: "1" },
];

export default function CartProductListPage() {
  const [searchBarValue73, setSearchBarValue73] = React.useState("");
  const table4Columns = React.useMemo(() => {
    const table4ColumnHelper = createColumnHelper();
    return [
      table4ColumnHelper.accessor("rowproduct", {
        cell: (info) => (
          <CheckBox
            name="vector One"
            label=""
            className="ml-[13px] mt-[34px]"
          />
        ),
        header: (info) => (
          <div className="flex flex-row justify-center pl-[3px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Product
            </Text>
          </div>
        ),
        meta: { width: "132px" },
      }),
      table4ColumnHelper.accessor("rowprice", {
        cell: (info) => (
          <div className="flex flex-row gap-6 items-start justify-center ml-[33px]">
            <Img
              src="images/img_rectangle_118X110.png"
              alt="Rectangle"
              className="object-cover w-[35%]"
            />
            <div className="flex flex-col gap-[19px] items-start justify-start pr-[5px] pt-[5px]">
              <Text className="!text-bluegray-900 font-bold text-lg">
                {info?.getValue()}
              </Text>
              <Text className="!text-bluegray-400 font-normal text-sm">
                Color: Grey, S
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center ml-[201px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Price
            </Text>
          </div>
        ),
        meta: { width: "39px" },
      }),
      table4ColumnHelper.accessor("rowquantity", {
        cell: (info) => (
          <Text className="!text-bluegray-800 font-semibold ml-[30px] mt-[3px] text-sm">
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center ml-[74px] py-px">
            <Text className="!text-bluegray-400 font-normal mt-[5px] text-base">
              Quantity
            </Text>
          </div>
        ),
        meta: { width: "65px" },
      }),
      table4ColumnHelper.accessor("rowtotal", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center ml-[66px]">
            <div className="border border-indigo-51 border-solid h-8 w-8" />
            <Text className="!text-bluegray-900 font-medium ml-5 text-sm">
              {info?.getValue()}
            </Text>
            <div className="border border-indigo-51 border-solid h-8 ml-[21px] p-[9px] relative w-8">
              <Img
                src="images/img_vector.svg"
                alt="Vector Two"
                className="absolute h-[13px] m-auto w-[13px]"
              />
            </div>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-center ml-24 pr-[3px] py-[3px]">
            <Text className="!text-bluegray-400 font-normal mt-px text-base">
              Total
            </Text>
          </div>
        ),
        meta: { width: "90px" },
      }),
    ];
  }, []);

  return (
    <div className="bg-white-A700 flex flex-row w-full">
      <Sidebar className="!sticky !w-[243px] h-screen overflow-auto top-0">
        <div className="bg-white-A700 flex flex-col gap-9 items-center justify-start p-[29px] w-full">
          <Img src="images/img_logo.svg" alt="Logo" className="h-7 mt-[7px]" />
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
      <div className="h-[1071px] relative w-[84%]">
        <div className="absolute bg-gray-51 bottom-[0%] flex flex-col items-center justify-end left-0 m-auto p-6 right-0 w-full">
          <div className="flex flex-col gap-[35px] items-center justify-start mt-3.5 w-full">
            <div className="flex flex-row items-start justify-between w-full">
              <Text className="!font-poppins !text-bluegray-900 font-medium mb-0.5 text-xl">
                Cart
              </Text>
              <Text className="!text-bluegray-400 font-normal mt-[3px] text-base">
                Ecommerce/ Cart
              </Text>
            </div>
            <div className="flex flex-row items-start justify-between w-full">
              <div className="bg-white-A700 flex flex-col gap-10 items-start justify-end p-6 rounded shadow-sm w-[67%]">
                <Text className="!text-bluegray-900 font-bold ml-2 mt-[13px] text-lg">
                  Product List
                </Text>
                <ReactTable
                  size="lg"
                  variant="simple"
                  bodyProps={{ className: "" }}
                  headerProps={{ className: "" }}
                  rowDataProps={{ className: "bg-white-A700" }}
                  className="border-separate border-spacing-[24px] ml-2 w-[697px]"
                  columns={table4Columns}
                  data={table4Data}
                />
              </div>
              <div className="flex flex-col gap-5 items-center justify-start w-[33%]">
                <div className="bg-white-A700 flex flex-col gap-6 items-center justify-end p-8 rounded shadow-sm w-full">
                  <div className="flex flex-col gap-3 items-start justify-start mt-[3px] w-full">
                    <Text className="!text-bluegray-800 font-medium text-sm">
                      Promotion
                    </Text>
                    <Input
                      name="Group2329"
                      placeholder="Enter code"
                      className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-3 rounded text-base text-bluegray-400 w-full"
                    />
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-center pr-px py-px w-[70%]">
                    <Img
                      src="images/img_tag.svg"
                      alt="tag"
                      className="h-5 w-5"
                    />
                    <Text className="!text-indigo-400 font-medium mr-[27px] text-sm">
                      Click to find Promotion
                    </Text>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-8 rounded shadow-sm w-full">
                  <div className="flex flex-col items-center justify-start mt-1 w-full">
                    <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text className="!text-bluegray-400 font-normal text-base">
                          Price
                        </Text>
                        <Text className="!text-bluegray-800 font-medium mt-px text-base">
                          $120.0
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-between w-full">
                        <Text className="!text-bluegray-400 font-normal mt-px text-base">
                          Shipping fee
                        </Text>
                        <Text className="!text-bluegray-800 font-medium h-[19px] text-base">
                          $0
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-between mt-16 pl-px pt-px w-full">
                      <Text className="!text-bluegray-400 font-normal mt-[3px] text-base">
                        Total
                      </Text>
                      <Text className="!text-bluegray-800 font-bold mt-1 text-lg">
                        $120.0
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
              </div>
            </div>
          </div>
        </div>
        <header className="absolute bg-white-A700 flex items-center justify-center left-0 m-auto right-0 top-[0%] w-full">
          <div className="flex flex-row items-center justify-center w-[96%]">
            <Text className="!text-bluegray-800 font-medium text-sm">
              Welcomback, Team!
            </Text>
            <Input
              name="SearchBox"
              placeholder="Search..."
              value={searchBarValue73}
              onChange={(e) => setSearchBarValue73(e)}
              prefix={
                <Img
                  src="images/img_search.svg"
                  alt="search"
                  className="cursor-pointer mr-2 cursor-pointer mr-2"
                />
              }
              suffix={
                searchBarValue73?.length > 0 ? (
                  <CloseSVG
                    onClick={() => setSearchBarValue73("")}
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
        <div className="absolute bg-indigo-51 bottom-0 h-[1071px] left-[0%] m-auto top-0 w-px" />
      </div>
    </div>
  );
}
