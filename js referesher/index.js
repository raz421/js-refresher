// nested spread oparator
// in array of object
const arr1 = [
  { id: 1, name: "Meharaz" },
  { id: 2, name: "Rahim" },
];
const arr2 = [...arr1];
console.log(arr1);
console.log(arr2);
arr2[0].name = "Rohit";
arr2[0].id = 45;
// the nested level here means object in array not perfactly copy,because when it's spread
// it's share reference.so one is change it's affect to other
console.log(arr1);
console.log(arr2);
// so we can say spread copy in first level
