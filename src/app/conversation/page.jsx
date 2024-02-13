"use client";
import React from "react";

import { CloseSVG } from "../../assets/images";
import { Img, Input, Text, Button, Radio } from "../../components";
import { Sidebar } from "react-pro-sidebar";

export default function ConversationPage() {
  const [searchBarValue30, setSearchBarValue30] = React.useState("");
  const [searchBarValue31, setSearchBarValue31] = React.useState("");

  return (
    <div className="flex flex-col items-center justify-start pb-[7px] w-full">
      <div className="bg-white-A700 flex flex-row justify-evenly w-full">
        <Sidebar className="!sticky !w-[243px] h-screen overflow-auto top-0">
          <div className="flex flex-col gap-9 items-center justify-start mb-[425px] ml-[29px] mr-[54px] mt-9 w-[66%]">
            <Img src="images/img_logo.svg" alt="Logo" className="h-7" />
            <div className="flex flex-col items-start justify-start w-full">
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
                    src="images/img_icon_16.svg"
                    alt="Icon Two"
                    className="h-5 mb-0.5 w-5"
                  />
                  <Text className="!text-bluegray-800 font-medium mt-[5px] text-sm">
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
        <div className="bg-indigo-51 h-[927px] w-px" />
        <div className="flex flex-col items-center justify-start w-[84%]">
          <header className="bg-white-A700 flex items-center justify-center w-full">
            <div className="flex flex-row items-center justify-center mx-auto my-2.5 w-[96%]">
              <Text className="!text-bluegray-800 font-medium text-sm">
                Welcomback, Team!
              </Text>
              <Input
                name="SearchBox"
                placeholder="Search..."
                value={searchBarValue31}
                onChange={(e) => setSearchBarValue31(e)}
                prefix={
                  <Img
                    src="images/img_search.svg"
                    alt="search"
                    className="cursor-pointer mr-2 cursor-pointer mr-2"
                  />
                }
                suffix={
                  searchBarValue31?.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue31("")}
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
          <div className="bg-gray-51 flex flex-col gap-8 items-start justify-end p-[23px] w-full">
            <Text className="!font-poppins !text-bluegray-900 font-medium mt-[17px] text-xl">
              Message
            </Text>
            <div className="bg-white-A700 flex flex-row items-center justify-end mb-px pl-8 rounded shadow-sm w-full">
              <div className="flex flex-col gap-8 items-start justify-start w-[35%]">
                <div className="flex flex-row gap-4 items-center justify-start w-[46%]">
                  <div className="border-2 border-green-700 border-solid h-[62px] p-[7px] relative rounded-[50%] w-[62px]">
                    <Img
                      src="images/img_robototoyfacefinal2.png"
                      alt="RobotoToyFaceFinalTwo"
                      className="absolute h-12 m-auto rounded-[50%] w-12"
                    />
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start pr-[5px] pt-[5px]">
                    <Text className="!text-bluegray-800 font-bold text-lg">
                      Ackerman
                    </Text>
                    <Text className="!text-bluegray-400 font-normal text-sm">
                      My accout
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                  <Text className="!text-bluegray-400 font-normal text-sm">
                    Online (10)
                  </Text>
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-6 w-[88%]">
                      <div className="flex flex-col gap-3 items-center justify-start w-full">
                        <div className="h-[51px] relative w-full">
                          <Img
                            src="images/img_punktoyface1.png"
                            alt="PunkToyFaceOne"
                            className="absolute h-12 left-0 m-auto right-0 rounded-[50%] top-[0%] w-12"
                          />
                          <div className="absolute bg-green-700 bottom-[0%] h-[11px] m-auto outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]" />
                        </div>
                        <Text className="!text-bluegray-900 font-medium text-base">
                          Lee
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                        <div className="h-[51px] relative w-full">
                          <Img
                            src="images/img_indiahigh.png"
                            alt="Indiahigh"
                            className="absolute h-12 left-0 m-auto right-0 rounded-[50%] top-[0%] w-12"
                          />
                          <div className="absolute bg-bluegray-200 bottom-[0%] h-[11px] m-auto outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]" />
                        </div>
                        <Text className="!text-bluegray-900 font-medium text-base">
                          Riri
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <div className="h-[51px] relative w-full">
                          <Img
                            src="images/img_tintin22.png"
                            alt="TinTinTwentyTwo"
                            className="absolute h-12 left-0 m-auto right-0 rounded-[50%] top-[0%] w-12"
                          />
                          <div className="absolute bg-bluegray-200 bottom-[0%] h-[11px] m-auto outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]" />
                        </div>
                        <Text className="!text-bluegray-900 font-medium ml-[3px] text-base">
                          Jimo
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3 items-center justify-start w-full">
                        <div className="h-[51px] relative w-full">
                          <Img
                            src="images/img_vangoghbyamrit1.png"
                            alt="VanGoghByAmritOne"
                            className="absolute h-12 left-0 m-auto right-0 rounded-[50%] top-[0%] w-12"
                          />
                          <div className="absolute bg-bluegray-200 bottom-[0%] h-[11px] m-auto outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]" />
                        </div>
                        <Text className="!text-bluegray-900 font-medium text-base">
                          Acker
                        </Text>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start pb-0.5 pr-0.5 w-full">
                        <div className="h-[51px] ml-0.5 relative w-[96%]">
                          <Img
                            src="images/img_punk9252toyfaceedita2.png"
                            alt="Punk9252ToyFaceEditATwo"
                            className="absolute h-12 left-0 m-auto right-0 rounded-[50%] top-[0%] w-12"
                          />
                          <div className="absolute bg-bluegray-200 bottom-[0%] h-[11px] m-auto outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]" />
                        </div>
                        <Text className="!text-bluegray-900 font-medium mb-px text-base">
                          Momo
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      alt="arrowright"
                      className="h-6 w-6"
                    />
                  </div>
                </div>
                <Input
                  name="SearchBox One"
                  placeholder="Search..."
                  value={searchBarValue30}
                  onChange={(e) => setSearchBarValue30(e)}
                  prefix={
                    <Img
                      src="images/img_search.svg"
                      alt="search"
                      className="cursor-pointer mr-2 cursor-pointer mr-2"
                    />
                  }
                  suffix={
                    searchBarValue30?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue30("")}
                        fillColor="#36414fff"
                      />
                    ) : null
                  }
                  className="bg-gray-51 font-medium h-10 pr-[35px] rounded text-bluegray-400 text-xs w-[99%]"
                />
                <div className="flex flex-col pb-[21px] w-[99%]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="h-[51px] relative w-[13%]">
                      <Img
                        src="images/img_punktoyface1.png"
                        alt="PunkToyFaceOne One"
                        className="absolute h-12 left-0 m-auto right-0 rounded-[50%] top-[0%] w-12"
                      />
                      <div className="absolute bg-green-700 bottom-[0%] h-[11px] m-auto outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]" />
                    </div>
                    <div className="flex flex-row justify-between w-[83%]">
                      <div className="flex flex-col gap-[13px] items-start justify-end pr-px py-px">
                        <Text className="!text-bluegray-800 font-bold mt-[5px] text-lg">
                          Lee Ankar
                        </Text>
                        <Text className="!text-bluegray-800 font-medium text-base">
                          Hey! Can i meet you for a sec?
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-start justify-end pl-0.5 pt-0.5">
                        <Text className="!text-bluegray-400 font-normal mt-[3px] text-sm">
                          now
                        </Text>
                        <Text className="!text-white-A700 bg-red-600 flex font-bold h-6 items-center justify-center ml-1 rounded-[50%] text-center text-xs w-6">
                          3
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-51 h-px w-px" />
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="h-[51px] relative w-[13%]">
                      <Img
                        src="images/img_tintin22.png"
                        alt="TinTinTwentyTwo One"
                        className="absolute h-12 left-0 m-auto right-0 rounded-[50%] top-[0%] w-12"
                      />
                      <div className="absolute bg-bluegray-200 bottom-[0%] h-[11px] m-auto outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]" />
                    </div>
                    <div className="flex flex-row justify-between w-[83%]">
                      <div className="flex flex-col gap-3.5 items-start justify-end pr-px py-px">
                        <Text className="!text-bluegray-800 font-bold mt-[5px] text-lg">
                          Jimo
                        </Text>
                        <Text className="!text-bluegray-400 font-normal text-base">
                          Sorry for my mistaken ✓
                        </Text>
                      </div>
                      <div className="flex flex-col h-14 items-center justify-start pl-0.5 py-0.5 w-[55px]">
                        <Text className="!text-bluegray-400 font-normal mb-9 mt-px text-sm">
                          23 mins
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-51 h-px w-px" />
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="h-[51px] relative w-[13%]">
                      <Img
                        src="images/img_punk9252toyfaceedita2.png"
                        alt="Punk9252ToyFaceEditATwo One"
                        className="absolute h-12 left-0 m-auto right-0 rounded-[50%] top-[0%] w-12"
                      />
                      <div className="absolute bg-bluegray-200 bottom-[0%] h-[11px] m-auto outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]" />
                    </div>
                    <div className="flex flex-row justify-between w-[83%]">
                      <div className="flex flex-col gap-[13px] items-start justify-end pr-px py-px">
                        <Text className="!text-bluegray-800 font-bold mt-[5px] text-lg">
                          Momo
                        </Text>
                        <Text className="!text-bluegray-400 font-normal text-base">
                          Sorry for my mistaken ✓
                        </Text>
                      </div>
                      <div className="flex flex-col h-14 items-center justify-start pl-0.5 py-0.5 w-[55px]">
                        <Text className="!text-bluegray-400 font-normal mb-9 mt-px text-sm">
                          23 mins
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-51 h-px w-px" />
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="h-[51px] relative w-[13%]">
                      <Img
                        src="images/img_indiahigh.png"
                        alt="Indiahigh One"
                        className="absolute h-12 left-0 m-auto right-0 rounded-[50%] top-[0%] w-12"
                      />
                      <div className="absolute bg-bluegray-200 bottom-[0%] h-[11px] m-auto outline outline-[2px] outline-white-A700 right-[4%] rounded-[5px] w-[11px]" />
                    </div>
                    <div className="flex flex-row justify-between w-[83%]">
                      <div className="flex flex-col gap-3.5 items-start justify-end pr-px py-px">
                        <Text className="!text-bluegray-800 font-bold mt-[5px] text-lg">
                          Riri Lee
                        </Text>
                        <Text className="!text-bluegray-400 font-normal text-base">
                          Sorry for my mistaken ✓
                        </Text>
                      </div>
                      <div className="flex flex-col h-14 items-center justify-start pl-0.5 py-0.5 w-[55px]">
                        <Text className="!text-bluegray-400 font-normal mb-9 mt-px text-sm">
                          23 mins
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-51 h-[747px] ml-[26px] w-px" />
              <div className="flex flex-col items-center justify-start w-[63%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row items-start justify-start w-[92%]">
                    <div className="flex flex-col gap-3 items-start justify-end pr-[3px] pt-[3px] w-[15%]">
                      <Text className="!text-bluegray-800 font-bold mt-0.5 text-lg">
                        Lee Ankar
                      </Text>
                      <Radio
                        value="online"
                        name="profileviewsone"
                        label="Online"
                        className="font-medium pb-1.5 pl-2 pr-[3px] text-bluegray-800"
                      />
                    </div>
                    <Button className="bg-gray-51 h-12 mb-2.5 ml-[437px] rounded-[50%] w-12">
                      <Img src="images/img_search_bluegray_900.svg" />
                    </Button>
                    <Button className="bg-gray-51 h-12 mb-2.5 ml-4 rounded-[50%] w-12">
                      <Img src="images/img_buttonprimary_7.svg" />
                    </Button>
                  </div>
                  <div className="bg-indigo-51 h-px mt-6 w-full" />
                  <div className="flex flex-col items-start justify-start mt-[35px] w-[92%]">
                    <div className="flex flex-col h-[100px] relative w-1/2">
                      <div className="flex flex-col gap-3 justify-start m-auto w-full">
                        <Text className="!text-bluegray-400 font-normal ml-9 text-sm">
                          Lee Ankar{" "}
                        </Text>
                        <div className="flex flex-row items-start justify-between w-full">
                          <Img
                            src="images/img_punktoyface1.png"
                            alt="PunkToyFaceOne Two"
                            className="h-6 rounded-[50%] w-6"
                          />
                          <div className="bg-gray-51 flex flex-col items-start justify-end p-4 rounded-bl rounded-br rounded-tr">
                            <Text className="!text-bluegray-800 font-medium mb-px mt-[5px] text-base">
                              Hey! Can i meet you for a sec?
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text className="!text-black-900 bg-gray-51 border-2 border-solid border-white-A700 flex font-normal h-7 items-center justify-center ml-auto mr-[11px] mt-auto pb-[5px] pt-1.5 px-1.5 rounded-[50%] text-base w-7 z-[1]">
                        😍
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-end justify-end ml-[330px] mt-[5px]">
                      <Input
                        name="Group Three"
                        placeholder="Hey! Can i meet you for a sec?"
                        className="bg-deep_orange-300 font-medium h-14 pl-4 pr-[35px] rounded-bl rounded-br rounded-tr text-base text-white-A700 w-[91%]"
                      />
                      <Img
                        src="images/img_circlecheckfull.svg"
                        alt="circlecheckfull"
                        className="h-5 mt-9 w-5"
                      />
                    </div>
                    <div className="flex flex-row gap-2 items-end justify-end ml-[330px] mt-4 w-[49%]">
                      <div className="bg-gray-51 flex flex-col gap-4 items-start justify-start p-4 rounded-bl-lg rounded-br-lg rounded-tr-lg w-[91%]">
                        <div className="h-[133px] relative w-full">
                          <Img
                            src="images/img_vector_133X251.png"
                            alt="Vector One"
                            className="h-[133px] m-auto object-cover rounded-lg w-full"
                          />
                          <Button className="absolute bg-black-900_66 bottom-[6%] font-medium h-6 m-auto min-w-[41px] pl-[7px] pr-[9px] right-[3%] rounded-[10px] text-white-A700 text-xs">
                            1:00
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[13px] items-start justify-start">
                          <Text className="!text-bluegray-900 font-semibold text-base">
                            ☕️ Life Style Coffee
                          </Text>
                          <Text className="!text-bluegray-402 font-normal text-sm">
                            8350 Melrose Ave, Los Angeles
                          </Text>
                        </div>
                      </div>
                      <Img
                        src="images/img_circlecheckfull.svg"
                        alt="circlecheckfull One"
                        className="h-5 mt-[215px] w-5"
                      />
                    </div>
                    <div className="bg-gray-51 flex flex-row items-center justify-start mt-[105px] p-[9px] rounded">
                      <Input
                        name="frame3801"
                        placeholder="Enter message..."
                        className="bg-gray-51 h-[37px] ml-1 mt-px pl-[3px] pr-[35px] text-base text-bluegray-400 w-3/4"
                      />
                      <Img
                        src="images/img_share2.svg"
                        alt="shareTwo"
                        className="h-6 ml-[17px] w-6"
                      />
                      <Img
                        src="images/img_link2.svg"
                        alt="linkTwo"
                        className="h-6 ml-6 w-6"
                      />
                      <Img
                        src="images/img_x.svg"
                        alt="plus"
                        className="h-6 ml-6 w-6"
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
  );
}
