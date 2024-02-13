"use client";
import React from "react";

import { Text, Button, Img } from "../../components";

export default function SignupVerificationPage() {
  return (
    <div className="bg-white-A700 flex flex-col items-center justify-start w-full">
      <div className="bg-lime-51 flex flex-col items-center justify-end p-[67px] w-full">
        <div className="bg-white-A700 flex flex-row gap-[33px] items-start justify-start mt-px p-12 rounded-[20px] shadow-xs w-[39%]">
          <Img
            src="images/img_iconiconline294.svg"
            alt="IconIconLine294"
            className="h-6 mt-[11px] w-6"
          />
          <div className="flex flex-col gap-[62px] items-center justify-start mb-[9px] mt-1.5 w-[79%]">
            <Img
              src="images/img_group_4.svg"
              alt="Group"
              className="h-[182px]"
            />
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <Text className="!text-bluegray-800 font-bold text-2xl">
                  2-Step Vertification
                </Text>
                <Text className="!text-bluegray-800 font-normal leading-[22px] text-center text-sm">
                  We sent a vertìication code to your email. Enter the code from
                  the email in the field below
                </Text>
              </div>
              <div className="flex gap-5 mt-[124px] w-[92%]" />
              <Button className="bg-deep_orange-300 font-bold h-14 mt-[103px] px-[35px] rounded-[28px] text-sm text-white-A700 w-full">
                SEND RESET INSTRUCTIONS
              </Button>
              <Text className="!text-indigo-400 font-medium mt-[51px] text-sm">
                You haven’t received it? Resend a new code
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
