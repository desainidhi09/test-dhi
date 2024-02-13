import React from "react";
import PropTypes from "prop-types";

const variants = {
  etxtOutlineIndigo501_2: {
    indigo_50: "border border-indigo-50 border-solid",
  },
  etxtFillDeeporange300: {
    deep_orange_300: "bg-deep_orange-300",
  },
  etxtFillGray50: {
    gray_50: "bg-gray-50",
  },
  etxtOutlineIndigo50: {
    white_A700: "bg-white-A700 border border-indigo-50 border-solid",
  },
};
const sizes = {
  etxtPaddingT24: "pb-[23px] pt-6 px-[23px]",
  etxtPaddingT13: "pb-1.5 pt-[13px] px-1.5",
  etxtPaddingTB22: "pb-[22px] pt-[17px] px-[17px]",
  etxtPaddingT22: "pb-4 pt-[22px] px-4",
  etxtPaddingT20: "pb-[19px] pt-5 px-[19px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,

      variant = "etxtOutlineIndigo50",
      size = "etxtPaddingT20",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center  ${variants[variant]?.[color] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,

  size: PropTypes.oneOf([
    "etxtPaddingT24",
    "etxtPaddingT13",
    "etxtPaddingTB22",
    "etxtPaddingT22",
    "etxtPaddingT20",
  ]),
  variant: PropTypes.oneOf([
    "etxtOutlineIndigo501_2",
    "etxtFillDeeporange300",
    "etxtFillGray50",
    "etxtOutlineIndigo50",
  ]),
  color: PropTypes.oneOf([
    "indigo_50",
    "deep_orange_300",
    "gray_50",
    "white_A700",
  ]),
};

export { Input };
