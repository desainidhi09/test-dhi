import React from "react";
import PropTypes from "prop-types";

const variants = {
  ckbOutlineBluegray400871_2: {
    bluegray_400_87: "outline outline-[0.7px] outline-bluegray-400_87",
  },
  ckbOutlineBlack900: {
    black_900: "outline outline-[0.5px] outline-black-900",
  },
  ckbOutlineBluegray40087: {
    bluegray_400_87: "outline outline-[0.7px] outline-bluegray-400_87",
  },
};
const sizes = {
  ckbPaddingT2: "pb-px pt-0.5 px-px",
};

const CheckBox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      children,
      label = "",
      id = "checkbox_id",
      onChange,

      variant = "ckbOutlineBluegray40087",
      size = "ckbPaddingT2",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.checked);
    };

    return (
      <>
        <div
          className={
            className +
            " cursor-pointer flex gap-[5px] items-center justify-center"
          }
        >
          <input
            className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps}
          />
          <label htmlFor={id}>{label}</label>
        </div>
        {children}
      </>
    );
  },
);

CheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,

  size: PropTypes.oneOf(["ckbPaddingT2"]),
  variant: PropTypes.oneOf([
    "ckbOutlineBluegray400871_2",
    "ckbOutlineBlack900",
    "ckbOutlineBluegray40087",
  ]),
  color: PropTypes.oneOf(["bluegray_400_87", "black_900"]),
};

export { CheckBox };
