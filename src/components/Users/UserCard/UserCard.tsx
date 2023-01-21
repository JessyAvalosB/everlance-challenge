import React from "react";
import Icon from "../../Icon/Icon";
import UserName from "../UserName/UserName";
import UserAvatar from "../UserAvatar/UserAvatar";
import { IconsNames } from "../../Icon/Types";

const UserCard = () => {
  return (
    <div className="rounded-xl border-[1px] border-platinum max-w-xs p-4">
      <div className="flex justify-start items-center">
        <UserAvatar src="https://avatars.githubusercontent.com/u/2669?v=4" />
        <UserName userName="gabriel" />
      </div>
      <div className="flex justify-between items-end mt-3">
        <Icon icon={IconsNames.github} />
        <span className="text-pale-robin-egg-blue">View Profile</span>
      </div>
    </div>
  );
};

export default UserCard;
