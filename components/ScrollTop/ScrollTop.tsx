import { css } from "emotion";
import React, { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import Blury from "../Blury/Blury";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      <div
        className={scrollTopStyle()}
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FiChevronUp color="#fff" />
      </div>
      <Blury />
    </>
  );
};

const scrollTopStyle = () => css`
  position: fixed;
  bottom: 30px;
  left: 30px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  line-height: 46px;
  text-align: center;
  background-color: var(--color-blackest);
  z-index: 999 !important;
  border-radius: 50%;
`;

export default ScrollTop;
