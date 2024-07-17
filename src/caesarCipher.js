class caesarCipherClass {
  constructor() {}
  caesarCipher(string, code) {
    return true;
  }
  checkChar(char) {
    if (!Number.isInteger(char)) {
      return 97 <= char.charCodeAt() && 122 >= char.charCodeAt();
    }
  }
}
export { caesarCipherClass };
