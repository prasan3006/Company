import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import {
  FiFacebook,
  FiPhone,
  FiMail,
  FiMapPin,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";
import ContactStyle from "./Contact.style";

const Contact = () => {
  return (
    <div className={ContactStyle()}>
      <div className="rwt-contact-area rn-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="Contact Form"
                title="Contact Us Here"
                description="We are glad to talk to you. Please call us anytime."
              />
            </div>
          </div>
          <div className="row row--15">
            <div className="col-lg-12">
              <div className="rn-contact-address mt_dec--30">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="rn-address">
                            <div className="icon">
                              <FiPhone />
                              <h4 className="title">Phone and Whatsapp</h4>
                            </div>
                            <div className="inner">
                              <p>
                                <a href="tel:+91 89030 04922">
                                  IND: +91 89030 04922
                                </a>
                              </p>
                              <p>
                                <a href="tel:+1 (984) 209-8254 ">
                                  US: +1 (984) 209-8254
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="rn-address">
                            <div className="icon">
                              <FiMail />
                              <h4 className="title">Email Address</h4>
                            </div>
                            <div className="inner">
                              <p>
                                <a href="mailto:pradeep@strategyfox.in">
                                  pradeep@strategyfox.in
                                </a>
                              </p>
                              <p>
                                <a href="mailto:thilagapradeep@gmail.com">
                                  thilagapradeep@gmail.com
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="rn-address">
                            <div className="icon">
                              <FiMapPin />
                              <h4 className="title">Location</h4>
                            </div>
                            <div className="inner">
                              <p>
                                848 Selvanagar, <br /> Salem, TN - 636014
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <ul className="social-icon social-default justify-content-start">
                            <li>
                              <a
                                href="https://www.facebook.com/strategyfoxbusiness"
                                rel="noreferrer"
                                target="_blank"
                              >
                                <FiFacebook />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/StrategyFox_in"
                                rel="noreferrer"
                                target="_blank"
                              >
                                <FiTwitter />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/strategyfox/"
                                rel="noreferrer"
                                target="_blank"
                              >
                                <FiInstagram />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/company/strategy-fox-company/"
                                rel="noreferrer"
                                target="_blank"
                              >
                                <FiLinkedin />
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/channel/UCvzN_lQ_WO7NbklyQSk9MPA"
                                rel="noreferrer"
                                target="_blank"
                              >
                                <FiYoutube />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="offset-lg-1 col-lg-6">
                    <ContactForm formStyle="contact-form-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt--40 row--15"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
