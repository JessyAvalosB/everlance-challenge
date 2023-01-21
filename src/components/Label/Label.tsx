import React from "react";

interface LabelProps {
  label: string;
  flotingLabel: boolean;
}

const Label = ({ label, flotingLabel = false }: LabelProps): JSX.Element => {
  const flotingActive = "-translate-x-[5px] -translate-y-[30px]";
  const flotingDesactive = "translate-x-5 translate-y-[2px] text-platinum";
  return (
    <label
      htmlFor="search-component"
      className={`text-sm absolute transition-all duration-[.5s] ${
        flotingLabel ? flotingActive : flotingDesactive
      }`}
    >
      {label}
    </label>
  );
};

export default Label;
