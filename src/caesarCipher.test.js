import { caesarCipherClass } from "./caesarCipher";

test("lowercase", () => {
  let caesarCipherInstance = new caesarCipherClass();
  let input = "xyz";
  let code = 3;
  let output = "abc";
  expect(caesarCipherInstance.caesarCipher(input, code)).toMatch(output);
});

test("uppercase", () => {
  let caesarCipherInstance = new caesarCipherClass();
  let input = "XYZ";
  let code = 3;
  let output = "ABC";
  expect(caesarCipherInstance.caesarCipher(input, code)).toMatch(output);
});

test("not word char", () => {
  let caesarCipherInstance = new caesarCipherClass();
  let input = "Hello, World!";
  let code = 3;
  let output = "Khoor, Zruog!";
  expect(caesarCipherInstance.caesarCipher(input, code)).toMatch(output);
});
