const promise = new Promise((resolve, reject) => {
  const err = false;
  setTimeout(() => {
    if (!err) {
      resolve({
        user_name: "Meharaz",
        id: "7889",
        skill: "react and nextjs",
        gretting: () => {
          console.log("Hello developper");
        },
      });
    } else {
      reject(Error("promise is rejected"));
    }
  }, 1000);
});
promise
  .then((res) => {
    console.log(res);
    return res.gretting;
  })
  .then((gretting) => {
    gretting();
  })
  .catch((err) => {
    console.log(err.message);
  });
async function dev() {
  const take = await promise;
  return take;
}
dev();
