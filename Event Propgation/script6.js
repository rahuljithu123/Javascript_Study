const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.addEventListener("click", function (event) {
  alert("div");
});

form.addEventListener("click", function (event) {
  alert("form");
},{capture:true});


button.addEventListener("click", function (event) {
  alert("button");
} );

