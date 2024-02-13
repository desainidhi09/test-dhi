import React from "react";

import { Button, Input, Img, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function SigninResetPassword({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[645px]"
    >
      <div className="bg-white-A700 flex flex-row gap-11 items-start justify-start p-12 rounded-[20px] shadow-xs w-full">
        <Img
          src="images/img_iconiconline294.svg"
          alt="IconIconLine294"
          className="h-6 mt-[11px] w-6"
        />
        <div className="flex flex-col gap-[68px] items-center justify-start mb-2.5 mt-1.5 w-[76%]">
          <Img
            src="images/img_group_182X168.svg"
            alt="Group"
            className="h-[182px]"
          />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[70px] justify-start w-full">
              <Text className="!text-bluegray-800 font-bold ml-[133px] mr-[82px] text-2xl">
                Forgot Password
              </Text>
              <Text className="!text-bluegray-800 font-normal leading-[22px] text-center text-sm">
                Enter the email address you used when you joined and we’ll send
                you instructions to reset your password.
                <br />
                For security reasons, we do NOT store your password. So rest
                assured that we will never send your password via email.
              </Text>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start mt-[82px] w-full">
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
            <Button className="bg-deep_orange-300 font-bold h-14 mt-[102px] px-[35px] rounded-[28px] text-sm text-white-A700 w-full">
              SEND RESET INSTRUCTIONS
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
