console.log("start")
function impAction(user,cb){
    setTimeout(()=>{
        cb(`subscribe to ${user}`);
    },0)
}
const message=impAction("Roadside Coder",function (message){
    console.log(message);
});

console.log("stop");