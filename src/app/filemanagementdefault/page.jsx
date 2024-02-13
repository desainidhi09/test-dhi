"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Text, Img, Radio, Button, Input } from "../../components";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Sidebar } from "react-pro-sidebar";

export default function FileManagementDefaultPage() {
  const [searchBarValue26, setSearchBarValue26] = React.useState("");

  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="flex flex-row justify-evenly w-full">
        <Sidebar className="!sticky !w-[243px] h-screen overflow-auto top-0">
          <div className="bg-white-A700 flex flex-col gap-[37px] items-center justify-start p-[29px] w-full">
            <Img
              src="images/img_logo.svg"
              alt="Logo"
              className="h-7 mt-[7px]"
            />
            <div className="flex flex-col items-start justify-start mb-[419px] w-[87%]">
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px]">
                <Img
                  src="images/img_icon_12.svg"
                  alt="Icon"
                  className="h-5 w-5"
                />
                <Text className="!font-poppins !text-bluegray-400 font-normal text-sm">
                  Dashboard
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px] mt-[34px]">
                <Img
                  src="images/img_icon_4.svg"
                  alt="Icon One"
                  className="h-5 w-5"
                />
                <Text className="!font-poppins !text-bluegray-400 font-normal text-sm">
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
                  <Text className="!font-poppins !text-bluegray-400 font-normal mt-1.5 text-sm">
                    Message
                  </Text>
                </div>
                <Text className="!font-poppins !text-white-A700 bg-red-600 flex font-bold h-6 items-center justify-center rounded-[50%] text-center text-xs w-6">
                  3
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px] mt-[31px] pr-px py-px">
                <Img
                  src="images/img_icon_15.svg"
                  alt="Icon Three"
                  className="h-5 w-5"
                />
                <Text className="!font-poppins !text-bluegray-800 font-normal text-sm">
                  File
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-start justify-start ml-[3px] mt-8">
                <Img
                  src="images/img_icon_7.svg"
                  alt="Icon Four"
                  className="h-5 w-5"
                />
                <Text className="!font-poppins !text-bluegray-400 font-normal mt-[3px] text-sm">
                  Calender
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-end justify-start ml-[3px] mt-[34px]">
                <Img
                  src="images/img_icon_8.svg"
                  alt="Icon Five"
                  className="h-5 mb-0.5 w-5"
                />
                <Text className="!font-poppins !text-bluegray-400 font-normal mt-[5px] text-sm">
                  Shop
                </Text>
              </div>
              <div className="flex flex-row gap-4 items-center justify-start ml-[3px] mt-[33px]">
                <Img
                  src="images/img_icon_9.svg"
                  alt="Icon Six"
                  className="h-5 w-5"
                />
                <Text className="!font-poppins !text-bluegray-400 font-normal text-sm">
                  Cart
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-end justify-start mt-[31px] w-[61%]">
                <div className="bg-white-A700 flex flex-col h-[26px] items-center justify-start p-[3px] w-[26px]">
                  <div className="bg-bluegray-400 h-5 rounded-[50%] w-5" />
                </div>
                <Text className="!font-poppins !text-bluegray-400 font-normal mb-0.5 mt-[7px] text-sm">
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
                value={searchBarValue26}
                onChange={(e) => setSearchBarValue26(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue26?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue26("")}
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
            <div className="flex flex-row items-end justify-between mb-px mt-4 w-full">
              <div className="flex flex-col gap-5 items-center justify-start w-[24%]">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Text className="!font-poppins !text-bluegray-900 font-medium text-xl">
                    File Management
                  </Text>
                  <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-sm w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <Accordion
                        preExpanded={[0]}
                        className="flex flex-col gap-6 w-full"
                      >
                        {[...Array(3)].map((_, i) => (
                          <AccordionItem
                            uuid={i}
                            key={`expandablelistline one${i}`}
                          >
                            <div className="flex flex-col gap-[21px] justify-start w-full">
                              <AccordionItemHeading className="w-full">
                                <AccordionItemButton>
                                  <AccordionItemState>
                                    {(props) => (
                                      <>
                                        <div className="flex flex-row justify-between w-full">
                                          <div className="flex flex-row gap-[13px] items-center justify-start">
                                            <Img
                                              src="images/img_line_24X24.svg"
                                              alt="Line One"
                                              className="h-6 w-6"
                                            />
                                            <Text className="!text-bluegray-900 font-medium text-base">
                                              Main File
                                            </Text>
                                          </div>
                                          {props?.expanded ? (
                                            <Img
                                              src="images/img_carretup.svg"
                                              alt="carretup"
                                              className="h-6 w-6"
                                            />
                                          ) : (
                                            <Img
                                              src="images/img_carretup.svg"
                                              alt="carretup One"
                                              className="h-6 w-6"
                                            />
                                          )}
                                        </div>
                                      </>
                                    )}
                                  </AccordionItemState>
                                </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <div className="flex flex-col items-start justify-start ml-9">
                                  <Text className="!font-poppins !text-bluegray-400 font-normal text-base">
                                    Product Design
                                  </Text>
                                  <Text className="!font-poppins !text-bluegray-400 font-normal mt-5 text-base">
                                    Outsource
                                  </Text>
                                  <Text className="!font-poppins !text-bluegray-400 font-normal mt-[25px] text-base">
                                    Graphics
                                  </Text>
                                  <Text className="!font-poppins !text-bluegray-400 font-normal mt-[22px] text-base">
                                    Empty states
                                  </Text>
                                </div>
                              </AccordionItemPanel>
                            </div>
                          </AccordionItem>
                        ))}
                      </Accordion>
                      <Button
                        rightIcon={
                          <Img
                            src="images/img_plus_24X24.svg"
                            alt="plus"
                            className="ml-[13px] ml-[13px]"
                          />
                        }
                        className="bg-red-54 font-bold font-poppins h-12 pl-[35px] rounded-[24px] text-deep_orange-300 text-sm w-full"
                      >
                        Add new folder
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col justify-start pr-4 py-4 rounded shadow-sm w-full">
                  <Img
                    src="images/img_x.svg"
                    alt="x"
                    className="h-6 ml-[233px] w-6"
                  />
                  <div className="flex flex-col h-48 mr-[7px] mt-px relative w-[98%]">
                    <div className="absolute h-[126px] m-auto w-[98%]">
                      <div className="m-auto overflow-x-auto w-full">
                        <div className="h-[69px] relative w-full">
                          <Img
                            src="images/img_shadow_69X288.png"
                            alt="shadow"
                            className="h-[69px] m-auto object-cover w-full"
                          />
                          <Img
                            src="images/img_shadow_69X288.png"
                            alt="shadow One"
                            className="absolute h-[47px] m-auto object-cover right-[18%] top-[0%] w-[53%]"
                          />
                        </div>
                      </div>
                      <div className="h-[81px] mb-[-25.14px] ml-auto mr-[58px] w-2/5 z-[1]">
                        <Img
                          src="images/img_base_81X97.png"
                          alt="base"
                          className="h-[81px] m-auto object-cover w-full"
                        />
                        <div className="absolute bg-[url(/images/img_group2747.png)] bg-cover bg-no-repeat bottom-0 h-[81px] justify-center left-0 m-auto right-0 top-0 w-full">
                          <div className="h-[65px] m-auto w-[90%]">
                            <Img
                              src="images/img_paper.png"
                              alt="paper"
                              className="h-[65px] m-auto object-cover w-full"
                            />
                            <Img
                              src="images/img_color_65X87.png"
                              alt="color"
                              className="absolute bottom-0 h-[65px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                            />
                          </div>
                          <div className="absolute bottom-0 h-[81px] justify-center left-0 m-auto right-0 top-0 w-full">
                            <Img
                              src="images/img_specular_81X97.png"
                              alt="specular"
                              className="h-[81px] m-auto object-cover w-full"
                            />
                            <div className="absolute bottom-0 h-[81px] justify-center left-0 m-auto right-0 top-0 w-full">
                              <Img
                                src="images/img_specular_81X97.png"
                                alt="specular One"
                                className="h-[81px] m-auto object-cover w-full"
                              />
                              <Img
                                src="images/img_specular_81X97.png"
                                alt="specular Two"
                                className="absolute bottom-0 h-[81px] justify-center left-0 m-auto object-cover right-0 top-0 w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-2 items-center justify-start ml-auto mt-auto w-[91%]">
                      <Text className="!text-bluegray-800 font-bold text-base">
                        Upgrade Features
                      </Text>
                      <Text className="!text-bluegray-800 font-normal leading-[22px] text-center text-sm">
                        Upgrade account to access multiple features
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2.5 items-end justify-center mb-4 ml-[75px] mt-11 w-1/2">
                    <Text className="!text-deep_orange-300 font-bold mb-0.5 mt-[5px] text-sm">
                      Upgrade now
                    </Text>
                    <Img
                      src="images/img_chevronsright.svg"
                      alt="chevronsright"
                      className="h-6 w-6"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-14 p-[26px] rounded shadow-sm w-1/2">
                <div className="flex flex-col gap-[35px] items-center justify-start mb-4 w-[98%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-start w-full">
                        <Text className="!text-bluegray-900 font-bold text-lg">
                          Main File
                        </Text>
                        <Button className="bg-gray-51 h-10 ml-[326px] rounded-[50%] w-10">
                          <Img src="images/img_search_bluegray_900.svg" />
                        </Button>
                        <Button className="bg-gray-51 h-10 ml-4 rounded-[50%] w-10">
                          <Img src="images/img_buttonprimary_7.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="gap-5 grid grid-cols-2 justify-center min-h-[auto] w-full">
                          <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-center justify-start p-5 rounded w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-row justify-between w-full">
                                <Img
                                  src="images/img_iconfileglyph.svg"
                                  alt="IconFileGlyph"
                                  className="h-6 w-6"
                                />
                                <Img
                                  src="images/img_morehorizontal.svg"
                                  alt="morehorizontal"
                                  className="h-6 w-6"
                                />
                              </div>
                              <div className="flex flex-row items-end justify-between w-full">
                                <div className="flex flex-col gap-2 items-start justify-start pr-1 py-1">
                                  <Text className="!text-bluegray-800 font-bold mt-px text-base">
                                    Product Design
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal mb-px text-sm">
                                    12 Files
                                  </Text>
                                </div>
                                <Text className="!text-bluegray-400 font-medium mb-1 mt-[31px] text-sm">
                                  3GB
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-center justify-start p-5 rounded w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-row justify-between w-full">
                                <Img
                                  src="images/img_iconfileglyph.svg"
                                  alt="IconFileGlyph One"
                                  className="h-6 w-6"
                                />
                                <Img
                                  src="images/img_morehorizontal.svg"
                                  alt="morehorizontal One"
                                  className="h-6 w-6"
                                />
                              </div>
                              <div className="flex flex-row items-end justify-between w-full">
                                <div className="flex flex-col gap-3 items-start justify-end pr-1 py-1">
                                  <Text className="!text-bluegray-800 font-bold mt-px text-base">
                                    Outsource
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal text-sm">
                                    12 Files
                                  </Text>
                                </div>
                                <Text className="!text-bluegray-400 font-medium mb-1 mt-[31px] text-sm">
                                  3GB
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-center justify-start p-5 rounded w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-row justify-between w-full">
                                <Img
                                  src="images/img_iconfileglyph.svg"
                                  alt="IconFileGlyph Two"
                                  className="h-6 w-6"
                                />
                                <Img
                                  src="images/img_morehorizontal.svg"
                                  alt="morehorizontal Two"
                                  className="h-6 w-6"
                                />
                              </div>
                              <div className="flex flex-row items-end justify-between w-full">
                                <div className="flex flex-col gap-2 items-start justify-end pr-1 py-1">
                                  <Text className="!text-bluegray-800 font-bold mt-px text-base">
                                    Graphics
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal text-sm">
                                    12 Files
                                  </Text>
                                </div>
                                <Text className="!text-bluegray-400 font-medium mb-1 mt-[31px] text-sm">
                                  3GB
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-center justify-start p-5 rounded w-full">
                            <div className="flex flex-col gap-8 items-center justify-start w-full">
                              <div className="flex flex-row justify-between w-full">
                                <Img
                                  src="images/img_iconfileglyph.svg"
                                  alt="IconFileGlyph Three"
                                  className="h-6 w-6"
                                />
                                <Img
                                  src="images/img_morehorizontal.svg"
                                  alt="morehorizontal Three"
                                  className="h-6 w-6"
                                />
                              </div>
                              <div className="flex flex-row items-end justify-between w-full">
                                <div className="flex flex-col gap-2 items-start justify-end pr-1 py-1">
                                  <Text className="!text-bluegray-800 font-bold mt-px text-base">
                                    Empty States
                                  </Text>
                                  <Text className="!text-bluegray-400 font-normal text-sm">
                                    12 Files
                                  </Text>
                                </div>
                                <Text className="!text-bluegray-400 font-medium mb-1 mt-[31px] text-sm">
                                  3GB
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text className="!text-bluegray-900 font-bold text-lg">
                            Recent files
                          </Text>
                          <div className="flex flex-row gap-2 items-center justify-evenly pl-px py-px">
                            <Text className="!text-bluegray-800 font-medium text-sm">
                              View all
                            </Text>
                            <Img
                              src="images/img_arrowright_bluegray_800.svg"
                              alt="arrowright"
                              className="h-5 w-5"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row justify-start mt-[35px] pr-[3px] py-[3px] w-[93%]">
                          <Text className="!text-bluegray-400 font-normal mt-px text-base">
                            Name
                          </Text>
                          <Text className="!text-bluegray-400 font-normal ml-[146px] my-px text-base">
                            Date motified
                          </Text>
                          <Text className="!text-bluegray-400 font-normal ml-[83px] my-px text-base">
                            Size
                          </Text>
                        </div>
                        <div className="bg-gray-51 flex flex-col items-start justify-start mt-4 p-5 w-full">
                          <div className="flex flex-row items-end justify-start w-[92%]">
                            <div className="flex flex-row gap-3.5 items-center justify-start w-[28%]">
                              <Img
                                src="images/img_file.svg"
                                alt="file One"
                                className="h-6 w-6"
                              />
                              <Text className="!text-bluegray-900 font-normal text-base">
                                index.html
                              </Text>
                            </div>
                            <Text className="!text-bluegray-800 font-normal ml-[74px] mt-[5px] text-base">
                              10.10.2021, 09:45
                            </Text>
                            <Text className="!text-bluegray-800 font-normal mb-[3px] ml-[54px] mt-1 text-base">
                              09 KB
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white-A700 flex flex-col items-start justify-start p-5 w-full">
                          <div className="flex flex-row items-end justify-start">
                            <Radio
                              value="imagepng1"
                              name="imagepng"
                              label="image.png"
                              className="pb-px pl-4 pt-[5px] text-bluegray-900"
                            />
                            <Text className="!text-bluegray-800 font-normal ml-[71px] mt-[5px] text-base">
                              10.10.2021, 09:45
                            </Text>
                            <Text className="!text-bluegray-800 font-normal mb-[3px] ml-[54px] mt-1 text-base">
                              110 KB
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-51 flex flex-col items-start justify-start p-5 w-full">
                        <div className="flex flex-row items-end justify-start w-[91%]">
                          <div className="flex flex-row gap-3.5 items-center justify-start w-[34%]">
                            <Img
                              src="images/img_filetext.svg"
                              alt="filetext"
                              className="h-6 w-6"
                            />
                            <Text className="!text-bluegray-900 font-normal text-base">
                              Document.txt
                            </Text>
                          </div>
                          <Text className="!text-bluegray-800 font-normal ml-[50px] mt-[5px] text-base">
                            10.10.2021, 09:45
                          </Text>
                          <Text className="!text-bluegray-800 font-normal mb-[3px] ml-[54px] mt-1 text-base">
                            10 KB
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col gap-8 items-start justify-end mt-14 p-[31px] rounded shadow-sm w-[24%]">
                <Text className="!text-bluegray-900 font-bold ml-px mt-2 text-lg">
                  Storage
                </Text>
                <div className="flex flex-col h-[485px] ml-px relative w-full">
                  <div className="absolute h-[190px] m-auto w-[190px]">
                    <CircularProgressbar
                      strokeWidth={1}
                      value={16}
                      counterClockwise
                      styles={{ trail: {}, path: { strokeLinecap: "square" } }}
                      className="border-[12px] border-gray-51 border-solid h-[190px] m-auto w-[190px]"
                    />
                    <div className="absolute flex flex-col gap-2 items-center justify-start left-0 m-auto right-0 top-[34%] w-[49%]">
                      <Text className="!text-bluegray-800 font-bold text-2xl">
                        25Gb
                      </Text>
                      <Text className="!text-bluegray-400 font-normal text-sm">
                        Used of 50GB
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col m-auto w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_image.svg"
                        alt="image One"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-row items-start justify-between w-[81%]">
                        <div className="flex flex-col gap-[7px] items-start justify-end pr-1 py-1">
                          <Text className="!text-bluegray-800 font-bold mt-px text-base">
                            Image
                          </Text>
                          <Text className="!text-bluegray-400 font-normal text-sm">
                            23 files
                          </Text>
                        </div>
                        <Text className="!text-bluegray-400 font-medium mt-[3px] text-sm">
                          3GB
                        </Text>
                      </div>
                    </div>
                    <div className="bg-indigo-51 h-px w-px" />
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_playcircle.svg"
                        alt="playcircle"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-row items-start justify-between w-[81%]">
                        <div className="flex flex-col gap-3 items-start justify-start pr-0.5 py-0.5">
                          <Text className="!text-bluegray-800 font-bold mt-px text-base">
                            Videos
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mb-0.5 text-sm">
                            23 files
                          </Text>
                        </div>
                        <Text className="!text-bluegray-400 font-medium mt-[3px] text-sm">
                          3GB
                        </Text>
                      </div>
                    </div>
                    <div className="bg-indigo-51 h-px w-px" />
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_music.svg"
                        alt="music"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-row items-start justify-between w-[81%]">
                        <div className="flex flex-col gap-3 items-start justify-start pr-0.5 py-0.5">
                          <Text className="!text-bluegray-800 font-bold mt-px text-base">
                            Muscics
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mb-0.5 text-sm">
                            23 files
                          </Text>
                        </div>
                        <Text className="!text-bluegray-400 font-medium mt-[3px] text-sm">
                          3GB
                        </Text>
                      </div>
                    </div>
                    <div className="bg-indigo-51 h-px w-px" />
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_archive.svg"
                        alt="archive"
                        className="h-6 w-6"
                      />
                      <div className="flex flex-row items-start justify-between w-[81%]">
                        <div className="flex flex-col gap-3 items-start justify-start pr-0.5 py-0.5">
                          <Text className="!text-bluegray-800 font-bold mt-0.5 text-base">
                            Others
                          </Text>
                          <Text className="!text-bluegray-400 font-normal mb-0.5 text-sm">
                            23 files
                          </Text>
                        </div>
                        <Text className="!text-bluegray-400 font-medium mt-[3px] text-sm">
                          3GB
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-indigo-51 border-solid flex flex-col items-center justify-start mb-px ml-px p-[35px] rounded w-full">
                  <div className="flex flex-col gap-[17px] items-center justify-start w-[49%]">
                    <Img
                      src="images/img_downloadcloud.svg"
                      alt="downloadcloud"
                      className="h-6 w-6"
                    />
                    <Text className="!text-bluegray-400 font-normal text-sm">
                      Import file
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
