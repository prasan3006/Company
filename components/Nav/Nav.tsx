import React from "react";
import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const GetLink = (props: any) => {
    if (typeof window !== `undefined` && window.location.pathname === "/") {
      return (
        <ScrollLink to={props.to} spy={true} offset={props.offset}>
          {props.value}
        </ScrollLink>
      );
    }
    return <Link to={"/#" + props.to}>{props.value}</Link>;
  };
  return (
    <ul className="mainmenu">
      <li style={{ cursor: "pointer" }}>
        <GetLink to="sec-about" value="Overview" offset={0} />
      </li>
      <li style={{ cursor: "pointer" }}>
        <GetLink to="sec-services" value="Services" offset={0} />
      </li>
      <li style={{ cursor: "pointer" }}>
        <GetLink to="sec-process" value="Approach" offset={0} />
      </li>
      <li style={{ cursor: "pointer" }}>
        <GetLink to="sec-references" value="Clients" offset={-80} />
      </li>
      <li style={{ cursor: "pointer" }}>
        <GetLink
          to="sec-accordion"
          value="FAQs"
          scrollOffset={100}
          offset={0}
        />
      </li>
      <li style={{ cursor: "pointer" }}>
        <GetLink to="sec-experts" value="About" offset={0} />
      </li>
      <li style={{ cursor: "pointer" }}>
        <GetLink to="sec-contact" value="Contact" offset={0} />
      </li>
    </ul>
  );
};

export default Nav;
