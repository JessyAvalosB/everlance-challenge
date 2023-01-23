import React from "react";
import { LabelProps } from "./Types";

const Label = ({ label, flotingLabel = false }: LabelProps): JSX.Element => {
  const flotingActive = "-translate-x-[5px] -translate-y-[30px]";
  const flotingDesactive = "translate-x-5 translate-y-[2px] text-platinum";
  return (
    <label
      htmlFor="search-component"
      className={`text-sm absolute transition-all duration-[.5s] pointer-events-none ${
        flotingLabel ? flotingActive : flotingDesactive
      }`}
    >
      {label}
    </label>
  );
};

export default Label;
