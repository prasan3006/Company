import { css } from "emotion";

export const HeaderComponentStyle = () => css`
  .custom-header {
    height: 850px;
    max-width: 900px;
    margin: 0 auto;
  }

  .header-video-big,
  .header-video-small {
    position: absolute;
    top: 70px;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: opacity(75%);
    object-fit: cover;
  }

  .custom-text {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .custom-text-header {
      color: white;
      margin-top: 100px;
      font-size: 54px;
      font-weight: 700;
      line-height: 1.1;
    }

    .custom-text-description {
      color: white;
      margin-top: 12px;
      font-size: 17px;
    }
  }

  .gradiently {
    background: linear-gradient(
      269.2deg,
      #4dbad6 13.54%,
      #348cf4 50.52%,
      #7b48e8 85.94%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .heading-button-wrapper {
    margin-top: 40px;
  }

  @media (max-width: 991px) {
    .custom-text {
      padding: 0 15px;
    }
  }

  @media (max-width: 716px) {
    .custom-text-header {
      font-size: 44px !important;
    }

    .custom-text-description {
      font-size: 15px !important;
    }
  }

  @media (min-width: 426px) {
    .header-video-big {
      display: block;
    }
    .header-video-small {
      display: none;
    }
  }

  @media (max-width: 425px) {
    .header-video-big {
      display: none;
    }
    .header-video-small {
      display: block;
    }
  }

  @media (max-width: 400px) {
    .custom-text {
      height: 75vh;
    }

    .custom-text-header {
      font-size: 38px !important;
    }

    .custom-text-description {
      font-size: 14px !important;
    }
  }
`;
