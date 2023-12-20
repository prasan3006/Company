import { css } from "emotion";

const ContactFormStyle = () => css`
  .custom-submit {
    margin: 0 auto;
    display: block;
    border-radius: 50px !important;
  }

  .form-group input {
    height: 50px !important;
  }

  .form-group textarea {
    min-height: 170px !important;
  }

  .contact-result {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    color: white;
    background: linear-gradient(95deg, var(--color-primary) 15%, var(--color-tertiary) 45%, var(--color-pink) 75%, var(--color-secondary) 100%) 95%/200% 100%;
    border-radius: 15px;
    text-transform: uppercase;
  }

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default ContactFormStyle;
