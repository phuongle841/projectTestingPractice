class caesarCipherClass {
  constructor() {}
  caesarCipher(string, code) {
    let res = string.split("");
    res.forEach((element, index) => {
      if (this.checkUpperCaseChar(element)) {
        res[index] = this.wrapperUpperCase(element);
      }
      if (this.checkLowerCaseChar(element)) {
        res[index] = this.wrapperLowerCase(element);
      }
    });
    res = res.join("");
    return res;
  }
  wrapperLowerCase(char, code = 3) {
    let input = char.charCodeAt(0) + code;
    if (input > 122) {
      input = input - (122 - 96);
    }
    return String.fromCharCode(input);
  }
  wrapperUpperCase(char, code = 3) {
    let input = char.charCodeAt(0) + code;
    if (input > 90) {
      input = input - (90 - 64);
    }
    return String.fromCharCode(input);
  }
  checkLowerCaseChar(char) {
    if (!Number.isInteger(char)) {
      return 97 <= char.charCodeAt() && 122 >= char.charCodeAt();
    }
  }
  checkUpperCaseChar(char) {
    if (!Number.isInteger(char)) {
      return 65 <= char.charCodeAt() && 90 >= char.charCodeAt();
    }
  }
}
export { caesarCipherClass };
