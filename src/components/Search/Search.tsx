import React, { useState } from "react";
import Icon from "../Icon/Icon";
import { IconsNames } from "../Icon/Types";
import Label from "../Label/Label";

interface SearchProps {
  label?: string;
  icon?: boolean;
  onChange: (event: string) => void;
}

const Search = ({
  label = undefined,
  icon = false,
  onChange,
}: SearchProps): JSX.Element => {
  const [flotingLabel, setFlotingLabel] = useState(false);
  const handleChange = (event: any) => {
    const { value } = event.target;
    onChange(value);
    setFlotingLabel(value.length === 0 ? false : true);
  };
  return (
    <div className="flex border-[1px] border-platinum rounded-[4px] w-80 p-1">
      {label && <Label label={label} flotingLabel={flotingLabel} />}
      {icon && <Icon classname="w-4 mr-1" icon={IconsNames.search} />}
      <input
        id="search-component"
        className="w-full h-6 border-0 focus-visible:outline-0 text-sm"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
