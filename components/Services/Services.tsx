import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServicesCarousel from "../ServicesCarousel/ServicesCarousel";

const Services = () => {
  return (
    <div className="rn-service-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="What we do"
              title="Services provided for you"
              description="We work with our customers in every phase of their business decision, helping them create maximum value with zero to little investment.
            "
            />
          </div>
        </div>
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default Services;
