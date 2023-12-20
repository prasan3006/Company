import { css } from "emotion";

const ContactStyle = () => css`
  .rn-contact-address {
    margin-top: 25px;
  }

  .rn-address {
    margin: 0 0 20px 0;
    padding: 18px 25px !important;
  }

  .icon {
    display: flex !important;
    margin-bottom: 0px;
    svg {
      width: 30px;
      height: 30px;
    }
    .title {
      margin-left: 10px;
      position: relative;
      top: 5px;
      font-size: 20px;
    }
  }

  .social-icon li a {
    width: 60px;
    height: 60px;
    svg {
      position: relative;
      top: 5px;
      width: 25px;
      height: 25px;
    }
  }

  .inner {
    p {
      font-size: 16px !important;
    }
  }
`;

export default ContactStyle;
