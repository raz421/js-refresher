const inventory = [
  { name: "cherry", quantity: "2kg" },
  { name: "jackfruit", quantity: "5kg" },
  { name: "strawbery", quantity: "7kg" },
  { name: "strawbery", quantity: "4kg" },
  { name: "strawbery", quantity: "3kg" },
  { name: "apple", quantity: "7kg" },
  { name: "orange", quantity: "7kg" },
];
function Fruit(f) {
  const res = f.name === "strawbery";
  return res;
}
const ans = inventory.find(Fruit);
console.log(ans);
