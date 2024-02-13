import React from "react";

import { Text, Img, Button } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function SigninResetPasswordSu({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[613px]"
    >
      <div className="bg-white-A700 flex flex-col items-center justify-end p-[83px] rounded-[20px] shadow-xs w-full">
        <Img
          src="images/img_group5.svg"
          alt="GroupFive"
          className="h-[132px] mt-[22px]"
        />
        <Text className="!text-bluegray-800 font-bold leading-8 mt-[263px] text-2xl text-center w-3/5">
          Password has been recovered
        </Text>
        <Button className="bg-deep_orange-300 font-bold h-14 min-w-[414px] mt-[84px] px-[35px] rounded-[28px] text-sm text-white-A700">
          LOGIN
        </Button>
        <div className="flex flex-row gap-[7px] items-start justify-center mt-[63px] pr-px pt-px w-[29%]">
          <Img
            src="images/img_chevronleft.svg"
            alt="chevronleft"
            className="h-5 mb-px w-5"
          />
          <Text className="!text-indigo-400 font-medium mr-px mt-1 text-sm">
            Back to Sign in
          </Text>
        </div>
      </div>
    </ModalProvider>
  );
}
