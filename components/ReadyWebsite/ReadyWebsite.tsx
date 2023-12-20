import React from "react";
import ServiceCarouselStyle from "./ReadyWebsite.style";

const ReadyWebsite = () => {
  return (
    <div className={`main-content ${ServiceCarouselStyle()}`}>
      <div className="rwt-callto-action-area rn-section-gapBottom">
        <div className="wrapper">
          <div className="rn-callto-action clltoaction-style-default style-3 bg_image custom-bg">
            <div className="container">
              <div className="row row--0 align-items-center content-wrapper">
                <div className="col-lg-8">
                  <div className="inner">
                    <div className="content text-left">
                      <h2 className="title">
                        Let the world know your name and story!
                      </h2>
                      <h6 className="subtitle">
                        Elevate your brand to new heights with our Global
                        Launchpad
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="call-to-btn text-left text-lg-right">
                    <a className="btn-default" href="#">
                      Build your legacy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyWebsite;
