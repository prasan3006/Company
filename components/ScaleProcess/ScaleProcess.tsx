import React from "react";
import Approach from "../Approach/Approach";
import SectionTitle from "../SectionTitle/SectionTitle";

// import GoalSettingImage from "../../assets/images/process/dart.png";
// import ResearchImage from "../../assets/images/process/analysis.png";
// import IdeationImage from "../../assets/images/process/idea.png";
// import ExecutionImage from "../../assets/images/process/implementation.png";

import ScaleProcessStyle from "./ScaleProcess.style";

const ScaleProcess = () => {
  return (
    <div className={ScaleProcessStyle()}>
      <div className="rn-service-area rn-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SectionTitle
                textAlign="text-center"
                radiusRounded=""
                subtitle="How we do"
                title="Our structured approach"
                description="Discover a glimpse of our D2C playbook where we have created a seven step approach on brand building. <br /> Explore each step to discover more insights."
              />
            </div>
            <Approach />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleProcess;
