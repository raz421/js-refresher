// fetch data help of promise chaining
// const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts");
// fetchPromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log( data[0].title);
//   })
//   .catch((err) => {
//     console.log(`the requst has error ${err}`);
//   });
// console.log(fetchPromise);

// fetch in async await

const Posts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await posts.json();
  // console.log(data[0].title);
  return data[0].title;
};
const ShowPost = async () => {
  const value = await Posts();
  console.log(value);
};
ShowPost();
