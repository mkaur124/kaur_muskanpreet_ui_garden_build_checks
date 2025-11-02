import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const Select = styled.select<{ disabled?: boolean }>`
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.disabled ? "#eee" : "white")};
  color: ${(props) => (props.disabled ? "#888" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled }) => {
  return (
    <Select disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
