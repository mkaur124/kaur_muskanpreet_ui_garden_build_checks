import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const StyledHero = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  ${(props) =>
    props.disabled &&
    `
      filter: grayscale(100%);
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled }) => {
  return <StyledHero src={src} alt={alt} disabled={disabled} />;
};

export default HeroImage;
