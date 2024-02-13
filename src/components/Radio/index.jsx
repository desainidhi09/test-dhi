import React from "react";
import PropTypes from "prop-types";

const variants = {
  primary: "checked:bg-green-700 bg-green-700",
};
const sizes = {
  xs: "h-[15px] w-2 text-sm",
  sm: "h-[18px] w-2 text-base",
  md: "h-[22px] w-2 text-sm",
  lg: "h-6 w-[120px] text-base",
};

const Radio = React.forwardRef(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "radio_id",
      variant = "primary",
      size = "lg",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={
          className +
          " cursor-pointer flex gap-[5px] items-center justify-center"
        }
      >
        <input
          className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
          ref={ref}
          type="radio"
          name={name}
          {...restProps}
          id={id}
        />
        <span>{label}</span>
      </label>
    );
  },
);

Radio.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["primary"]),
};

export { Radio };
