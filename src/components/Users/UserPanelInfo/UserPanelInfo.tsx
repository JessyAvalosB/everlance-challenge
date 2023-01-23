import React from "react";
import { useParams } from "react-router";

import { IconsNames } from "../../Icon/Types";
import IconText from "../../IconText/IconText";
import UserAvatar from "../UserAvatar/UserAvatar";
import { ElementType } from "../../IconText/Types";
import { useFetchUser } from "../../../hooks/useFetchUser";
import StatContainer from "../../StatContainer/StatContainer";

const UserPanelInfo = (): JSX.Element => {
  const { username } = useParams();
  const { data } = useFetchUser(username);
  return (
    <div className="container flex border-[1px] border-platinum rounded-md max-w-3xl h-80 mx-auto mt-28 p-10">
      <div>
        <UserAvatar src={data?.avatar_url} />
      </div>
      <div className="flex flex-col min-w-[250px] ml-6">
        <span className="text-lg text-jet font-semibold">{data?.name}</span>
        <span className="text-xs text-sonic-silver font-medium  mt-1">
          {data?.login}
        </span>
        <span className="mt-4 mb-auto text-xs text-sonic-silver font-medium">
          {data?.bio || "-"}
        </span>
        <IconText
          type={ElementType.text}
          data={data?.location}
          icon={IconsNames.location}
        />
        <IconText
          type={ElementType.text}
          data={data?.email}
          icon={IconsNames.mail}
          classname="mt-4"
        />
      </div>
      <div className="flex flex-col  min-w-[275px] ml-10">
        <IconText
          type={ElementType.link}
          data={{ ref: data?.html_url, text: data?.login }}
          icon={IconsNames.github}
        />
        <StatContainer data={data} />
        <IconText
          type={ElementType.link}
          data={{
            ref: `https://twitter.com/${data?.twitter_username}`,
            text: data?.twitter_username,
          }}
          icon={IconsNames.twitter}
        />
        <IconText
          classname="mt-4"
          type={ElementType.link}
          data={{
            ref: data?.blog,
            text: data?.blog,
          }}
          icon={IconsNames.link}
        />
      </div>
    </div>
  );
};

export default UserPanelInfo;
