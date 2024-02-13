import React from "react";
import PropTypes from "prop-types";

const variants = {
  tarOutlineIndigo50: "bg-white-A700 border border-indigo-50 border-solid",
};
const sizes = {
  tarPaddingTB35: "p-[22px]",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      size = "tarPaddingTB35",
      variant = "tarOutlineIndigo50",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${sizes[size] || ""} ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,

  size: PropTypes.oneOf(["tarPaddingTB35"]),
  variant: PropTypes.oneOf(["tarOutlineIndigo50"]),
};

export { TextArea };
