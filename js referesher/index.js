const sum = (...rest) => {
  const result = rest.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return `the result is ${result}`;
};
const memo = (func) => {
  const catched = {};
  return (...x) => {
    const key = JSON.stringify(x);
    if (catched[key]) {
      console.log("value from catched");
      return catched[key];
    } else {
      console.log("calculating the catch result");
      const result = func(...x);
      return (catched[key] = result);
    }
  };
};
const add = memo(sum);
console.log(add(10, 20, 33, 89));
console.log(add(10, 20, 33, 89));
console.log(add(17, 208, 383, 889));
console.log(add(17, 208, 383, 889));
