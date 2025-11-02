// import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("button renders correctly", () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText("Test Button")).toBeVisible();
});

test("button is grey when disabled", () => {
  render(<Button label="Disabled" disabled />);
  const button = screen.getByText("Disabled");
  expect(button).toHaveStyle("background-color: #ccc");
});
