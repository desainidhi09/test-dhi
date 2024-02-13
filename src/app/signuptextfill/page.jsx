"use client";
import React from "react";

import { Text, Button, Input, Img } from "../../components";

export default function SignupTextfillPage() {
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="bg-red-53 flex flex-row items-start justify-between p-[69px] w-full">
        <div className="flex flex-col gap-[101px] items-start justify-start ml-[69px] mt-6 w-[31%]">
          <Text className="!text-bluegray-900 font-bold leading-10 ml-0.5 text-[28px] text-center w-[72%]">
            Don&#39;t worry about overwhelming tasks
          </Text>
          <Img
            src="images/img_group7_597X493.svg"
            alt="GroupSeven"
            className="h-[597px]"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-start mr-[189px] mt-px p-[38px] rounded-[20px] shadow-xs w-[36%]">
          <div className="flex flex-col items-center justify-start mb-1 w-[86%]">
            <Text className="!text-bluegray-800 font-bold text-2xl">
              Sign up to Avori
            </Text>
            <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-start justify-end mt-[46px] p-[17px] rounded w-[98%]">
              <div className="flex flex-row gap-[98px] items-start justify-start ml-[7px] mt-0.5">
                <Img
                  src="images/img_group_18X18.svg"
                  alt="Group"
                  className="h-[18px] mb-0.5 w-[18px]"
                />
                <Text className="!text-bluegray-800 font-medium mt-[3px] text-sm">
                  Sign up with Google
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-start justify-between mt-[61px] w-full">
              <div className="bg-indigo-51 h-px mb-[5px] mt-[7px] w-[39%]" />
              <Text className="!text-bluegray-800 font-normal text-sm">Or</Text>
              <div className="bg-indigo-51 h-px mb-[5px] mt-[7px] w-[39%]" />
            </div>
            <div className="flex flex-col items-center justify-start mt-[51px] w-[98%]">
              <Input
                name="Textinput"
                placeholder="Avo Lee"
                prefix={
                  <Img
                    src="images/img_icon_2.svg"
                    alt="Icon "
                    className="mr-4 mr-4"
                  />
                }
                className="bg-white-A700 border border-indigo-51 border-solid font-medium h-14 pr-[35px] rounded text-base text-bluegray-800 w-full"
              />
              <Input
                type="email"
                name="email"
                placeholder="Ackermanlhn@gmail.com"
                prefix={
                  <Img
                    src="images/img_icon.svg"
                    alt="Icon "
                    className="mr-4 mr-4"
                  />
                }
                className="bg-white-A700 border border-indigo-51 border-solid font-medium h-14 mt-[53px] pr-[35px] rounded text-base text-bluegray-800 w-full"
              />
              <Input
                name="Textinput One"
                placeholder="Avoooo21"
                prefix={
                  <Img
                    src="images/img_icon_1.svg"
                    alt="Icon "
                    className="mr-4 mr-4"
                  />
                }
                suffix={
                  <Img
                    src="images/img_icon_icon_eye_property_3297.svg"
                    alt="Icon /Icon/Eye/Property 3297"
                    className="ml-[35px] ml-[35px]"
                  />
                }
                className="bg-white-A700 border border-indigo-51 border-solid font-medium h-14 mt-[43px] rounded text-base text-bluegray-800 w-full"
              />
              <Text className="!text-bluegray-800 font-medium leading-[22px] mt-[74px] text-center text-sm w-[76%]">
                By clicking “SIGN UP&quot; button, I agree with your Term and
                Policy
              </Text>
              <Button className="bg-deep_orange-300 font-bold h-14 mt-[54px] px-[35px] rounded-[28px] text-sm text-white-A700 w-full">
                SIGN UP
              </Button>
              <Text className="!text-bluegray-800 font-medium mt-[39px] text-sm">
                You have an account already? Sign in
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
