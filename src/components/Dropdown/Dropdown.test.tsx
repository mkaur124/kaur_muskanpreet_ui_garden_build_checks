// import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  test("renders with options", () => {
    render(<Dropdown options={["Option 1", "Option 2"]} />);

    // Check that options are visible
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  test("applies disabled state correctly", () => {
    render(<Dropdown options={["Option 1"]} disabled={true} />);

    const selectElement = screen.getByRole("combobox"); // <select> role
    expect(selectElement).toBeDisabled();
    // Optional: check style if you want
    expect(selectElement).toHaveStyle("background-color: #eee");
  });
});
