// Card.tsx
import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ disabled?: boolean }>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 250px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const Card: React.FC<CardProps> = ({ title, description, disabled }) => {
  return (
    <StyledCard disabled={disabled}>
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  );
};

export default Card;
