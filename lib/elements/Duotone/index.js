import styled from "styled-components";
// import { applyStyleModifiers } from "styled-components-modifiers";

// import fontWeights from "../../modifiers/fontWeights";

// const customModifiers = {
//   italic: () => "font-style: italic;",
//   extraSmall: () => "font-size: 12px;",
//   small: () => "font-size: 14px;",
//   large: () => "font-size: 18px;"
// };

// const modifierConfig = { ...fontWeights, ...customModifiers };

// const Duotone = styled.div`
//   font-size: 16px;
//   margin: 0;
//   ${applyStyleModifiers(modifierConfig)};
// `;

const Duotone = styled.div`
  &::before {
    background-color: rgba(221, 204, 0, 1);
    mix-blend-mode: multiply;
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    transition: all 0.7s ease-in-out;
  }
  &::after {
    background-color: rgba(221, 0, 0, 1);
    mix-blend-mode: screen;
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    transition: all 0.7s ease-in-out;
  }
  background-image: url("https://unsplash.it/1200/800/?random");

  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  transition: all 0.35s ease-in-out;

  &:hover,
  &:hover::before,
  &:hover::after,
  &:focus,
  &:focus::before,
  &:focus::after {
    transform: scale(1);
    background-color: rgba(255, 255, 255, 0);
  }
`;

export default Duotone;
