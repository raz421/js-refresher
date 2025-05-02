// promise in js
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("async task  is complete ");
    res();
  }, 2000);

});
promise.then(() => {
  console.log("Promise is consumed");
});
