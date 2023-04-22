//stop event bubbling and event capturing
//stoppropgation

const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function (e) {
     e.stopPropagation()
  alert("div");
});

button.addEventListener("click", function (e) {
    //  e.stopPropagation()
  alert("button");
});

form.addEventListener("click", function (e) {
    //  e.stopPropagation()
  alert("form");
});

