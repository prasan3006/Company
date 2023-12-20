import { css } from "emotion";

const NavbarStyle = () => css`
  .banner {
    color: #000;
    background-color: transparent;
    background: linear-gradient(
        95deg,
        var(--color-primary) 15%,
        var(--color-tertiary) 45%,
        var(--color-pink) 75%,
        var(--color-secondary) 100%
      )
      95%/200% 100%;
    font-size: 18px;
    font-weight: 600;
  }
`;

export default NavbarStyle;
