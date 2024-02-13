import React from "react";

import { Button, SelectBox, Img, Text, Input } from "../../components";
import { default as ModalProvider } from "react-modal";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function CreateEventPopup({ isOpen, ...props }) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[478px]"
    >
      <div className="bg-white-A700 flex flex-col items-center justify-start p-8 rounded shadow-xs w-full">
        <div className="flex flex-col gap-5 items-start justify-end pr-1 py-1">
          <Text className="!text-bluegray-800 font-bold mt-px text-2xl">
            Create new event
          </Text>
          <Text className="!text-bluegray-800 font-normal text-sm">
            Add new event in the calendar
          </Text>
        </div>
        <div className="flex flex-col gap-[25px] items-center justify-start mt-9 w-full">
          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
            <Text className="!text-bluegray-800 font-medium text-sm">
              Event name
            </Text>
            <Input
              type="text"
              name="Group2531"
              placeholder="Type name"
              className="bg-white-A700 border border-indigo-51 border-solid h-14 pl-5 pr-[35px] rounded text-base text-bluegray-400 w-full"
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Text className="!text-bluegray-800 font-medium text-sm">
              Select category
            </Text>
            <SelectBox
              indicator={
                <Img src="images/img_arrowdown.svg" alt="arrow_down" />
              }
              name="Group2532"
              placeholder="Data project"
              options={dropDownOptions}
              className="bg-white-A700 border border-indigo-51 border-solid font-semibold pb-[15px] pl-5 pt-[21px] rounded text-base text-bluegray-800 w-full"
            />
          </div>
        </div>
        <div className="flex flex-row gap-4 justify-start mt-8 w-full">
          <Button className="bg-deep_orange-300 font-bold h-14 min-w-[199px] px-[35px] rounded-[28px] text-sm text-white-A700">
            Create now
          </Button>
          <Button className="bg-gray-51 font-semibold h-14 min-w-[199px] px-[35px] rounded-[28px] text-bluegray-800 text-sm">
            Cancel
          </Button>
        </div>
      </div>
    </ModalProvider>
  );
}
