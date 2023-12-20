import React from "react";
import ScaleInfo from "../ScaleInfo/ScaleInfo";
import Separator from "../Separator/Separator";
import Services from "./data";

const ServiceExplanation = () => {
  return (
    <>
      {Services.map((data, index) => {
        var isContentFirst = false;
        if (index % 2 === 0) {
          isContentFirst = true;
        }
        return (
          <>
            <ScaleInfo isContentFirst={isContentFirst} data={data} />
            <Separator />
          </>
        );
      })}
    </>
  );
};

export default ServiceExplanation;
