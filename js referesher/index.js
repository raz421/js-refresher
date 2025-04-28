// array method
// concat

// const fruits = ["guava", "jackfruit", "watermelon", "peach"];
// const res = fruits.concat("fruit 4", "fruit 5");
// console.log(res);
// console.log(fruits);

//  push
// const ans = fruits.push("blackvery");
// // it's manupulate main arrray
// console.log(ans);
// console.log(fruits);

// const num = [34, 67, 89, 90, 99, 77, 12];
// const ans = num.filter((n) => n == 89 || n == 67);
// console.log(ans);
// console.log(num);

// console.log(ans);

// map method
// const ans = num.map((n) => n == 90);
// console.log(num);
// console.log(ans);

const num = [1, 2, 4, 6, 7];
const initialValue = 2;
const ans = num.reduce((acc, curr, currIdx, arr) => {
  console.log(`accumulator is ${acc}`);
  console.log(`current value is ${curr}`);
  console.log(`current index is ${currIdx}`);
  console.log(`array is ${arr}`);
  return acc + curr;
}, initialValue);
console.log(ans);
