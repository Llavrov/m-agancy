import classNames from "classnames";
import React from "react";

type Props = {
  className?: string;
};

export const SliderGradientBorder = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 97 43"
      className={classNames("absolute left-0 top-0", className)}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="96"
        height="42"
        rx="11.5"
        stroke="url(#slider-tab-gradient)"
      />
    </svg>
  );
};
