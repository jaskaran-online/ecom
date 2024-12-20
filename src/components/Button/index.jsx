import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none" };
const variants = {
  outline: {
    gray_800: "border border-gray-800 border-solid text-gray-800",
    gray_500: "border-2 border-gray-500 border-solid text-gray-500",
    bluegray_100: "border border-bluegray-100 border-solid text-gray-800",
  },
  fill: {
    gray_800: "bg-gray-800 text-white-A700",
    white_A700: "bg-white-A700 text-gray-800",
  },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2.5",
  md: "p-[13px]",
  lg: "p-4",
  xl: "p-[19px]",
  "2xl": "sm:pl-5 pl-[23px] py-[23px]",
  "3xl": "sm:pr-5 pr-[35px] py-[35px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
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
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "gray_800",
    "gray_500",
    "bluegray_100",
    "white_A700",
  ]),
};

export { Button };
