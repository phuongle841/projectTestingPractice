import { capitalizeClass } from "./capitalize";
test("adds 1 + 2 to equal 3", () => {
  let capitalize = new capitalizeClass();
  expect(capitalize.capitalizeFirstLetter("this")).toMatch(/This/);
  expect(capitalize.capitalizeFirstLetter("day Break")).toMatch(/Day Break/);
});
