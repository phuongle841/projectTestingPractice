import { caesarCipherClass } from "./caesarCipher";

test("simple caesar cipher", () => {
  let caesarCipherInstance = new caesarCipherClass();
  let input = "xyz";
  let code = 3;
  let output = "abc";
  expect(caesarCipherInstance.caesarCipher(input, code)).toMatch(output);
});

test("simple caesar cipher", () => {
  let caesarCipherInstance = new caesarCipherClass();
  let input = "HeLLo";
  let code = 3;
  let output = "KhOOr";
  expect(caesarCipherInstance.caesarCipher(input, code)).toMatch(output);
});

test("simple caesar cipher", () => {
  let caesarCipherInstance = new caesarCipherClass();
  let input = "Hello, World!";
  let code = 3;
  let output = "Khoor, Zruog!";
  expect(caesarCipherInstance.caesarCipher(input, code)).toMatch(output);
});

test("simple caesar cipher", () => {
  let caesarCipherInstance = new caesarCipherClass();
  let input = "xyz";
  let code = 3;
  let output = "abc";
  expect(caesarCipherInstance.caesarCipher(input, code)).toMatch(output);
});

test("simple caesar cipher", () => {
  let caesarCipherInstance = new caesarCipherClass();
  let input = "xyz";
  let code = 3;
  let output = "abc";
  expect(caesarCipherInstance.caesarCipher(input, code)).toMatch(output);
});
