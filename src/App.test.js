import { fireEvent, render, screen } from "@testing-library/react";
import { COLORS } from "./App.constants";
import { formatColorName } from "./App.services";
import App from "./App";

test("button has initial text and color", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: new RegExp(`change to ${formatColorName(COLORS.alternate)}`, "i"),
  });
  expect(colorButton).toHaveStyle({ "background-color": COLORS.initial });
});

test("button changes color and text when clicked, reverts to initial color and text when re-clicked", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", {
    name: new RegExp(`change to ${formatColorName(COLORS.alternate)}`, "i"),
  });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": COLORS.alternate });
  expect(colorButton).toHaveTextContent(
    new RegExp(`change to ${formatColorName(COLORS.initial)}`, "i")
  );

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ "background-color": COLORS.initial });
  expect(colorButton).toHaveTextContent(
    new RegExp(`change to ${formatColorName(COLORS.alternate)}`, "i")
  );
});

test("checkbox interaction changes button state", () => {
  render(<App />);

  // Check initial conditions: button enabled, checkbox unchecked
  const colorButton = screen.getByRole("button", {
    name: new RegExp(`change to ${formatColorName(COLORS.alternate)}`, "i"),
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox", {
    name: /disable color button/i,
  });
  expect(checkbox).not.toBeChecked();

  // Check the checkbox and verify that the button is disabled and with disabled color
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ "background-color": COLORS.disabled });
  expect(colorButton).toHaveTextContent(
    new RegExp(`change to ${formatColorName(COLORS.alternate)}`, "i")
  );

  // Uncheck the checkbox and verify that the button is enabled and with initial color
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ "background-color": COLORS.initial });
  expect(colorButton).toHaveTextContent(
    new RegExp(`change to ${formatColorName(COLORS.alternate)}`, "i")
  );
});
