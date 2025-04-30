// we can use conditionally spread oparator into object or array
const iscondition = true;
const arr = [12, 34, 56];
const arr2 = [39, 90, 80, ...(iscondition ? arr : [])];
console.log(arr2);

const Student = {
  name: "Meharaz",
  id: "221-15-5883",
  ...(iscondition ? { uni: "diu" } : {}),
};
console.log(Student);
