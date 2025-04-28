// destructuring
const Student = {
  name: "meharaz",
  id: "221-15-5883",
  skill: {
    skl1: "development",
    // more: {
    //   name: "c++,c,rust,devopps",
    // },
  },
};
// const { name,id } = Student;
// console.log(name, id);

// nested destructuring

//#1  const {
//   skill: { skl1 },
// } = Student;
// console.log(skl1)

// #2
const {
  skill: { more: { name } = {} },
} = Student;
console.log(name);
