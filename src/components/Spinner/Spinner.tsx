import React from "react";

import './Style.css';

const Spinner = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center translate-y-[200px]">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Spinner;
