import React from "react";

import { UserAvatarProps } from "./Types";

const UserAvatar = ({ src }: UserAvatarProps): JSX.Element => {
  return <img className="w-16 rounded-full" src={src} alt="user-icon" />;
};

export default UserAvatar;
