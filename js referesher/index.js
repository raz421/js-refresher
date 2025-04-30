const nature = {
  fellining: "good",
  temp: {
    value: {
      int: 24,
    },
  },
};
const {
  temp: {
    value: { int },
  },
} = nature;
console.log(int);
