import { css } from "emotion";

const ScaleProcessElementStyle = () => css`
  position: relative;
  cursor: pointer;

  .image-background {
    display: block;
    max-width: 100%;
    width: initial;
    height: initial;
  }

  .heading {
    text-align: center !important;
    width: 100%;
    position: absolute;
    top: 10px;
    left: -14px;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
  }

  .icon-image-wrapper {
    display: flex;
    width: 100%;
    margin-left: 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: center;

    .icon-image {
      display: block;
      width: 95px;
      height: 90px;
      opacity: 1;
      border: 0;
      margin: 0;
    }
  }

  @media (max-width: 991px) {
    .heading {
      font-size: 14px;
    }
    .icon-image-wrapper {
      .icon-image {
        width: 75px;
        height: 70px;
      }
    }
  }

  @media (max-width: 768px) {
    .heading {
      left: -15px;
      font-size: 12px;
    }
    .icon-image-wrapper {
      left: -5px;
      .icon-image {
        width: 45px;
        height: 40px;
      }
    }
  }

  @media (max-width: 576px) {
    .heading {
      left: -2px;
      font-size: 6px;
    }
    .icon-image-wrapper {
      .icon-image {
        width: 30px;
        height: 25px;
      }
    }
  }
`;

export default ScaleProcessElementStyle;
