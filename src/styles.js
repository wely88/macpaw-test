import styled from "styled-components";

// Color palette
export const color = {
  black: "#333333",
  white: "#FFFFFF",
  darkGrey: "#ABABAB",
  grey: "#F8F8F8",
  red: "#FF6767",
};

// Based on: https://jsramblings.com/2018/02/04/styled-components-media-queries.html
export const size = {
  mobile: "320",
  tablet: "768",
  laptop: "1024",
};

export const device = {
  mobile: `(min-width: ${size.mobileS}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  laptop: `(min-width: ${size.laptop}px)`,
};


export const transition = `
  transition: all 0.3s ease;
`;

// Containers' css
export const AppWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  padding: 0 32px;
  margin: 0 auto;
  box-sizing: border-box;
`;


