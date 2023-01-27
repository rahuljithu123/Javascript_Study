// settimeout output

function a(){
    for(var i=0;i<3;i++){ //var does not have block scope and it has a function scope
        setTimeout(function log(){
            console.log(i);
        },i*1000);
    }
}
//3 3 3 will be the output if it is var // var is function scoped
//0 1 2  will be output if it is (let) //let is block scoped
a();