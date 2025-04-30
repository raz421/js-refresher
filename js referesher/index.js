// spread oparator apply in array object and function
// in spread oparator here only 1 level copy perfectly
// other level share refference,not fully copied
// const Object = {
//   name: "meharaz",
//   id: "221-15-5883",
//   address: {
//     name: "dhaka",
//   },
// };
// const Object2 = { ...Object };
// Object2.name = "Rahim";
// console.log(Object);
// console.log(Object2);
// Object2.address.name = "chitagong";
// console.log(Object);
// console.log(Object2);
// here it copies only one layer

// example
// const arr = [1, 2, 3, 4];
// const arr2 = [...arr];
// console.log(arr);
// console.log(arr2);
// arr2.push(4);
// console.log(arr);
// console.log(arr2);
// here it copy one level so two array change independently

// combining array
// const arr1 = [90, 89, 99, 90];
// const arr2 = [94, 80, 995, 190];
// const combine = [...arr1, ...arr2];
// console.log(combine);
// add spread with array element
// const arr6 = [90, 80, 45, 35, 23];
// const add = [23, 45, ...arr6];
// console.log(add);
