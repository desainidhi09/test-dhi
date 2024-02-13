import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const variants = {
  ddnOutlineIndigo501_2: {
    indigo_50: "border border-indigo-50 border-solid",
  },
  ddnFillWhiteA700: {
    white_A700: "bg-white-A700",
  },
  ddnOutlineIndigo50: {
    white_A700: "bg-white-A700 border border-indigo-50 border-solid",
  },
};
const sizes = {
  ddnPaddingTB20: "pb-5 pt-[19px] px-[19px]",
  ddnPaddingTB17: "pb-[17px] pt-4 px-4",
  ddnPaddingT21: "pb-4 pt-[21px] px-4",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      className = "",
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      shape = "",
      size = "ddnPaddingT21",
      variant = "ddnOutlineIndigo50",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const [menuPortalTarget, setMenuPortalTarget] = React.useState(null);

    React.useEffect(() => {
      setMenuPortalTarget(document.body);
    }, []);

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} flex ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              width: "100%",
              "&:hover": {
                border: "0 !important",
              },
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected && "#ff8b6a",
              color: state.isSelected && "#ffffff",
              "&:hover": {
                backgroundColor: "#ff8b6a",
                color: "#ffffff",
              },
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: 0,
            }),
            placeholder: (provided) => ({
              ...provided,
              margin: 0,
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={menuPortalTarget}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        {children}
      </>
    );
  },
);

SelectBox.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  indicator: PropTypes.node,

  size: PropTypes.oneOf(["ddnPaddingTB20", "ddnPaddingTB17", "ddnPaddingT21"]),
  variant: PropTypes.oneOf([
    "ddnOutlineIndigo501_2",
    "ddnFillWhiteA700",
    "ddnOutlineIndigo50",
  ]),
  color: PropTypes.oneOf(["indigo_50", "white_A700"]),
};

export { SelectBox };
