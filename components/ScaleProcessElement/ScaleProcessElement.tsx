import React from "react";
import IconBg from "../../assets/images/process/icon-bg.svg";
import ScaleProcessElementStyle from "./ScaleProcessElement.style";

const ScaleProcessElement = (props) => {
  return (
    <li className={ScaleProcessElementStyle()}>
      <div className="heading">{props.title}</div>
      <img className="image-background" alt="icon" src={IconBg} />
      <span className="icon-image-wrapper">
        <img className="icon-image" alt="icon-bg" src={props.icon} />
      </span>
    </li>
  );
};

export default ScaleProcessElement;
