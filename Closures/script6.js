let count =0
function printCount() {
    if(count===0){
        let count=1 //shadowing   //block scope
        console.log(count);//count=1
    }
    //count=0
    console.log(count); //0
}

printCount();