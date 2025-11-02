import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImg = styled.img<{ disabled?: boolean }>`
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  ${(props) =>
    props.disabled &&
    `
      filter: grayscale(100%);
      cursor: not-allowed;
      opacity: 0.6;
    `}
`;

const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
};

export default Img;
