import { calculatorClass } from "./calculator";
test("simple add", () => {
  let calculatorInstance = new calculatorClass();
  expect(calculatorInstance.add(4, 5)).toBe(9);
});

test("simple subtract", () => {
  let calculatorInstance = new calculatorClass();
  expect(calculatorInstance.subtract(1, 5)).toBe(-4);
});

test("simple divide", () => {
  let calculatorInstance = new calculatorClass();
  expect(calculatorInstance.divide(10, 5)).toBe(2);
});

test("simple multiply", () => {
  let calculatorInstance = new calculatorClass();
  expect(calculatorInstance.multiply(10, 5)).toBe(50);
});
