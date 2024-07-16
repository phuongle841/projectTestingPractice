import { analyzeArrayClass } from "./analyzeArray";
test("adds 1 + 2 to equal 3", () => {
  let analyzeArray = new analyzeArrayClass();
  expect(analyzeArray.conduct()).toBe(true);
});
