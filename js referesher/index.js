// nalish qualacing
// only works right side when value is null or undefined
const n1 = undefined;
console.log(n1 ?? "Meharaz");

//only works right side  when value is falsy value
const lang = "c++";
console.log(lang || "javascript");

//only works right side  when value is truthy value
const lang2 = "c++";
console.log(lang2 && "javascript");