//create a button UI and add debounce as follows=>
//-->show "Button" pressed <X> Times" every time button is pressed
//-->Increase "Triggered" <Y> Times" count after 800millisecond(ms) of debounce
//debouncing limits the execution of a function call and waits for a certain amount of time before running it again
//example:when I am continuously typing on the keyboard in search bar  in a website, it doesn't show me the results
//but as soon as I stopped for  a few milliseconds,it makes an API call and fetch all of the search suggestions
//if we make API call on every single keystroke or every single letter we type in the search box,it will make a lot of the unnecessary API calls to the backend which will put a lot of pressure on our server
//to avoid these issues,we use debouncing

const btn = document.querySelector(".increment_btn");
const btnpress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const myDebounce=(cb,d)=>{
    let timer;

    return function(...args){ //anoymonus function
        if(timer)
         clearTimeout(timer);
        timer=setTimeout(()=>{
            cb(...args);
        },d);
    }
}

const debouncedCount=myDebounce(()=>{
    triggerCount+=1;
    count.innerHTML=triggerCount;
},800); // when the gap between two button presses or two keystrokes is less than 800 milliseconds,
        //then we are not supposed to trigger callback function
        // we have to use clearTimeout function
        

btn.addEventListener("click", () => {
  btnpress.innerHTML = ++pressedCount;
  debouncedCount();
});


