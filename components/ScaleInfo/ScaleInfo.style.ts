import { css } from "emotion";

const ScaleInfoStyle = () => css`
  .icon-image {
    width: 75px;
    height: 70px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .icon-image {
      margin-top: 30px;
    }
  }
`;

export default ScaleInfoStyle;
