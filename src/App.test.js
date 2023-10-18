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

test("checkbox interaction changes button state", () => {
  render(<App />);

  // Check initial conditions: button enabled, checkbox unchecked
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", {
    name: /disable color button/i,
  });
  expect(checkbox).not.toBeChecked();

  // Check the checkbox and verify that the button is gray and disabled
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ "background-color": "gray" });
  expect(colorButton).toHaveTextContent(/change to blue/i);

  // Uncheck the checkbox and verify that the button is enabled and red
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ "background-color": "red" });
  expect(colorButton).toHaveTextContent(/change to blue/i);
});
