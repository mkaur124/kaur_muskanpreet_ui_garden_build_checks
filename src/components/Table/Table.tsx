import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;

const StyledHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background-color: #f2f2f2;
  text-align: left;
`;

const StyledCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const Table: React.FC<TableProps> = ({ headers, data, disabled }) => {
  return (
    <StyledTable disabled={disabled}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <StyledHeader key={index}>{header}</StyledHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <StyledCell key={cellIndex}>{cell}</StyledCell>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td
            colSpan={headers.length}
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Total rows: {data.length}
          </td>
        </tr>
      </tfoot>
    </StyledTable>
  );
};

export default Table;
