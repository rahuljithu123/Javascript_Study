function makeFunc(){
    var name="mozilla";
    function displayName(){
        console.log(name);
    }
    return displayName;
}
var myFunc=makeFunc();
myFunc();