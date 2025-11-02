import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text Component", () => {
  test("renders the text", () => {
    render(<Text>Test Text</Text>);
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  test("applies disabled styles", () => {
    render(<Text disabled>Disabled Text</Text>);
    const text = screen.getByText("Disabled Text");
    expect(text).toHaveStyle("color: grey");
    expect(text).toHaveStyle("cursor: not-allowed");
  });
});
