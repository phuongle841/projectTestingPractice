class reverseStringClass {
  result;
  constructor() {
    this.result = [];
  }

  reverseString(string) {
    for (let index = string.length; index >= 0; index--) {
      this.result.push(string.charAt(index));
    }
    return this.result.join("");
  }
}
export { reverseStringClass };
