// import React from "react";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

test("renders the label", () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText("Test Label")).toBeVisible();
});

test("label changes color", () => {
  render(<Label text="Colored Label" color="red" />);
  const label = screen.getByText("Colored Label");
  expect(label).toHaveStyle("color: red");
});
