import React from "react";
import BlogListStyle from "./BlogList.style";

const BlogList = ({ data, StyleVar }) => {
  return (
    <div className={`rn-card ${StyleVar} ${BlogListStyle()}`}>
      <div className="inner">
        <div className="thumbnail">
          <img className="blog-min-image" src={data.image} alt="Blog Image" />
        </div>
        <div className="content">
          <h4 className="title">{data.title}</h4>
          <p className="description">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
