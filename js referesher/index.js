/* if initial value is provide the itaration start from 
0 index,if intial value is not provided 0 index value use
as a inital value and first itaration is start from index
1*/
const arr = [7, 34, 45, 89, 90, 56];

const ans = arr.reduce((acc, curr) => Math.max(acc, curr));
console.log(ans);
