import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has initial text and color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ "background-color": "red" });
});
test("button changes color and text when clicked, reverts to initial color and text when re-clicked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": "blue" });
  expect(colorButton).toHaveTextContent(/change to red/i);

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": "red" });
  expect(colorButton).toHaveTextContent(/change to blue/i);
});
