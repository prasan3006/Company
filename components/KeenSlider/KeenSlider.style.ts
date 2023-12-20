import { css } from "emotion";
import GradientBg from "../../assets/images/info/gradient.svg";

const KeenSliderStyle = () => css`
  width: 100%;
  height: 100%;

  [class^="number-slide"],
  [class*=" number-slide"] {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: #fff;
    font-weight: 500;
    height: 200px;
  }

  .navigation-wrapper {
    width: auto;
    height: 500px;
    position: relative;
    background-image: url(${GradientBg});
    padding: 20px;
    border-radius: 20px;
  }

  .keen-slider {
    width: 100%;
    height: 100%;
  }

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 15px;
  }

  .arrow--right {
    left: auto;
    right: 15px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }

  .slide-img {
    width: auto;
    height: 100%;
    padding: 20px;
    border-radius: 35px;
  }
`;

export default KeenSliderStyle;
