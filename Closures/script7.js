function createBase(num){
    return function (innerNum){
        console.log(innerNum+num);
    };
}
var addSix=createBase(6);
addSix(10);// returns 16
addSix(21);//returns 27