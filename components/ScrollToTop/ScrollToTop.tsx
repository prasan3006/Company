import { useEffect } from "react";

const PageScrollTop = (props) => {
  useEffect(() => {
    if (window.location.pathname === "/" && window.location.hash === "") {
      window.scrollTo(0, 0);
    }
  });
  return props.children;
};

export default PageScrollTop;
