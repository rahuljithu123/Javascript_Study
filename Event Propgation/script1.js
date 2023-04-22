//process of deciding when and in which direction the event will be executed is called event propgation
//Event bubbling --> bubbles always goes from down to up
//in bubbling events are executed from bottom to up
// few events that do not bubble like blur,focus etc..

const div=document.querySelector("div")
const form=document.querySelector("form")
const button=document.querySelector("button")

div.addEventListener("click",function(){
    alert("div");
});

button.addEventListener("click", function () {
  alert("button");
});

form.addEventListener("click",function(){
    alert("form");
});


