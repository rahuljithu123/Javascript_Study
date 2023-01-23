console.log("start");
const promise1 = new Promise((resolve, reject) => {
  console.log(1); //-->//synchronous code
  console.log(3); //-->//synchronous code
});
promise1.then((res) => {
  //-->//asynchronous code
  console.log("Result:",res);
});
console.log("stop");
