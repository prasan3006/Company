import React from "react";
import { useState, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Link } from "react-scroll";
import NavbarStyle from "./Navbar.style";

const Navbar = ({ btnStyle, HeaderSTyle }) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };

  const ref = useRef();
  const headerClasses = `header-default sticky`;

  return (
    <div className={NavbarStyle()}>
      {/* <header className="banner">
        <div className="container position-relative">
          <div className="row align-items-center">
            <div
              style={{ textAlign: "center", margin: "10px 0" }}
              className="col-lg-12 col-md-12 col-12 position-static"
            >
              Our website is currently being revamped. New website will be launched soon! Stay tuned!
            </div>
          </div>
        </div>
      </header> */}
      <header
        ref={ref}
        className={`rn-header header-default header-left-align ${HeaderSTyle} ${headerClasses}`}
      >
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-6 col-4 position-static">
              <div className="header-left d-flex">
                <Logo />
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-8">
              <div className="header-right">
                <div className="header-btn">
                  <Link
                    style={{ cursor: "pointer" }}
                    className="btn-default round"
                    to="sec-contact"
                    spy={true}
                  >
                    Let's Talk
                  </Link>
                </div>
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <span
                      className="hamberger-button"
                      onClick={onCanvasHandler}
                    >
                      <FiMenu />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </div>
  );
};

export default Navbar;
