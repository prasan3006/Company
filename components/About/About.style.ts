import { css } from "emotion";

const AboutStyle = () => css`
  padding-top: 100px;
  .rn-section-gap {
    padding-top: 0 !important;
  }

  .thumbnail {
    text-align: center;
  }

  .about-fox-gif {
    border-radius: 10px;
    padding: 10px;
    position: relative;
    top: -25px;
    max-width: 350px;
    max-height: 650px;
    border-radius: 45px;
  }

  .text-align-justify {
    text-align: justify !important;
  }

  .section-title {
    p {
      position: relative;
      top: -10px;
    }
  }
`;

export default AboutStyle;
