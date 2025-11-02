import { render, screen } from "@testing-library/react";
import Card from "./Card";
import "jest-styled-components";

describe("Card Component", () => {
  test("renders Card with title and description", () => {
    render(<Card title="Hello Card" description="This is a simple card" />);
    expect(screen.getByText("Hello Card")).toBeInTheDocument();
    expect(screen.getByText("This is a simple card")).toBeInTheDocument();
  });

  test("disabled Card shows cursor not-allowed", () => {
    render(
      <Card title="Disabled Card" description="Cannot interact" disabled />,
    );

    const cardElement = screen.getByText("Disabled Card").parentElement;
    expect(cardElement).toHaveStyle("cursor: not-allowed");
    expect(cardElement).toHaveStyle("opacity: 0.5"); // Optional, if you grey it out
  });
});
