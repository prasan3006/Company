import { css } from "emotion";
import ReadyBg from "../../assets/images/ready-bg.png";

const ServiceCarouselStyle = () => css`
  .custom-bg {
    background-image: url(${ReadyBg});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
  }
`;

export default ServiceCarouselStyle;
