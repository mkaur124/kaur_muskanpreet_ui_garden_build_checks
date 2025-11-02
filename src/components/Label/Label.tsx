// Label.tsx
import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.span<{ disabled?: boolean; color?: string }>`
  font-size: 16px;
  color: ${(props) => (props.disabled ? "#aaa" : props.color || "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

const Label: React.FC<LabelProps> = ({ text, disabled, color }) => {
  return (
    <StyledLabel disabled={disabled} color={color}>
      {text}
    </StyledLabel>
  );
};

export default Label;
