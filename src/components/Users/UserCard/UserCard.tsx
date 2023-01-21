import React from "react";
import Icon from "../../Icon/Icon";
import UserName from "../UserName/UserName";
import UserAvatar from "../UserAvatar/UserAvatar";
import { IconsNames } from "../../Icon/Types";
import { User } from "../Type";

const UserCard = ({login, avatar_url, ...rest}: User ) => {
  return (
    <div className="rounded-xl border-[1px] border-platinum max-w-xs p-4">
      <div className="flex justify-start items-center">
        <UserAvatar src={avatar_url} />
        <UserName userName={login} />
      </div>
      <div className="flex justify-between items-end mt-3">
        <Icon classname="w-6" icon={IconsNames.github} />
        <span className="text-pale-robin-egg-blue cursor-pointer">
          View Profile
        </span>
      </div>
    </div>
  );
};

export default UserCard;
