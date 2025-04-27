// function
const a = function (b, c) {
  return b + c;
};
console.log(a(6, 7));

//arrowfunction
let multi = (a, b) => {
  console.log("multification happend here");
  return a * b;
};
console.log(multi(8, 9));

// retun object in arrow function

const obj = (a, b) => ({
  a: a,
  b: b,
});
console.log(obj(6, 7));

// another way
const obj2 = (a, b) => {
  return {
    a: a,
    b: b,
  };
};
console.log(obj2(10, 12));

// annonymous function
const fun = function () {
  return () => {
    console.log("hellow world ");
  };
};
