"use client";
import React from "react";

import { Text, Button, CheckBox, Input, Img } from "../../components";

export default function SignupWrongemailPage() {
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="bg-lime-50 flex flex-row gap-[154px] items-start justify-start p-[61px] w-full">
        <div className="flex flex-col gap-[137px] justify-start ml-[43px] mt-[38px] w-[39%]">
          <Text className="!text-bluegray-900 font-bold leading-10 ml-[27px] text-[28px] text-center w-1/2">
            Manage your work more effectively
          </Text>
          <Img
            src="images/img_workingtime_1.svg"
            alt="WorkingTime"
            className="h-[483px]"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end p-[50px] rounded-[20px] shadow-xs w-[36%]">
          <div className="flex flex-col gap-[46px] justify-start mt-px w-[93%]">
            <Text className="!text-bluegray-800 font-bold ml-[152px] text-2xl">
              Login to Avori
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-start justify-end p-[17px] rounded w-[95%]">
                <div className="flex flex-row gap-[105px] items-start justify-between ml-[7px] mt-0.5 w-[65%]">
                  <Img
                    src="images/img_group.svg"
                    alt="Group"
                    className="h-[18px] mb-0.5 w-[18px]"
                  />
                  <Text className="!text-bluegray-800 font-medium mt-[3px] text-sm">
                    Login with Google
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between mt-[61px] w-[98%]">
                <div className="bg-indigo-51 h-px mb-[5px] mt-[7px] w-[39%]" />
                <Text className="!text-bluegray-800 font-normal text-sm">
                  Or
                </Text>
                <div className="bg-indigo-51 h-px mb-[5px] mt-[7px] w-[39%]" />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[54px]">
                <Text className="!text-bluegray-800 font-medium text-sm">
                  Email
                </Text>
                <Input
                  type="email"
                  name="email One"
                  placeholder="Ackermanlhn@gmail.com"
                  prefix={
                    <Img
                      src="images/img_icon.svg"
                      alt="Icon "
                      className="mr-4 mr-4"
                    />
                  }
                  className="bg-white-A700 border border-indigo-51 border-solid font-medium h-14 pr-[35px] rounded text-base text-bluegray-800 w-full"
                />
              </div>
              <Text className="!text-red-600 font-normal mt-[11px] text-xs">
                Please enter a valid email address
              </Text>
              <Text className="!text-bluegray-800 font-medium mt-14 text-sm">
                Password
              </Text>
              <Input
                type="password"
                name="password"
                placeholder="************"
                prefix={
                  <Img
                    src="images/img_icon_1.svg"
                    alt="Icon "
                    className="mr-4 mr-4"
                  />
                }
                className="bg-white-A700 border border-indigo-51 border-solid font-medium h-14 mt-3 pr-[35px] rounded text-base text-bluegray-800 w-[95%]"
              />
              <div className="flex flex-row gap-[193px] items-start justify-between ml-5 mt-16 w-[96%]">
                <CheckBox
                  name="Remember"
                  label="Remember"
                  className="font-medium pb-1 pl-2 pt-[5px] text-bluegray-800 text-left text-sm"
                />
                <Text className="!text-bluegray-800 font-medium mt-[5px] text-sm underline">
                  Forgot password?
                </Text>
              </div>
              <Button className="bg-deep_orange-300 font-bold h-14 min-w-[414px] mt-[82px] px-[35px] rounded-[28px] text-sm text-white-A700">
                LOGIN
              </Button>
              <Text className="!text-bluegray-800 font-medium ml-[92px] mt-[43px] text-sm">
                You don’t have an account yet? Sign up
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
