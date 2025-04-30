// in sorted compareable(array element must be pure)
// they need to no change in campare function
const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];
const compare = (a, b) => {
  return a - b;
};
console.log(stringArray.join(","));
console.log(stringArray.sort());

console.log(numberArray.join(","));
console.log(numberArray.sort());
console.log(numberArray.sort(compare));

console.log(numericStringArray.join());
console.log(numericStringArray.sort());
console.log(numericStringArray.sort(compare));

console.log(mixedNumericArray.join());
console.log(mixedNumericArray.sort());
console.log(mixedNumericArray.sort(compare));
