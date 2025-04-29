// uses of findIndex
const arr = [1, 45, -2, 78, 90];
const res = arr.filter((a) => a > 0).findIndex((a) => a > 50);
console.log(res);
const ans = arr.filter((a) => a > 0).findIndex((a) => a > 100);
console.log(ans);

// findindex in sparse array
const arr1 = [2, 4, , , -1, -3, -5, 6, , 8];
const res1 = arr1.filter((a) => a > 0).findIndex((a) => a > 7);
console.log(res1);
