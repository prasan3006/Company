import React, { useEffect } from "react";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import { FiX } from "react-icons/fi";

const MobileMenu = ({ show, onClose }) => {
  useEffect(() => {
    var elements = document.querySelectorAll(
      ".popup-mobile-menu .has-droupdown > a"
    );
    var elementsTwo = document.querySelectorAll(
      ".popup-mobile-menu .with-megamenu > a"
    );
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        var element = elements[i] as HTMLElement;
        element.onclick = function () {
          element.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          element.classList.toggle("open");
        };
      }
    }

    for (var j in elementsTwo) {
      if (elementsTwo.hasOwnProperty(j)) {
        var elementTwo = elementsTwo[j] as HTMLElement;
        elementTwo.onclick = function () {
          elementTwo.parentElement
            .querySelector(".rn-megamenu")
            .classList.toggle("active");
          elementTwo.classList.toggle("open");
        };
      }
    }
  }, []);

  return (
    <div className={`popup-mobile-menu ${show ? "active" : ""}`}>
      <div className="inner">
        <div className="header-top">
          <Logo />
          <div className="close-menu">
            <span className="close-button" onClick={onClose}>
              <FiX />
            </span>
          </div>
        </div>
        <Nav />
      </div>
    </div>
  );
};

export default MobileMenu;
