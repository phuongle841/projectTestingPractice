import { reverseStringClass } from "./reverseString";

test("normal reverse string", () => {
  let reverseStringInstance = new reverseStringClass();
  expect(reverseStringInstance.reverseString("string")).toMatch(/gnirts/);
});

test("reverse with space", () => {
  let reverseStringInstance = new reverseStringClass();
  expect(reverseStringInstance.reverseString("day break")).toMatch(/kaerb yad/);
});

test("single character", () => {
  let reverseStringInstance = new reverseStringClass();
  expect(reverseStringInstance.reverseString("a")).toMatch(/a/);
});

test("empty string", () => {
  let reverseStringInstance = new reverseStringClass();
  let blank = "";
  expect(reverseStringInstance.reverseString(blank)).toMatch(blank);
});

test("Special Characters", () => {
  let reverseStringInstance = new reverseStringClass();
  let input = "!@#$%^&*()";
  let output = ")(*&^%$#@!";
  expect(reverseStringInstance.reverseString(input)).toMatch(output);
});

test("Special Characters", () => {
  let reverseStringInstance = new reverseStringClass();
  let input = "こんにちは";
  let output = "はちにんこ";
  expect(reverseStringInstance.reverseString(input)).toMatch(output);
});
