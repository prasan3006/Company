import React from "react";
import { FiUser, FiCalendar } from "react-icons/fi";
import BlogStyle from "./Blog.style";

const Blog = ({ data }) => {
  return (
    <div className={BlogStyle()}>
      <div className="post-page-banner rn-section-gapTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content text-center">
                <div className="page-title">
                  <h1 className="theme-gradient">{data.title}</h1>
                </div>
                <ul className="rn-meta-list">
                  <li>
                    <FiUser />
                    {data.author}
                  </li>
                  <li>
                    <FiCalendar />
                    {data.date}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-details-content pt--60 rn-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="content">
                {data.body.map((value, i) => {
                  return (
                    <div key={i} dangerouslySetInnerHTML={{ __html: value }} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
