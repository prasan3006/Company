import React from "react";
import { Link } from "react-scroll";
import { HeaderComponentStyle } from "./Header.style";
import HeaderVideo from "../../../static/header.mp4";
import HeaderVideoMobile from "../../../static/header-mobile.mp4";

const Header = () => {
  return (
    <div className={HeaderComponentStyle()}>
      <div className="slider-area slider-style-1 bg-transparent custom-header">
        <div id="header-video-wrapper">
          <video
            loop
            muted
            autoPlay
            playsInline
            disableRemotePlayback
            preload="auto"
            className="header-video-big"
          >
            <source src={HeaderVideo} type="video/mp4" />
          </video>
          <video
            loop
            muted
            autoPlay
            playsInline
            disableRemotePlayback
            preload="auto"
            className="header-video-small"
          >
            <source src={HeaderVideoMobile} type="video/mp4" />
          </video>
        </div>
        <div className="inner text-center custom-text">
          <div className="custom-text-wrapper">
            <div className="custom-text-header">
              The <span className="gradiently"> End-to-End </span>eCommerce
              Service Provider
            </div>
            <div className="custom-text-description">
              We partner with potential brands and turbo charge their growth. A
              one stop solution for all business needs.
            </div>
          </div>
          <div className="heading-button-wrapper">
            <Link
              style={{ cursor: "pointer" }}
              className="btn-default"
              to="sec-contact"
              spy={true}
            >
              Partner with us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
