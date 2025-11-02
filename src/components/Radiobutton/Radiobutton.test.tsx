import { render, screen } from "@testing-library/react";
import Radio from "./Radiobutton";

describe("Radio Component", () => {
  test("renders the radio button", () => {
    render(<Radio label="Test Radio" name="group1" value="1" />);
    expect(screen.getByLabelText("Test Radio")).toBeInTheDocument();
  });

  test("disables the radio button when disabled prop is true", () => {
    render(<Radio label="Disabled Radio" name="group1" value="2" disabled />);
    const radio = screen.getByLabelText("Disabled Radio") as HTMLInputElement;
    expect(radio.disabled).toBe(true);
  });
});
