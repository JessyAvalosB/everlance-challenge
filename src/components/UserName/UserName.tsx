import React from "react";
import { UserNameProps } from "./Types";

const UserName = ({ userName }: UserNameProps): JSX.Element => {
  return <span className="ml-4 text-lg font-normal">{userName}</span>;
};

export default UserName;
