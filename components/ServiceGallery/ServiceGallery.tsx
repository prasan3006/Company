import React from "react";
import { Link } from "gatsby";
import ScrollAnimation from "react-animate-on-scroll";
import { ServiceList } from "./data";
import ServiceGalleryStyle from "./ServiceGallery.style";

const ServiceGallery = ({ textAlign, serviceStyle }) => {
  return (
    <div className={ServiceGalleryStyle()}>
      <div className="row row--15 service-wrapper">
        {ServiceList.map((val, i) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12 custom-services-card"
            key={i}
          >
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <div className={`service ${serviceStyle} ${textAlign}`}>
                <div className="inner">
                  <div className="content">
                    <h4 className="title">
                      <Link
                        to="#service"
                        dangerouslySetInnerHTML={{ __html: val.title }}
                      ></Link>
                    </h4>
                    <p
                      className="description"
                      dangerouslySetInnerHTML={{ __html: val.description }}
                    ></p>
                    {val.services.map((service, serviceKey) => (
                      <div key={serviceKey}>
                        <a
                          className="service-button btn-default round"
                          rel="noreferrer"
                          target="_blank"
                          href="https://themeforest.net/checkout/from_item/33571911?license=regular"
                        >
                          {service}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGallery;
