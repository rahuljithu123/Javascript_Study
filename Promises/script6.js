console.log("start");
const promise1=new Promise((resolve,reject)=>{
  console.log(1); //-->//synchronous code
  resolve(2); //-->//asynchronous code
})
promise1.then((res)=>{//-->//asynchronous code
    console.log(res);
})
console.log("stop");