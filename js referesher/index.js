// for of and for in method

// for of use for ittarable and for in use for non ittarable or object
// use of forof
// const num = [12, 13, 14];
// let sum = 0;
// for (let n of num) {
//   console.log(n);
// }
// const str = "Meharaz";
// for (let s of str) {
//   console.log(s);
// }

//use of forin
let obj = {
  name: "Meharaz",
  id: "221 - 15 - 5883",
  age: 25,
};
for (let key in obj) {
    // here we cant access property like obj.key
    // bexause obj.key	Always looks for a property named exactly "key" (not the variable's value).
    // obj[key]	Looks for the property whose name is stored inside the key variable.

  console.log(obj[key]);
}
