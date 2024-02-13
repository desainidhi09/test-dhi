import React from "react";
import PropTypes from "prop-types";

const variants = {
  btnFillIndigo400: {
    indigo_400: "bg-indigo-400",
  },
  btnFillAmber300: {
    amber_300: "bg-amber-300",
  },
  btnFillWhiteA700: {
    white_A700: "bg-white-A700",
  },
  btnFillBlack90066: {
    black_900_66: "bg-black-900_66",
  },
  btnFillRed54: {
    red_54: "bg-red-54",
  },
  btnOutlineBluegray900: {
    bluegray_900: "border border-bluegray-900 border-solid",
  },
  btnFillGreen70063: {
    green_700_63: "bg-green-700_63",
  },
  btnFillRed600: {
    red_600: "bg-red-600",
  },
  btnFillDeeporange50: {
    deep_orange_50: "bg-deep_orange-50",
  },
  btnOutlineBluegray200: {
    white_A700:
      "bg-white-A700 border border-bluegray-200 border-solid shadow-sm",
  },
  btnFillBluegray900: {
    bluegray_900: "bg-bluegray-900",
  },
  btnFillGreen700: {
    green_700: "bg-green-700",
  },
  btnFillGray50: {
    gray_50: "bg-gray-50",
  },
  btnFillRed40019: {
    red_400_19: "bg-red-400_19",
  },
  btnFillIndigo40019: {
    indigo_400_19: "bg-indigo-400_19",
  },
  btnFillGray100: {
    gray_100: "bg-gray-100",
  },
  btnFillDeeporange300: {
    deep_orange_300: "bg-deep_orange-300",
  },
  btnOutlineIndigo50: {
    indigo_50: "border border-indigo-50 border-solid",
  },
};
const sizes = {
  btnPaddingAll3: "p-[3px]",
  btnPaddingAll21: "p-[21px]",
  btnPaddingAll13: "p-[13px]",
  btnPaddingAll6: "p-1.5",
  btnPaddingAll17: "p-[17px]",
  btnPaddingAll9: "p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  variant = "btnFillDeeporange300",
  size = "btnPaddingAll17",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} cursor-pointer flex items-center justify-center text-center ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,

  size: PropTypes.oneOf([
    "btnPaddingAll3",
    "btnPaddingAll21",
    "btnPaddingAll13",
    "btnPaddingAll6",
    "btnPaddingAll17",
    "btnPaddingAll9",
  ]),
  variant: PropTypes.oneOf([
    "btnFillIndigo400",
    "btnFillAmber300",
    "btnFillWhiteA700",
    "btnFillBlack90066",
    "btnFillRed54",
    "btnOutlineBluegray900",
    "btnFillGreen70063",
    "btnFillRed600",
    "btnFillDeeporange50",
    "btnOutlineBluegray200",
    "btnFillBluegray900",
    "btnFillGreen700",
    "btnFillGray50",
    "btnFillRed40019",
    "btnFillIndigo40019",
    "btnFillGray100",
    "btnFillDeeporange300",
    "btnOutlineIndigo50",
  ]),
  color: PropTypes.oneOf([
    "indigo_400",
    "amber_300",
    "white_A700",
    "black_900_66",
    "red_54",
    "bluegray_900",
    "green_700_63",
    "red_600",
    "deep_orange_50",
    "green_700",
    "gray_50",
    "red_400_19",
    "indigo_400_19",
    "gray_100",
    "deep_orange_300",
    "indigo_50",
  ]),
};

export { Button };
