class capitalizeClass {
  constructor() {}
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
export { capitalizeClass };
