// map in array
/*map transform a value into array elementt,map gives a new array
this array length same as main arry but it's not manipulate main array.
map transform value based on any action,it's map every element of the array*/

// 2
const num2 = [23, 45, 56];
const res = num2.map((n) => n * n);
res.push(78);
console.log(res);
console.log(num2);

//3
const fruits = ["apple", "bananna"];
const frt = fruits.map((f) => f.toUpperCase());
console.log(frt);

// 4
const info = [
  { name: "jackFruit", id: 1 },
  { name: "pineApple", id: 2 },
  { name: "apple", id: 3 },
];
const result = info.map(({ name }) => name);
console.log(result);
// 5
const info2 = [
  { name: "jackFruit", id: 1 },
  { name: "pineApple", id: 2 },
  { name: "apple", id: 3 },
];
const result2 = info2.map(({ name, id }) => ({ [name]: id }));
console.log(result2);
// 6
const arr2 = [3, 4, [7, 9], 34, 56];
const answer = arr2.map((a) => a * 2);
console.log(answer);
