import React from "react";
import Stat from "../Stat/Stat";

import { StatContainerProps } from "./Types";

const StatContainer = ({ data }: StatContainerProps): JSX.Element => {
  return (
    <div className="flex justify-between border-[1px] rounded-xl border-platinum bg-cultured py-3 px-5 mt-7 mb-auto">
      <Stat text="Repos" data={data?.public_repos} />
      <Stat text="Followers" data={data?.followers} />
      <Stat text="Following" data={data?.following} />
    </div>
  );
};

export default StatContainer;
