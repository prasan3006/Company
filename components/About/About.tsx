import React from "react";
import AboutStyle from "./About.style";
import AboutGif from "../../assets/images/about.gif";

const About = () => {
  return (
    <div className={AboutStyle()}>
      <div className="rwt-about-area rn-section-gap">
        <div className="container">
          <div className="row row--30 align-items-center">
            <div className="col-lg-5">
              <div className="thumbnail">
                <img
                  className="w-100 about-fox-gif"
                  src={AboutGif}
                  alt="about.gif"
                />
              </div>
            </div>
            <div className="col-lg-6 mt_md--40 mt_sm--40">
              <div className="content text-align-justify">
                <div className="section-title">
                  <h2 className="title">
                    Why Strategy Fox <br />
                  </h2>
                  <h4>Our Mission:</h4>
                  <p>
                    Our mission is to empower consumer brands and bring their
                    products and stories to a global audience, thereby making
                    Indian brands a Global household name, creating economic
                    opportunities and fostering cultural exchange through
                    commerce.
                  </p>
                  <h4>Who we are:</h4>
                  <p>
                    Strategy Fox is a fast-growing company with experienced
                    talented minds around the world having international
                    business exposure and are adept at problem solving and
                    creative thinking. We do both Strategy and Implementation.
                    <br /> <br />
                    We focus on creating customer obsessed Innovations and
                    delivering results. Our Tech-first approach enables us to
                    nurture next-generation consumer brands and scale them
                    exponentially.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
