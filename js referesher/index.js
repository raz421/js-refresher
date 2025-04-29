// filter the prime number from an array
const array = [2, 3, 4, 5, 6, 7, 9, 17];

function PrimeNumber(num, idx, arr) {
  if (num > 0) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num;
  }
}

const res = array.filter(PrimeNumber);
console.log(...res);
