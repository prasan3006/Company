import { css } from "emotion";

const ServiceGalleryStyle = () => css`
  .custom-services-card {
    margin-bottom: 20px;
    .title {
      text-align: center;
    }
    .description {
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
      overflow-wrap: break-word;
    }
    .service-button {
      display: block;
      margin-bottom: 20px;
      width: fit-content;
      padding: 0 20px;
      font-size: 15px;
      font-weight: 400;
      height: fit-content;
      line-height: 30px;
    }
  }
`;

export default ServiceGalleryStyle;
