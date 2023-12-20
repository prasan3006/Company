import React from "react";
import AccordionOne from "../AccordionOne/AccordionOne";
import SectionTitle from "../SectionTitle/SectionTitle";

const Accordion = () => {
  return (
    <div className="rn-service-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="What we do"
              title="Frequently asked questions"
              description="Always feel free to contact us for a free call if you have any questions, we would love to connect and answer all your questions."
            />
          </div>
        </div>
        <AccordionOne />
      </div>
    </div>
  );
};

export default Accordion;
