// src/components/Radiobutton/Radiobutton.tsx
import React from "react";
import styled from "styled-components";

// Define the props type
export interface RadiobuttonProps {
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
}

// Styled input and label
const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => (props.disabled ? "gray" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const StyledInput = styled.input`
  cursor: inherit;
`;

const Radiobutton: React.FC<RadiobuttonProps> = ({
  label,
  name,
  value,
  disabled,
}) => {
  return (
    <StyledLabel disabled={disabled}>
      <StyledInput type="radio" name={name} value={value} disabled={disabled} />
      {label}
    </StyledLabel>
  );
};

export default Radiobutton;
