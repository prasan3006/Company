import React from "react";
import ServiceCarouselStyle from "./ServiceCarousel.style";

const OwlCarousel = (() => {
  if (typeof window !== "undefined") {
    return require("react-owl-carousel");
  }
})();

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CarouselComponent = () => {
  const options = {
    loop: true,
    center: true,
    items: 5,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 1500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      1100: {
        items: 1,
      },
      1101: {
        items: 3,
      },
    },
  };

  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <OwlCarousel
      id="customer-testimonoals"
      className="owl-carousel owl-theme"
      {...options}
    >
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/1-concept-selling.png" />
          <div className="item-content">Concept Selling</div>
        </div>
      </div>
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/2-performance-marketing.png" />
          <div className="item-content">Performance Marketing</div>
        </div>
      </div>
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/3-advanced-technology.png" />
          <div className="item-content">Advanced Technology</div>
        </div>
      </div>
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/4-brand-revamp.png" />
          <div className="item-content">Brand Revamp</div>
        </div>
      </div>
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/5-supply-chain-management.png" />
          <div className="item-content">Supply Chain Management</div>
        </div>
      </div>
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/6-market-research.png" />
          <div className="item-content">Market Research</div>
        </div>
      </div>
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/7-product-design.png" />
          <div className="item-content">Product Design</div>
        </div>
      </div>
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/8-raising-capital.png" />
          <div className="item-content">Raising Capital</div>
        </div>
      </div>
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/9-growth-engineering.png" />
          <div className="item-content">Growth Engineering</div>
        </div>
      </div>
      <div className="item">
        <div className="shadow-effect">
          <img src="images/services/10-international-expansion.png" />
          <div className="item-content">International Expansion</div>
        </div>
      </div>
    </OwlCarousel>
  );
};

const ServicesCarousel = () => {
  return (
    <div className={ServiceCarouselStyle()}>
      <section id="testimonial" className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <CarouselComponent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCarousel;
