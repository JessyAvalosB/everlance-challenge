import React from "react";
import { GetIcon, IconProps } from "./Types";

const Icon = ({ icon }: IconProps) => {
  return <img src={GetIcon[icon]} alt={`icon-${icon}`} />;
};

export default Icon;