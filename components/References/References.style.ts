import { css } from "emotion";

const ReferencesStyle = () => css`
  margin-top: 120px;
  margin-bottom: 170px;

  .rn-service-area {
    margin-bottom: 50px;
  }

  .custom-ref-image {
    max-height: 170px;
    max-width: 230px;
  }

  .custom-image-row {
    display: flex;
    align-items: center;
    div {
      text-align: center;
    }
  }

  @media (max-width: 1199px) {
    .custom-ref-image {
      max-height: 150px;
      max-width: 210px;
    }
  }
`;

export default ReferencesStyle;
