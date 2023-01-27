//closures in javascript
//lexical scope
function subscribe(){
    var name="Roadside Coder";
    //inner scope1
    function displayName() {
        //inner scope2
        alert(name)
}
displayName();
}
subscribe()