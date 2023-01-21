import githubIcon from "../../assets/icons/github/github-30.svg";
import searchIcon from "../../assets/icons/search/search-30.svg";

export enum IconsNames {
  github = "github",
  search = "search",
}

export interface IconProps {
  icon: IconsNames;
  classname: string;
}

export type Icons = {
  [key in IconsNames]: string;
};

export const GetIcon: Icons = {
  github: githubIcon,
  search: searchIcon,
};
