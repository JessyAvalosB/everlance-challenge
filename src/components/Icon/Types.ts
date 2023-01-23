import linkIcon from "../../assets/icons/link/link.svg";
import mailIcon from "../../assets/icons/mail/mail.svg";
import twitterIcon from "../../assets/icons/twitter/twitter.svg";
import githubIcon from "../../assets/icons/github/github-30.svg";
import searchIcon from "../../assets/icons/search/search-30.svg";
import locationIcon from "../../assets/icons/location/location.svg";

export enum IconsNames {
  link = "link",
  mail = "mail",
  github = "github",
  search = "search",
  twitter = "twitter",
  location = "location",
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
  link: linkIcon,
  location: locationIcon,
  mail: mailIcon,
  twitter: twitterIcon,
};
