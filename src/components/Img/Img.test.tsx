// import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Img from "./Img";

describe("Img Component", () => {
  test("renders the image and is visible", () => {
    render(<Img src="https://via.placeholder.com/150" alt="Placeholder" />);
    const imgElement = screen.getByAltText("Placeholder");
    expect(imgElement).toBeVisible();
  });

  test("changes style when disabled", () => {
    render(
      <Img src="https://via.placeholder.com/150" alt="Placeholder" disabled />,
    );
    const imgElement = screen.getByAltText("Placeholder");
    expect(imgElement).toHaveStyle("filter: grayscale(100%)");
    expect(imgElement).toHaveStyle("cursor: not-allowed");
  });
});
