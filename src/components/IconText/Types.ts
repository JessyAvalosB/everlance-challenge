import { IconsNames } from "../Icon/Types";

export interface IconTextProps {
  icon: IconsNames;
  data: any;
  classname?: string;
  type: ElementType;
}

export enum ElementType {
  text = "text",
  link = "link",
}
