import { render, screen } from "@testing-library/react";
import HeroImage from "./HeroImage";

test("renders HeroImage", () => {
  render(<HeroImage src="/logo512.png" alt="Test Hero" />);
  const hero = screen.getByAltText("Test Hero");
  expect(hero).toBeVisible();
});

test("applies disabled state", () => {
  render(<HeroImage src="/logo512.png" alt="Test Hero" disabled />);
  const hero = screen.getByAltText("Test Hero");
  expect(hero).toHaveStyle("opacity: 0.5");
});
