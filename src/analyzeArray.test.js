import { analyzeArrayClass } from "./analyzeArray";
test("normal", () => {
  let analyzeArray = new analyzeArrayClass();
  let input = [1, 8, 3, 4, 2, 6];
  let output = { average: 4, min: 1, max: 8, length: 6 };
  expect(analyzeArray.analyzeArray(input)).toEqual(output);
});
