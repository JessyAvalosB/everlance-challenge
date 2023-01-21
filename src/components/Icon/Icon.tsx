import React from "react";
import { GetIcon, IconProps } from "./Types";

const Icon = ({ icon, classname }: IconProps) => {
  return <img className={classname} src={GetIcon[icon]} alt={`icon-${icon}`} />;
};

export default Icon;
