"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Img, Text, Button, Input } from "../../components";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import { Sidebar } from "react-pro-sidebar";

export default function TracktasksPage() {
  const [searchBarValue27, setSearchBarValue27] = React.useState("");

  return (
    <div className="flex flex-col items-center justify-start w-full">
      <div className="bg-white-A700 flex flex-row justify-evenly w-full">
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
                value={searchBarValue27}
                onChange={(e) => setSearchBarValue27(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue27?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue27("")}
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
          <div className="bg-gray-51 flex flex-col items-center justify-start p-[19px] w-full">
            <div className="flex flex-col gap-8 items-center justify-start mb-[99px] mt-[18px] w-full">
              <div className="flex flex-row justify-between w-[99%]">
                <Text className="!font-poppins !text-bluegray-900 font-medium mt-0.5 text-xl">
                  Product design
                </Text>
                <Text className="!font-poppins !text-bluegray-400 font-normal mb-[3px] text-base">
                  File management/ Product design
                </Text>
              </div>
              <Accordion
                preExpanded={[0]}
                className="flex flex-col gap-5 w-full"
              >
                {[...Array(3)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelistcarretup${i}`}>
                    <div className="bg-white-A700 flex flex-col gap-[31px] items-center justify-start py-6 rounded shadow-sm w-full">
                      <AccordionItemHeading className="w-full">
                        <AccordionItemButton>
                          <AccordionItemState>
                            {(props) => (
                              <>
                                <div className="flex flex-col items-center justify-between w-full">
                                  <div className="flex flex-row items-center justify-start w-[95%]">
                                    <Img
                                      src="images/img_carretup.svg"
                                      alt="carretup"
                                      className="h-6 w-6"
                                    />
                                    <div className="flex flex-row justify-center ml-4 w-[14%]">
                                      {props?.expanded ? (
                                        <Img
                                          src="images/img_line_24X24.svg"
                                          alt="Line One"
                                          className="h-6 w-6"
                                        />
                                      ) : (
                                        <Img
                                          src="images/img_line_24X24.svg"
                                          alt="Line Three"
                                          className="h-6 w-6"
                                        />
                                      )}
                                      <Text className="!font-poppins !text-bluegray-900 font-normal ml-3 text-base">
                                        In process (10)
                                      </Text>
                                    </div>
                                    <Button className="bg-gray-51 font-semibold h-10 min-w-[98px] ml-[797px] px-[35px] rounded-[20px] text-bluegray-800 text-sm">
                                      Edit{" "}
                                    </Button>
                                  </div>
                                  {props?.expanded ? (
                                    <div className="bg-indigo-51 h-px mt-4 w-full" />
                                  ) : null}
                                </div>
                              </>
                            )}
                          </AccordionItemState>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="flex flex-row gap-5 justify-start mb-2 w-[95%]">
                          <div className="border-2 border-indigo-51 border-solid flex flex-col items-center justify-center p-[55px] rounded w-[24%]">
                            <div className="flex flex-col gap-[43px] items-center justify-start my-[17px] w-full">
                              <Button className="bg-red-55 h-14 rounded-[50%] w-14">
                                <Img src="images/img_plus_24X24.svg" />
                              </Button>
                              <div className="flex flex-col gap-3 items-center justify-start w-full">
                                <Text className="!font-poppins !text-bluegray-800 font-bold text-base">
                                  Add file
                                </Text>
                                <Text className="!font-poppins !text-bluegray-800 font-normal leading-[22px] text-center text-sm">
                                  Add file to manage your vital task
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col items-center justify-end p-[31px] rounded shadow-sm w-[24%]">
                            <div className="flex flex-col items-start justify-start mb-px mt-1.5 w-full">
                              <div className="flex flex-col gap-3 items-center justify-start">
                                <Text className="!font-poppins !text-bluegray-900 font-bold text-lg">
                                  LD presentation file
                                </Text>
                                <Text className="!font-poppins !text-bluegray-800 font-normal leading-[22px] text-sm">
                                  Introduction about LD
                                  <br />
                                  Project in detail
                                </Text>
                              </div>
                              <div className="flex flex-col gap-6 items-start justify-start mt-6 w-full">
                                <Text className="!font-poppins !text-bluegray-900 font-normal text-base">
                                  Process (80%)
                                </Text>
                                <Img
                                  src="images/img_frame_indigo_51.svg"
                                  alt="Frame"
                                  className="h-px"
                                />
                              </div>
                              <div className="flex flex-row items-end justify-between mt-7 w-full">
                                <div className="flex flex-col gap-[19px] items-start justify-start w-2/5">
                                  <Text className="!font-poppins !text-bluegray-900 font-normal text-base">
                                    Members
                                  </Text>
                                  <div className="h-8 relative w-[64%]">
                                    <Img
                                      src="images/img_robototoyfacefinal2.png"
                                      alt="RobotoToyFaceFinalTwo"
                                      className="absolute bottom-0 h-8 left-[0%] m-auto rounded-[50%] top-0 w-8"
                                    />
                                    <Img
                                      src="images/img_fidenza978toyface.png"
                                      alt="Fidenza978ToyFace"
                                      className="absolute bottom-0 h-8 m-auto right-[0%] rounded-[50%] top-0 w-8"
                                    />
                                  </div>
                                </div>
                                <div className="bg-gray-51 h-8 mt-[35px] p-1.5 relative rounded-[50%] w-8">
                                  <Img
                                    src="images/img_buttonprimary_7.svg"
                                    alt="morevertical"
                                    className="absolute h-5 m-auto w-5"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col items-center justify-end p-[31px] rounded shadow-sm w-[24%]">
                            <div className="flex flex-col items-start justify-start mb-px mt-[7px] w-full">
                              <div className="flex flex-col gap-3 items-start justify-start">
                                <Text className="!font-poppins !text-bluegray-900 font-bold text-lg">
                                  Urgent Tasks
                                </Text>
                                <Text className="!font-poppins !text-bluegray-800 font-normal leading-[22px] text-sm">
                                  Introduction about LD
                                  <br />
                                  Project in detail
                                </Text>
                              </div>
                              <div className="flex flex-col gap-6 items-start justify-start mt-6 w-full">
                                <Text className="!font-poppins !text-bluegray-900 font-normal text-base">
                                  Process (10%)
                                </Text>
                                <Img
                                  src="images/img_frame_indigo_51_1X194.svg"
                                  alt="Frame One"
                                  className="h-px"
                                />
                              </div>
                              <div className="flex flex-row items-end justify-between mt-7 w-full">
                                <div className="flex flex-col gap-[19px] items-start justify-start w-2/5">
                                  <Text className="!font-poppins !text-bluegray-900 font-normal text-base">
                                    Members
                                  </Text>
                                  <div className="h-8 relative w-[64%]">
                                    <Img
                                      src="images/img_robototoyfacefinal2.png"
                                      alt="RobotoToyFaceFinalTwo One"
                                      className="absolute bottom-0 h-8 left-[0%] m-auto rounded-[50%] top-0 w-8"
                                    />
                                    <Img
                                      src="images/img_fidenza978toyface.png"
                                      alt="Fidenza978ToyFace One"
                                      className="absolute bottom-0 h-8 m-auto right-[0%] rounded-[50%] top-0 w-8"
                                    />
                                  </div>
                                </div>
                                <div className="bg-gray-51 h-8 mt-[35px] p-1.5 relative rounded-[50%] w-8">
                                  <Img
                                    src="images/img_buttonprimary_7.svg"
                                    alt="morevertical One"
                                    className="absolute h-5 m-auto w-5"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-[31px] rounded shadow-sm w-[24%]">
                            <div className="flex flex-col items-start justify-start mb-px mt-[5px] w-full">
                              <div className="flex flex-col gap-[17px] items-start justify-start">
                                <Text className="!font-poppins !text-bluegray-900 font-bold text-lg">
                                  Plan for 2022
                                </Text>
                                <Text className="!font-poppins !text-bluegray-800 font-normal leading-[22px] text-sm">
                                  Introduction about LD
                                  <br />
                                  Project in detail
                                </Text>
                              </div>
                              <div className="flex flex-col gap-6 items-start justify-start mt-6 w-full">
                                <Text className="!font-poppins !text-bluegray-900 font-normal text-base">
                                  Process (0%)
                                </Text>
                                <Img
                                  src="images/img_frame_1X194.svg"
                                  alt="Frame Two"
                                  className="h-px"
                                />
                              </div>
                              <div className="flex flex-row items-end justify-between mt-7 w-full">
                                <div className="flex flex-col gap-[19px] items-start justify-start w-2/5">
                                  <Text className="!font-poppins !text-bluegray-900 font-normal text-base">
                                    Members
                                  </Text>
                                  <Img
                                    src="images/img_tintin22.png"
                                    alt="TinTinTwentyTwo"
                                    className="h-8 rounded-[50%] w-8"
                                  />
                                </div>
                                <div className="bg-gray-51 h-8 mt-[35px] p-1.5 relative rounded-[50%] w-8">
                                  <Img
                                    src="images/img_buttonprimary_7.svg"
                                    alt="morevertical Two"
                                    className="absolute h-5 m-auto w-5"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionItemPanel>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
