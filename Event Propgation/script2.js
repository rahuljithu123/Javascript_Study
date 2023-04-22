//event.target vs this.target vs event.currentTarget


const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click",func);
button.addEventListener("click",func);
form.addEventListener("click",func);

function func(event) {
    alert("currentTarget ="+ event.currentTarget.tagName +
     ",target="+ event.target.tagName +",this="+this.tagName);
}
