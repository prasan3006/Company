import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { TeamData } from "./data";
import LocationSvg from "../../assets/images/location.svg";
import TeamStyle from "./Team.style";

const Team = ({ column, teamStyle }) => {
  return (
    <div className={TeamStyle()}>
      <div className="row row--15">
        {TeamData.map((data, index) => (
          <div className={`${column} custom-col`} key={index}>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOut="fadeInOut"
              animateOnce={true}
            >
              <div className={`rn-team ${teamStyle}`}>
                <div className="inner">
                  <figure className="thumbnail">
                    <img src={data.image} alt="Corporate React Template" />
                  </figure>
                  <figcaption className="content">
                    <h2 className="title">{data.name}</h2>
                    <h6 className="subtitle theme-gradient">
                      {data.designation}
                    </h6>
                    <span className="team-form">
                      <img src={LocationSvg} alt="location.svg" />
                      <span className="location">{data.location}</span>
                    </span>
                    <p className="description text-align-justify custom-description">
                      {data.description}
                    </p>

                    <ul className="social-icon social-default icon-naked mt--20">
                      {data.socialNetwork.map((social, index) => (
                        <li key={index}>
                          <a href={`${social.url}`}>{social.icon}</a>
                        </li>
                      ))}
                    </ul>
                  </figcaption>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
