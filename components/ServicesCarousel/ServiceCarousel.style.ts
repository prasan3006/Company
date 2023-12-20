import { css } from "emotion";

const ServiceCarouselStyle = () => css`
  .shadow-effect {
    background: #1e1e1e;
    padding: 20px 20px 10px 20px;
    border-radius: 10px;
    text-align: center;
    height: 300px;
    padding: 20px;

    img {
      height: 200px;
      width: 250px;
      margin: auto;
    }

    .item-content {
      font-size: 20px;
      font-weight: 700;
      color: #fff;
      position: relative;
      top: 10px;
    }
  }

  #customer-testimonoals .item {
    text-align: center;
    padding: 50px;
    margin-bottom: 0px;
    opacity: 0.2;
    transform: scale3d(0.8, 0.8, 1);
    transition: all 0.3s ease-in-out;
  }

  #customer-testimonoals .owl-item.active.center .item {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }

  .owl-theme .owl-dots .owl-dot.active span,
  .owl-theme .owl-dots .owl-dot:hover span {
    background: #56423d;
    transform: translate3d(0px, -50%, 0px) scale(0.8);
  }

  .owl-carousel .owl-dots {
    display: inline-block;
    width: 100%;
    text-align: center;

    button:first-child {
      display: none;
    }
  }

  .owl-carousel .owl-dots .owl-dot {
    display: inline-block;
  }

  .owl-carousel .owl-dots .owl-dot span {
    /* background: #eaa400; */
    background: #56423d;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin: 0 2px 5px;
    transform: translate3d(0px, -50%, 0px) scale(0.3);
    transform-origin: 50% 50% 0;
    transition: all 250ms ease-out 0s;
  }
`;

export default ServiceCarouselStyle;
