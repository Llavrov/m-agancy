import { SliderGradientBorder } from "./border/slider_gradient_border";
import classNames from "classnames";
import React, { useMemo } from "react";

type Props = {
  offsetX: number;
  width: number;
};

const GradientSliderBorder = ({ offsetX, width }: Props) => {
  const transform = useMemo(
    () => `translateX(${offsetX.toFixed(0)}px)`,
    [offsetX]
  );

  return (
    <figure
      className={classNames("absolute left-0 h-full transition-all")}
      style={{ transform, width }}
    >
      <SliderGradientBorder />
    </figure>
  );
};

export default GradientSliderBorder;
