import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import ClientOutcome from "../../assets/images/client-outcome.png";

const Data = [
  {
    countNum: 100,
    countTitle: "Product Categories",
    suffix: "+",
    decimals: 0,
  },
  {
    countNum: 322,
    countTitle: "Q1 Growth rate",
    suffix: "%",
    decimals: 0,
  },
  {
    countNum: 3,
    countTitle: "Global sales",
    suffix: "X",
    decimals: 0,
  },
  {
    countNum: 4.8,
    countTitle: "Star Ratings",
    suffix: "/5",
    decimals: 1,
  },
];

const Clients = () => {
  return (
    <div className="rwt-split-area rn-section-gap">
      <div className="wrapper">
        <div className="row">
          <div className="col-lg-12 mb--40">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="Stats"
              title="Our stats speak for us"
              description="We are hellbent on delivering results and 
              sales performance which are sustainable."
            />
          </div>
        </div>
        <div className="rn-splite-style bg-color-blackest">
          <div className="split-wrapper">
            <div className="row no-gutters radius-10 align-items-center">
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="thumbnail">
                  <img
                    style={{ opacity: "0.9" }}
                    src={ClientOutcome}
                    alt="client-outcome.png"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-12">
                <div className="split-inner">
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                  >
                    <h4 className="title">Build your legacy with us</h4>
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}
                  >
                    <p className="description">
                      If you are a manufacturer, product expert, designer,
                      reseller or an Amazon FBA seller passionate about
                      connecting to consumers directly and building your brand,
                      kindly reach out to us for a potential collaboration.
                      Focus on creating better products for the world while we
                      take care of the business part.
                    </p>
                  </ScrollAnimation>

                  <div className="row">
                    {Data.map((data, index) => (
                      <div
                        className="col-lg-6 col-md-6 col-sm-6 col-12"
                        key={index}
                      >
                        <div className="count-box counter-style-4 text-left">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <div className="count-number">
                                  {isVisible ? (
                                    <CountUp end={data.countNum} suffix={data.suffix} decimals={data.decimals} />
                                  ) : (
                                    0
                                  )}
                                </div>
                              )
                            }
                          </TrackVisibility>
                          <h5 className="counter-title">{data.countTitle}</h5>
                        </div>
                      </div>
                    ))}
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

export default Clients;
