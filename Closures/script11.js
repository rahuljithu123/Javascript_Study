//what is module pattern //mostly asked in senior (Dev) questions

var Module=(function(){
    function privateMethod(){
        console.log("private");
    }
    return{
        publicMethod:function(){
            console.log("public");
        }
    };
})(); //IIFE(Immediately Invoked Function Expression)

Module.publicMethod();
// Module.privateMethod();