// promise in js
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("async task  is complete ");
    res();
  }, 1000);
});
promise.then(() => {
  console.log("Promise is consumed");
});
// 2
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise 2 async");
    resolve();
  }, 2000);
}).then(() => {
  console.log("promise 2 consume");
});
// 3
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Meharaz", id: "221-15-5883" });
  }, 2000);
}).then((user) => {
  console.log(user);
});
// 4
const promise4 = new Promise((resolve, reject) => {
  const error = false;
  setTimeout(() => {
    if (!error) {
      resolve({ user_name: "Meharaz", pass: "123" });
    } else {
      reject(Error("error detected"));
    }
  }, 2000);
});
promise4
  .then((user) => {
    console.log(user);
    return user.user_name;
  })
  .then((userName) => {
    console.log(userName);
  })
  .catch((err) => {
    console.log(err.message);
  });
const promise5 = new Promise((resolve, reject) => {
  const error = false;
  setTimeout(() => {
    if (!error) {
      resolve({ user_name: "JavaScript", pass: "jsx" });
    } else {
      reject(Error("error in js project"));
    }
  }, 2000);
});
async function responsePromise5() {
  try {
    const res = await promise5;
    console.log(res.user_name);
  } catch (err) {
    console.log(err.message);
  }
}
responsePromise5();
