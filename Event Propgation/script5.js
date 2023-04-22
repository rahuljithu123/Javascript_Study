//event delegation in javascript
//event delegation is where we add event listeners to the parent element 
//instead of adding them to the descendant elements

document.querySelector(".products").addEventListener("click",(event)=>{
    console.log(event.target.closest("SPAN"));
    if(event.target.tagName==="SPAN"){
        window.location.href+="/"+event.target.className;
    }
});
