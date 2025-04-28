// object some trick
let p = "property";
const object = {
  a: 43,
  b: 98,
  c: 80,
  d: "d",
};
object["p"] = 90;
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));
