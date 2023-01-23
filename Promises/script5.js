console.log("start");
function impAction(user) {
    return new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve(`subscribe to ${user}`);
  }, 0);
});
    }
  

function likeTheVideo(video) {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(`like the ${video} video`);
     }, 100);
   });
}
function shareTheVideo(video) {
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       resolve(`share the ${video} video`);
     }, 500);
   });
}
// const message = impAction("Roadside Coder", function (message) {
//   //callback function
//   console.log(message);
//   likeTheVideo("Javascript", (action) => {
//     console.log(action);
//     shareTheVideo("Javascript Interview", (action) => {
//       //callback hell
//       console.log(action);
//     });
//   });
// });

// bnm,

// impAction("Roadside coder")
//   .then((res) => {
//     console.log(res);
//     likeTheVideo("Javascript Video ").then((res) => {
//       console.log(res);
//       shareTheVideo("Javascript Video").then((res) => {
//         console.log(res);
//       });
//     });
//   })
//   .catch((err) => console.log("error"));


//  async and await

const result=async()=>{
    try{
        const message1=await impAction("Coder")
        console.log(message1);
        const message2=await likeTheVideo("javascript")
        console.log(message2)
        const message3=await shareTheVideo("javascript")
        console.log(message3)
    } catch(error){
        console.error("Promises failed",error);
    }
}

result();
console.log("stop");


