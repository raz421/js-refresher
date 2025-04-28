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
console.log(Student?.skill?.more?.name);
