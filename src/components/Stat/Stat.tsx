import React from "react";
import { StatProps } from "./Types";

const Stat = ({ text, data }: StatProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xs text-sonic-silver font-medium">{text}</span>
      <span className="text-lg text-jet font-medium">{data}</span>
    </div>
  );
};

export default Stat;