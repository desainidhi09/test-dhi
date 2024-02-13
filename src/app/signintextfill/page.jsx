"use client";
import React from "react";

import { Text, Button, CheckBox, Input, Img } from "../../components";

export default function SigninTextfillPage() {
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="bg-red-51 flex flex-row gap-[155px] items-center justify-start p-10 w-full">
        <div className="flex flex-col items-center justify-start ml-16 w-[38%]">
          <Text className="!text-bluegray-900 font-bold leading-10 text-[28px] text-center w-1/2">
            Manage your work more effectively
          </Text>
          <Img
            src="images/img_workingtime_483X627.svg"
            alt="WorkingTime"
            className="h-[483px] mt-[143px]"
          />
          <Text className="!text-bluegray-800 font-medium mt-[151px] text-sm">
            You don’t have an account yet? Sign up
          </Text>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end mb-[27px] p-11 rounded-[20px] shadow-xs w-[35%]">
          <Text className="!text-bluegray-800 font-bold mt-[22px] text-2xl">
            Login to Avori
          </Text>
          <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-start justify-end mt-[46px] p-[17px] rounded w-[86%]">
            <div className="flex flex-row gap-[105px] items-start justify-between ml-1.5 mt-px w-[65%]">
              <Img
                src="images/img_group_18X18.svg"
                alt="Group"
                className="h-[18px] mb-px w-[18px]"
              />
              <Text className="!text-bluegray-800 font-medium mt-[3px] text-sm">
                Login with Google
              </Text>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center mt-[54px] w-[88%]">
            <div className="bg-indigo-51 h-px mb-[5px] mt-[7px] w-[39%]" />
            <Text className="!text-bluegray-800 font-normal ml-[43px] text-sm">
              Or
            </Text>
            <div className="bg-indigo-51 h-px mb-[5px] ml-[41px] mt-[7px] w-[39%]" />
          </div>
          <div className="flex flex-col items-start justify-start mt-[54px] w-[86%]">
            <div className="flex flex-col gap-3 items-start justify-start w-full">
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
            <Text className="!text-bluegray-800 font-medium mt-[31px] text-sm">
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
              className="bg-white-A700 border border-indigo-51 border-solid font-medium h-14 mt-3 pr-[35px] rounded text-base text-bluegray-800 w-full"
            />
          </div>
          <div className="flex flex-col items-center justify-start mt-[115px] w-[86%]">
            <div className="flex flex-row items-start justify-between w-full">
              <CheckBox
                name="Remember"
                label="Remember"
                className="font-medium pb-1 pl-2 pt-[5px] text-bluegray-800 text-left text-sm"
              />
              <Text className="!text-bluegray-800 font-medium mt-[5px] text-sm underline">
                Forgot password?
              </Text>
            </div>
            <Button className="bg-deep_orange-300 font-bold h-14 mt-20 px-[35px] rounded-[28px] text-sm text-white-A700 w-full">
              LOGIN
            </Button>
            <Text className="!text-bluegray-800 font-medium mt-14 text-sm">
              You don’t have an account yet? Sign up
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
