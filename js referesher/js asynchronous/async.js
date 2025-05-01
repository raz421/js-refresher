const takeOrder = (customer, callback) => {
  console.log(`take order from ${customer}`);
  callback(customer);
};

function process(customer, callback) {
  console.log(`process order for ${customer}`);
  setTimeout(() => {
    console.log("cooking complete");
    console.log(`order process for ${customer}`);
    callback(customer);
  }, 3000);
}
const completeOrder = (customer) => {
  console.log(`complete order for ${customer}`);
};
takeOrder("customer 1", (customer) => {
  process(customer, (customer) => {
    completeOrder(customer);
  });
});
