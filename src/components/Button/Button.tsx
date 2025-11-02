import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

// Styled button
const StyledButton = styled.button<{
  disabled?: boolean;
  backgroundColor?: string;
}>`
  background-color: ${(props) =>
    props.disabled ? "#ccc" : props.backgroundColor || "#007bff"};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  backgroundColor,
  onClick,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
