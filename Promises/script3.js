console.log("start");
function impAction(user, cb) {
  setTimeout(() => {
    cb(`subscribe to ${user}`);
  }, 0);
}

function likeTheVideo(video, cb) {
  setTimeout(() => {
    // return`Like the ${video} video`
    cb(`Like the ${video} video`);
  }, 1000);
}
function shareTheVideo(video,cb){
    setTimeout(() => {
       cb(`share the ${video} video`) 
    }, 1000);
}
const message = impAction("Roadside Coder", function (message) {
  //callback function
  console.log(message);
  likeTheVideo("Javascript", (action) => {
    console.log(action);
     shareTheVideo("Javascript Interview", (action) => { //callback hell
       console.log(action);
     });
  });
});

console.log("stop");
