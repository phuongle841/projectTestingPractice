class analyzeArrayClass {
  constructor() {}
  analyzeArray(array) {
    let Average = this.findAverage(array);
    let Min = this.findMin(array);
    let Max = this.findMax(array);
    let Length = this.findLength(array);
    return { average: Average, min: Min, max: Max, length: Length };
  }
  findAverage(array) {
    let average = array.reduce((a, b) => a + b, 0) / array.length;
    return average;
  }
  findMin(array) {
    let max = Math.min(...array);
    return max;
  }
  findMax(array) {
    let min = Math.max(...array);
    return min;
  }
  findLength(array) {
    let length = 0;
    array.forEach((element) => {
      length++;
    });
    return length;
  }
}
export { analyzeArrayClass };
