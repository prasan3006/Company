import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Team from "../Team/Team";

const Experts = () => {
  return (
    <div className="rwt-team-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="About us"
              title="Meet the team"
              description="Founded by an alumnus from Duke University and an Ex Amazon Engineer, <br /> Strategy Fox strives to provide International level business strategies to customers to ensure their rapid growth."
            />
          </div>
        </div>
        <Team
          column="col-lg-4 col-md-6 col-12"
          teamStyle="team-style-default style-two"
        />
      </div>
    </div>
  );
};

export default Experts;
