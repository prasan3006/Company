import React from "react";
import { Link } from "gatsby";
import { css } from "emotion";

import StrategyFoxLogo from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          className={`logo-light ${LogoStyle()}`}
          src={StrategyFoxLogo}
          alt="Corporate Logo"
        />
      </Link>
    </div>
  );
};

const LogoStyle = () => css`
  @media (max-width: 576px) {
    position: absolute;
    width: 170px !important;
    height: 30px !important;
  }
`;

export default Logo;
