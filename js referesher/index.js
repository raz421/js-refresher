// a positive number that is also less than it's neighbour find fist element
const num = [33, -1, 23, 17, 13, 12];
const res = num
  .filter((val) => val > 0)
  .find((val, index, arr) => {
    if (index > 0 && val >= arr[index - 1]) {
      return false;
    }
    if (index < arr.length - 1 && val >= arr[index + 1]) {
      return false;
    }
    return true;
  });
console.log(res);
