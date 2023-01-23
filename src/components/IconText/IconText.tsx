import React from "react";
import Icon from "../Icon/Icon";
import { IconsNames } from "../Icon/Types";
import { ElementType, IconTextProps } from "./Types";

const setElement = (type: ElementType, data: any) => {
  switch (type) {
    case ElementType.text:
      return (
        <span className="text-sm text-sonic-silver font-medium">
          {data || "-"}
        </span>
      );
    case ElementType.link:
      return (
        <a
          className="text-sm text-sonic-silver font-medium"
          href={data.ref}
          target="_blank"
          rel="noreferrer"
        >
          {data.text}
        </a>
      );

    default:
      break;
  }
};

const IconText = ({
  icon,
  data,
  type,
  classname,
}: IconTextProps): JSX.Element => {
  return (
    <div className={`flex items-center ${classname}`}>
      <Icon classname="w-6 mr-2" icon={IconsNames[icon]} />
      {setElement(type, data)}
    </div>
  );
};

export default IconText;
