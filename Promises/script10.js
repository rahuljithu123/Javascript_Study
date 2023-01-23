console.log("start");
function impAction(user) {
  return new Promise((resolve, reject) => {
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

function promRecrus(funcPromises) {
  if (funcPromises.length === 0) return;
  const currPromise = funcPromises.shift();
  currPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
  promRecrus(funcPromises);
}

promRecrus([
  impAction("Roadsided coder"),
  likeTheVideo("javascript interview questions"),
  shareTheVideo("javascript interview questions"),
]);

console.log("end")
