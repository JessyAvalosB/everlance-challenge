import githubIcon from "../../assets/icons/github/github-30.svg";

export enum IconsNames {
  github = "github",
}

export interface IconProps {
  icon: IconsNames;
}

export type Icons = {
  [key in IconsNames]: string;
};

export const GetIcon: Icons = {
  github: githubIcon,
};