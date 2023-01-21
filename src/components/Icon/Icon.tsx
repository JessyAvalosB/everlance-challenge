import React from "react";
import { GetIcon, IconProps } from "./Types";

const Icon = ({ icon }: IconProps) => {
  return <img className="w-6" src={GetIcon[icon]} alt={`icon-${icon}`} />;
};

export default Icon;
