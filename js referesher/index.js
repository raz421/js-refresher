// filter the prime number from an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function PrimeNumber(num, idx, arr) {
  if (num > 0) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
      return true;
    }
  }
}

const res = array.filter(PrimeNumber);
console.log(...res);
