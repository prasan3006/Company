import { css } from "emotion";

const BlogListStyle = () => css`
  .blog-min-image {
    width: 100% !important;
    height: 250px !important;
  }
  .content {
    text-align: center;
    p {
      margin-top: 15px;
      text-align: justify;
      line-height: 24px;
      font-size: 15.5px;
    }
  }
`;

export default BlogListStyle;
