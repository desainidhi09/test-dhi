"use client";
import React from "react";

import { Text, Button, CheckBox, Input, Img } from "../../components";

export default function SigninDefaultPage() {
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-end w-full">
      <div className="bg-red-50 flex flex-row justify-start p-10 w-full">
        <div className="flex flex-row items-start justify-between max-w-[1356px] mb-[38px] mx-auto w-full">
          <div className="flex flex-col gap-[143px] items-center justify-start mt-[18px] w-[47%]">
            <Text className="!text-bluegray-900 font-bold leading-10 text-[28px] text-center w-1/2">
              Manage your work more effectively
            </Text>
            <Img
              src="images/img_workingtime.svg"
              alt="WorkingTime"
              className="h-[483px]"
            />
          </div>
          <div className="bg-white-A700 flex flex-col gap-[46px] items-center justify-end p-11 rounded-[20px] shadow-xs w-[43%]">
            <Text className="!text-bluegray-800 font-bold mt-[22px] text-2xl">
              Login to Avori
            </Text>
            <div className="flex flex-col items-center justify-start w-[88%]">
              <div className="bg-white-A700 border border-indigo-51 border-solid flex flex-col items-start justify-end p-[17px] rounded w-[98%]">
                <div className="flex flex-row gap-[105px] items-start justify-between ml-1.5 mt-px w-[65%]">
                  <Img
                    src="images/img_group.svg"
                    alt="Group"
                    className="h-[18px] mb-px w-[18px]"
                  />
                  <Text className="!text-bluegray-800 font-medium mt-[3px] text-sm">
                    Login with Google
                  </Text>
                </div>
              </div>
              <div className="flex flex-row items-start justify-between mt-[54px] w-full">
                <div className="bg-indigo-51 h-px mb-[5px] mt-[7px] w-[39%]" />
                <Text className="!text-bluegray-800 font-normal text-sm">
                  Or
                </Text>
                <div className="bg-indigo-51 h-px mb-[5px] mt-[7px] w-[39%]" />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-14 w-[98%]">
                <Text className="!text-bluegray-800 font-medium text-sm">
                  Email
                </Text>
                <Input
                  type="email"
                  name="email One"
                  placeholder="Infor@gmail.com"
                  prefix={
                    <Img
                      src="images/img_icon.svg"
                      alt="Icon "
                      className="mr-4 mr-4"
                    />
                  }
                  className="bg-white-A700 border border-indigo-51 border-solid h-14 pr-[35px] rounded text-base text-bluegray-400 w-full"
                />
              </div>
              <div className="flex flex-col gap-3 items-start justify-start mt-[31px] w-[98%]">
                <Text className="!text-bluegray-800 font-medium text-sm">
                  Password
                </Text>
                <Input
                  type="password"
                  name="password"
                  placeholder="************"
                  prefix={
                    <Img
                      src="images/img_icon_20X20.svg"
                      alt="Icon "
                      className="mr-4 mr-4"
                    />
                  }
                  className="bg-white-A700 border border-indigo-51 border-solid h-14 pr-[35px] rounded text-base text-bluegray-400 w-full"
                />
              </div>
              <div className="flex flex-row items-start justify-between mt-[113px] w-[99%]">
                <CheckBox
                  name="Remember"
                  label="Remember"
                  className="font-medium pb-1 pl-2 pt-[5px] text-bluegray-800 text-left text-sm"
                />
                <Text className="!text-bluegray-800 font-medium mt-[5px] text-sm underline">
                  Forgot password?
                </Text>
              </div>
              <Button className="bg-deep_orange-300 font-bold h-14 min-w-[414px] mt-20 px-[35px] rounded-[28px] text-sm text-white-A700">
                LOGIN
              </Button>
              <Text className="!text-bluegray-800 font-medium mt-14 text-sm">
                You don’t have an account yet? Sign up
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
