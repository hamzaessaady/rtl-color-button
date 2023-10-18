import { formatColorName } from "./App.services";

describe("display color names as pascal case", () => {
  test("display in pascal case for one word", () => {
    expect(formatColorName("red")).toBe("Red");
  });
  test("display in pascal case for two words", () => {
    expect(formatColorName("midnightBlue")).toBe("Midnight Blue");
  });
  test("display in pascal case for multiple words", () => {
    expect(formatColorName("mediumVioletRed")).toBe("Medium Violet Red");
  });
});
