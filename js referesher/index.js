// array methods
// find
// const num = ["mango", "pineapple", "watermelon", "guava"];
// const ans = num.find((f) => f === "peach" || f === "guava");
// // if it's true it's give result
// console.log(ans);

//findIndex
// const res = num.findIndex((f) => f === "pineapple");
// // if it's true it's give result index
// console.log(res);

// slice

// const str = "Bangladesh is beatuifull country";
// const slc = str.slice(0, 10);
// console.log(slc);
// console.log(str);

// Slice another example
// const num = [88, 99, 70, 30, 89, 99, 230, 80, 12, 34, 55, 667, 3];
// const res = num.slice(0, 10);
// console.log(res);

// splice example
const fruit = ["mango", "pineapple", "watermelon", "guava", "peach"];

// const res=fruit.splice(startdeletenumber,how many remove,give value if any value need);

const res = fruit.splice(2, 2, "jackfruit", "blckbery", "fruit3");
console.log(res);
console.log(fruit);
