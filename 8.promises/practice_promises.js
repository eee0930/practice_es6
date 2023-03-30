// 8.0
// const hello = fetch("https://google.com");

// console.log("something");




// 8.1
// const amISexy = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Yes you are!");
//   }, 3000);
// });

// console.log(amISexy);




// 8.2
// const amISexy = new Promise((resolve, reject) => {
//   setTimeout(reject, 3000, "Yes you ugly!");
//   // resolve("Yes you are!");
// });

// const thenFn = (value) => console.log(value);

// amISexy
//   .then(result => console.log(result))
//   .catch(error => console.log(error));




// 8.3
// const amISexy = new Promise((resolve, reject) => {
//   reject(2);
// });

// const timesTwo = (number) => number * 2;

// amISexy
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(timesTwo)
//   .then(() => {
//     throw Error("Something is Wrong!")
//   })
//   .then(lastNumber => console.log(lastNumber))
//   .catch(error => console.log(error));



// 8.4
// const p1 = new Promise(resolve => {
//   setTimeout(resolve, 5000, "First");
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 1000, "I hate JS");
// });

// const p3 = new Promise(resolve => {
//   setTimeout(resolve, 3000, "Third");
// });

// const motherPromise = Promise.all([p1, p2, p3]);

// motherPromise
//   .then(values => console.log(values))
//   .catch(error => console.log(error));



// 8.5
const p1 = new Promise(resolve => {
  setTimeout(resolve, 10000, "First");
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, "I hate JS");
});

const p3 = new Promise(resolve => {
  setTimeout(resolve, 3000, "Third");
});

const motherPromise = Promise.race([p1, p2, p3]);

motherPromise
  .then(values => console.log(values))
  .catch(error => console.log(error));
