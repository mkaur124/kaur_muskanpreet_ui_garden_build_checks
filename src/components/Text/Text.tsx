import React from "react";
import { TextProps } from "./Text.types";
import styled from "styled-components";

const StyledText = styled.span<TextProps>`
  color: ${({ color, disabled }) => (disabled ? "grey" : color || "black")};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "auto")};
`;

const Text: React.FC<TextProps> = ({ children, disabled, color, fontSize }) => {
  return (
    <StyledText disabled={disabled} color={color} fontSize={fontSize}>
      {children}
    </StyledText>
  );
};

export default Text;
