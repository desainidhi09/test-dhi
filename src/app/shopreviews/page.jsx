"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Button, Img, Text, Input } from "../../components";
import { Sidebar } from "react-pro-sidebar";

export default function ShopReviewsPage() {
  const [searchBarValue72, setSearchBarValue72] = React.useState("");

  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="flex flex-row justify-evenly w-full">
        <div className="h-[1979px] relative w-[17%]">
          <div className="bg-indigo-51 h-[690px] ml-auto mr-[21px] mt-[60px] w-px" />
          <Sidebar className="!sticky !w-[243px] bottom-0 h-screen justify-center left-0 m-auto overflow-auto right-0 top-0">
            <div className="bg-white-A700 flex flex-col gap-9 items-center justify-start p-[29px] w-full">
              <Img
                src="images/img_logo.svg"
                alt="Logo"
                className="h-7 mt-[7px]"
              />
              <div className="flex flex-col items-start justify-start mb-[1448px] w-[87%]">
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
        </div>
        <div className="bg-indigo-51 h-[1979px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center ml-6 mr-[23px] my-2.5 w-[97%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue72}
                onChange={(e) => setSearchBarValue72(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue72?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue72("")}
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
          <div className="bg-gray-51 flex flex-col items-center justify-end p-[22px] w-full">
            <div className="flex flex-col items-center justify-start mb-2.5 mt-[17px] w-full">
              <div className="flex flex-row items-center justify-between w-[99%]">
                <Text className="!font-poppins !text-bluegray-900 font-medium text-xl">
                  Shopping centre
                </Text>
                <Text className="!text-bluegray-400 font-normal text-base">
                  Shop Central/ Product detail
                </Text>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-start mt-8 p-8 rounded shadow-sm w-full">
                <div className="flex flex-col gap-12 items-center justify-start mb-12 w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row justify-between w-[61%]">
                      <div className="flex flex-col">
                        <Img
                          src="images/img_rectangle_126X116.png"
                          alt="Rectangle"
                          className="object-cover w-full"
                        />
                        <Img
                          src="images/img_rectangle_1.png"
                          alt="Rectangle One"
                          className="object-cover w-full"
                        />
                        <Img
                          src="images/img_rectangle_2.png"
                          alt="Rectangle Two"
                          className="object-cover w-full"
                        />
                        <Img
                          src="images/img_rectangle_3.png"
                          alt="Rectangle Three"
                          className="object-cover w-full"
                        />
                      </div>
                      <Img
                        src="images/img_rectangle_118X110.png"
                        alt="Rectangle Four"
                        className="object-cover w-4/5"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[36%]">
                      <div className="flex flex-col gap-[26px] items-start justify-start ml-[3px] w-[53%]">
                        <Text className="!text-bluegray-900 font-bold text-[28px]">
                          Polo Shirt
                        </Text>
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text className="!text-bluegray-400 font-normal text-base">
                            Code: #1230
                          </Text>
                          <Img
                            src="images/img_frame_11X77.png"
                            alt="Frame"
                            className="object-cover w-[44%]"
                          />
                        </div>
                      </div>
                      <Text className="!text-indigo-400 font-bold mt-[35px] text-2xl">
                        $120.0
                      </Text>
                      <div className="flex flex-col gap-[19px] items-start justify-start ml-[3px] mt-8 pr-1 pt-1">
                        <Text className="!text-bluegray-800 font-medium text-base">
                          Choose color
                        </Text>
                        <Img
                          src="images/img_frame_24X52.svg"
                          alt="Frame One"
                          className="h-6"
                        />
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start ml-[3px] mt-8 pr-[5px] pt-[5px] w-[35%]">
                        <Text className="!text-bluegray-800 font-medium text-base">
                          Choose quantity
                        </Text>
                        <div className="flex flex-row items-center justify-start w-[87%]">
                          <div className="border border-indigo-51 border-solid flex flex-col h-8 items-center justify-start p-[9px] w-8">
                            <div className="bg-bluegray-900 h-px my-[5px] rounded-[1px] w-[93%]" />
                          </div>
                          <Text className="!text-bluegray-900 font-medium ml-5 text-sm">
                            1
                          </Text>
                          <Img
                            src="images/img_pagedisabled.svg"
                            alt="pagedisabled"
                            className="h-8 ml-[21px] w-8"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start ml-[3px] mt-8 pr-px pt-px w-[39%]">
                        <Text className="!text-bluegray-800 font-medium mt-[3px] text-base">
                          Choose size
                        </Text>
                        <div className="flex flex-row gap-2 justify-start mt-[19px]">
                          <Button className="border border-indigo-51 border-solid font-medium h-8 min-w-[32px] px-2.5 text-bluegray-800 text-sm">
                            S
                          </Button>
                          <Button className="border border-indigo-51 border-solid font-medium h-8 min-w-[32px] px-2 text-bluegray-800 text-sm">
                            M
                          </Button>
                          <Button className="border border-indigo-51 border-solid font-medium h-8 min-w-[32px] pl-[11px] pr-2.5 text-bluegray-800 text-sm">
                            L
                          </Button>
                        </div>
                        <Text className="!text-indigo-400 font-normal ml-0.5 mt-[21px] text-sm">
                          How to find your size?
                        </Text>
                      </div>
                      <div className="flex flex-row justify-between ml-[3px] mt-8 w-full">
                        <Button className="bg-deep_orange-300 font-bold h-12 min-w-[186px] px-[35px] rounded-[24px] text-sm text-white-A700">
                          Purchase now
                        </Button>
                        <Button className="bg-deep_orange-50 font-bold h-12 min-w-[185px] px-[35px] rounded-[24px] text-deep_orange-300 text-sm">
                          Add to cart
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col gap-[27px] items-start justify-start mt-1 w-[11%]">
                      <Text className="!text-bluegray-400 font-normal text-base">
                        Product Detail
                      </Text>
                      <div className="flex flex-row gap-3 items-center justify-start py-0.5">
                        <div className="bg-indigo-400 h-0.5 my-[9px] w-[35%]" />
                        <Text className="!text-indigo-400 font-medium mb-px mt-0.5 text-base">
                          Reviews
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col w-[66%]">
                      <div className="border border-indigo-51 border-solid flex flex-col items-center justify-start p-8 rounded w-full">
                        <div className="flex flex-col gap-10 items-end justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="flex flex-row items-start justify-between w-[78%]">
                              <Img
                                src="images/img_tintin22.png"
                                alt="TinTinTwentyTwo"
                                className="h-12 rounded-[50%] w-12"
                              />
                              <div className="flex flex-col gap-[15px] items-start justify-end pr-[5px] pt-[5px]">
                                <Text className="!text-bluegray-800 font-bold mt-px text-lg">
                                  Jimo
                                </Text>
                                <Text className="!text-bluegray-800 font-normal text-base">
                                  {`Nice T-Shirt, I have a soft spot for buying this stuff <3 <3`}
                                </Text>
                              </div>
                            </div>
                            <Text className="!text-bluegray-400 font-normal mt-[5px] text-base">
                              20 mins ago
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[30px] justify-end w-[35%]">
                            <div className="flex flex-row gap-2 items-center justify-start w-3/5">
                              <Img
                                src="images/img_messagecircle.svg"
                                alt="messagecircle"
                                className="h-6 w-6"
                              />
                              <Text className="!text-bluegray-800 font-normal text-base">
                                10 comments
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[28%]">
                              <Img
                                src="images/img_heart.svg"
                                alt="heart"
                                className="h-6 w-6"
                              />
                              <Text className="!text-bluegray-800 font-normal text-base">
                                200
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border border-indigo-51 border-solid flex flex-col items-center justify-start p-8 rounded w-full">
                        <div className="flex flex-col gap-4 items-end justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="flex flex-row items-start justify-between w-[74%]">
                              <Img
                                src="images/img_indiahigh.png"
                                alt="Indiahigh"
                                className="h-12 rounded-[50%] w-12"
                              />
                              <div className="flex flex-col items-start justify-start mt-1.5 w-[86%]">
                                <Text className="!text-bluegray-800 font-bold text-lg">
                                  Ackerman_lhn
                                </Text>
                                <Text className="!text-bluegray-800 font-normal leading-6 mt-1 text-base">
                                  Oh my god, i am really addicted to this brand
                                  a lot. I define myself as a big fan
                                </Text>
                              </div>
                            </div>
                            <Text className="!text-bluegray-400 font-normal mt-[5px] text-base">
                              20 mins ago
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[30px] justify-end w-[35%]">
                            <div className="flex flex-row gap-2 items-center justify-start w-3/5">
                              <Img
                                src="images/img_messagecircle.svg"
                                alt="messagecircle One"
                                className="h-6 w-6"
                              />
                              <Text className="!text-bluegray-800 font-normal text-base">
                                10 comments
                              </Text>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[28%]">
                              <Img
                                src="images/img_heart.svg"
                                alt="heart One"
                                className="h-6 w-6"
                              />
                              <Text className="!text-bluegray-800 font-normal text-base">
                                200
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between mt-9 w-full">
                <Text className="!font-poppins !text-bluegray-900 font-medium mt-1 text-xl">
                  Related product
                </Text>
                <div className="flex flex-row gap-4 items-center justify-between mb-1 w-auto">
                  <Text className="!text-bluegray-400 font-medium text-base">
                    See all
                  </Text>
                  <Img
                    src="images/img_arrowright_bluegray_400_24X24.svg"
                    alt="arrowright"
                    className="h-6 w-6"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-5 mt-8 w-full">
                <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-sm w-full">
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
                <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-sm w-full">
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
                          alt="Frame Three"
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
                <div className="bg-white-A700 flex flex-col gap-[37px] items-center justify-start pb-8 rounded-lg shadow-sm w-full">
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
                          alt="Frame Four"
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
                <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start pb-8 rounded-lg shadow-sm w-full">
                  <div className="h-[353px] relative w-full">
                    <Img
                      src="images/img_3427408800611_4.png"
                      alt="3427408800611 Three"
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
                          alt="Frame Five"
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
        </div>
      </div>
    </div>
  );
}
