import styled from "styled-components";

// Color palette
export const color = {
  black: "#333333",
  white: "#FFFFFF",
  darkGrey: "#ABABAB",
  grey: "#F8F8F8",
  red: "#FF6767",
  blue: "#8EA7FF",
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
  tillTablet: `(max-width: ${size.tablet}px)`,
  tillLaptop: `(max-width: ${size.laptop}px)`,
};


export const transition = `
  transition: all 0.3s ease;
`;



