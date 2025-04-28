// rest oparator
function Multi(a, ...rest) {
  console.log(rest);
  const ans = rest.reduce((acc, curr) => acc * curr, 1);
  console.log(`${a}${ans}`);
}
Multi("the value is ", 89, 19, 45, 68);
