// rest and spread oparator
// shallow copy.shallow copy are perfact way copy just one level.if there are nested array or nested
// object are present they share reffernce to other object or array.if new object and array changed anything
// in first level they independently change in nested level anyone is changed then affect another

// const obj = {
//   a: "Rahim",
//   b: {
//     Name: "meharaz",
//     id: "221-15-5883",
//   },
// };
// const obj2 = { ...obj };
// obj2.a = "Rahat";
// obj2.b.Name = "Sharmin";
// console.log(obj);
// console.log(obj2);
// spred in array
// const arr1 = [12, 13, 45];
// const arr2 = [...arr1];
// console.log(arr1);
// console.log(arr2);
// arr2.push(15);
// console.log(arr1);
// console.log(arr2);
// here is one level copy so there perfact copy happen
// if any array changed not affect to other

// combining array to the help of spread oparator
// const arr1 = [90, 80, 45, 89];
// const arr2 = [45, 89, 34, 76];
// const combining = [...arr1, ...arr2];
// console.log(combining);

// add element through spred oparator
// const arr1 = [89, 70, 45, 56];
// const arr2 = [12, 45, 56, ...arr1];
// console.log(arr2);

// * spread oparator in object
// const obj1 = {
//   name: "Meharaz",
//   id: "221-15-5883",
//   age: 26,
// };
// const obj2 = { ...obj1 };
// console.log(obj1);
// console.log(obj2);
// obj2.name = "Rahim";
// obj2.age = 28;
// one levele so perfact copy,change independently
// console.log(obj1);
// console.log(obj2);

// combining object in spread oparator
const obj1 = {
  a: 32,
  b: 45,
};
const obj2 = {
  a: 96,
  c: 89,
};
// const combine = { ...obj1, ...obj2 };
// // here a use in 2 different object so it override and use last value of a
// console.log(combine);
const obj3 = {
  name: "Habib",
  age: 52,
  ...obj2,
};
console.log(obj3);
