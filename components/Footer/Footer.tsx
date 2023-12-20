import React from "react";
import { Link } from "gatsby";
import FooterData from "./data";
import ScrollTop from "../ScrollTop/ScrollTop";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import FooterStyle from "./Footer.style";

const footerIntemOne = FooterData[1];
const footerIntemTwo = FooterData[2];
const footerIntemThree = FooterData[3];
const footerIntemFour = FooterData[4];
const footerIntemFive = FooterData[5];

const indexOneLink = footerIntemOne.quicklink;
const indexTwoLink = footerIntemTwo.quicklink;
const indexThreeLink = footerIntemThree.quicklink;

const Footer = () => {
  return (
    <div className={FooterStyle()}>
      <footer className="rn-footer footer-style-default variation-two">
        {/* <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">{footerIntemOne.title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {indexOneLink.map((data, index) => (
                        <li key={index}>
                          <Link to={`${data.url}`}>{data.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <div className="widget-menu-top">
                    <h4 className="title">{footerIntemTwo.title}</h4>
                    <div className="inner">
                      <ul className="footer-link link-hover">
                        {indexThreeLink.map((data, index) => (
                          <li key={index}>
                            <Link to={`${data.url}`}>{data.text}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">{footerIntemThree.title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {indexTwoLink.map((data, index) => (
                        <li key={index}>
                          <Link to={`${data.url}`}>{data.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">{footerIntemFour.title}</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {indexTwoLink.map((data, index) => (
                        <li key={index}>
                          <Link to={`${data.url}`}>{data.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="rn-footer-widget">
                  <h4 className="title">{footerIntemFive.title}</h4>
                  <div className="inner">
                    <h6 className="subtitle">{footerIntemFive.subtitle}</h6>
                    <ul className="social-icon social-default justify-content-start">
                      <li>
                        <Link to="facebook.com">
                          <FiFacebook />
                        </Link>
                      </li>
                      <li>
                        <Link to="twitter.com">
                          <FiTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="instagram.com">
                          <FiInstagram />
                        </Link>
                      </li>
                      <li>
                        <Link to="linkdin.com">
                          <FiLinkedin />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="copyright-area copyright-style-one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="section-wrapper">
                  <div style={{ fontSize: "16px" }}>
                    Copyright © {new Date().getFullYear()} Strategy Fox
                  </div>
                  <div>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ScrollTop />
    </div>
  );
};

export default Footer;
