import React from "react";
import BlogList from "../BlogList/BlogList";
import SectionTitle from "../SectionTitle/SectionTitle";
import BlogListData from "./data";

const CoreValues = () => {
  return (
    <div className="blog-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle
              textAlign="text-center"
              radiusRounded=""
              subtitle="Core Values"
              title="Our Leadership Principles"
              description="We have a drive to relentlessly pursue our values"
              paragraphJustify=""
            />
          </div>
        </div>
        <div className="row row--15">
          {BlogListData.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
              <BlogList StyleVar="box-card-style-default" data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
