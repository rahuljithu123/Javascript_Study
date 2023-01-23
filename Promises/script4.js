console.log("start");
const sub=new Promise((resolve,reject)=>{
    setTimeout(()=>{
   const result=true;
   if(result)
   resolve("subscribed")
   else 
   reject("not subscribed")
    },2000);
})

sub.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})
// console.log(sub);
console.log("stop");