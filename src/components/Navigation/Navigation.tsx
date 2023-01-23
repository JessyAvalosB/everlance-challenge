import React from "react";
import everlanceLogo from '../../assets/images/logo-green.png';

const Navigation = (): JSX.Element => {
    return (
      <nav className="flex items-center h-16 px-5 shadow-md">
        <img className="w-40" src={everlanceLogo} alt="everlance-logo" />
      </nav>
    );
}

export default Navigation;