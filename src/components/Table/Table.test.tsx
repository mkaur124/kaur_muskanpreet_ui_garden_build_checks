// import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("renders table headers", () => {
  render(<Table headers={["Name", "Age"]} data={[["Alice", 25]]} />);
  expect(screen.getByText("Name")).toBeVisible();
  expect(screen.getByText("Age")).toBeVisible();
});

test("renders table data", () => {
  render(<Table headers={["Name", "Age"]} data={[["Alice", 25]]} />);
  expect(screen.getByText("Alice")).toBeVisible();
  expect(screen.getByText("25")).toBeVisible();
});
