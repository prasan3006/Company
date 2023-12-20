import React from "react";
import KeenSlider from "../KeenSlider/KeenSlider";
import SectionTitle from "../SectionTitle/SectionTitle";
import ScaleInfoStyle from "./ScaleInfo.style";
import ScrollAnimation from "react-animate-on-scroll";

const ScaleInfo = (props) => {
  var contentOrder = "col-lg-5 col-md-5 col-sm-12 order-lg-1";
  var imageOrder =
    "col-lg-6 offset-lg-1 col-md-6 offset-md-1 col-sm-12 order-lg-2";
  if (!props.isContentFirst) {
    contentOrder =
      "col-lg-5 offset-lg-1 col-md-5 offset-md-1 col-sm-12 order-lg-2";
    imageOrder = "col-lg-6 col-md-6 col-sm-12 order-lg-1";
  }

  return (
    <div className={`rn-section-gap ${ScaleInfoStyle()}`}>
      <div className="container">
        <div className="row">
          <div className={contentOrder}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <img
                className="icon-image animated fadeInUp custom-icon"
                alt="icon-bg"
                src={props.data.icon}
              />
            </ScrollAnimation>
            <SectionTitle
              textAlign="left"
              radiusRounded=""
              subtitle={props.data.subtitle}
              title={props.data.title}
              description={props.data.description}
              paragraphJustify="justify-content"
            />
          </div>
          <div className={imageOrder}>
            <KeenSlider ImageList={props.data.imgList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleInfo;
