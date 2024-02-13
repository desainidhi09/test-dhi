"use client";
import React from "react";

import { Text, Button, Input, Img } from "../../components";

export default function SignupDefaultPage() {
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="bg-red-53 flex flex-row items-start justify-between p-[69px] w-full">
        <div className="flex flex-col gap-[101px] items-start justify-start ml-[69px] mt-6 w-[31%]">
          <Text className="!text-bluegray-900 font-bold leading-10 ml-0.5 text-[28px] text-center w-[72%]">
            Don&#39;t worry about overwhelming tasks
          </Text>
          <Img
            src="images/img_group7.svg"
            alt="GroupSeven"
            className="h-[597px]"
          />
        </div>
        <div className="flex flex-col items-center justify-start mr-[189px] mt-px w-[36%]">
          <div className="bg-white-A700 flex flex-col gap-[39px] items-center justify-start p-[38px] rounded-[20px] shadow-xs w-full">
            <div className="flex flex-col gap-[46px] items-center justify-start w-[90%]">
              <Text className="!text-bluegray-800 font-bold text-2xl">
                Sign up to Avori
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-start justify-end p-[17px] rounded w-[93%]">
                  <div className="flex flex-row gap-[98px] items-start justify-start ml-[7px] mt-0.5">
                    <Img
                      src="images/img_group.svg"
                      alt="Group"
                      className="h-[18px] mb-0.5 w-[18px]"
                    />
                    <Text className="!text-bluegray-800 font-medium mt-[3px] text-sm">
                      Sign up with Google
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-end ml-5 mt-[61px]">
                  <div className="bg-indigo-51 h-px mb-[5px] mt-[7px] w-[39%]" />
                  <Text className="!text-bluegray-800 font-normal ml-[67px] text-sm">
                    Or
                  </Text>
                  <div className="bg-indigo-51 h-px mb-[5px] ml-[17px] mt-[7px] w-[39%]" />
                </div>
                <Input
                  type="text"
                  name="Textinput"
                  placeholder="Full name"
                  prefix={
                    <Img
                      src="images/img_icon_2.svg"
                      alt="Icon "
                      className="mr-4 mr-4"
                    />
                  }
                  className="bg-white-A700 border border-indigo-51 border-solid h-14 mt-[51px] pr-[35px] rounded text-base text-bluegray-400 w-[93%]"
                />
                <Input
                  type="email"
                  name="Textinput One"
                  placeholder="Email"
                  prefix={
                    <Img
                      src="images/img_icon.svg"
                      alt="Icon "
                      className="mr-4 mr-4"
                    />
                  }
                  className="bg-white-A700 border border-indigo-51 border-solid h-14 mt-[53px] pr-[35px] rounded text-base text-bluegray-400 w-[93%]"
                />
                <Input
                  type="password"
                  name="Textinput Two"
                  placeholder="Password"
                  prefix={
                    <Img
                      src="images/img_icon_1.svg"
                      alt="Icon "
                      className="mr-4 mr-4"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_icon_icon_eye_property_3298.svg"
                      alt="Icon /Icon/Eye/Property 3298"
                      className="ml-[35px] ml-[35px]"
                    />
                  }
                  className="bg-white-A700 border border-indigo-51 border-solid h-14 mt-[43px] rounded text-base text-bluegray-400 w-[93%]"
                />
                <Text className="!text-bluegray-800 font-medium leading-[22px] ml-[50px] mt-[74px] text-center text-sm w-[71%]">
                  By clicking “SIGN UP&quot; button, I agree with your Term and
                  Policy
                </Text>
                <Button className="bg-deep_orange-300 font-bold h-14 min-w-[414px] mt-[54px] px-[35px] rounded-[28px] text-sm text-white-A700">
                  SIGN UP
                </Button>
              </div>
            </div>
            <Text className="!text-bluegray-800 font-medium mb-1 text-sm">
              You have an account already? Sign in
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
