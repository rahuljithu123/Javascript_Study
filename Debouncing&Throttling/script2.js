//Throttling limits the execution of an event handler function when the event is triggered continously
//let say we are constantly scrolling our webpages, we are scrolling our window 
//as soon as event checks that okay now this is around 500 pixels 
//from reaching the very bottom of our screen so then it makes an API call 
//and fetches more number of posts
//user is constantly being fed with more  and more number of posts and he gets infinite scroll effect
//in throttling as well when we monitor these event we are not supposed to monitor in every single scroll
//if we are gonna scroll it in every single scroll,then it is going to be literally thousands of API call at once
//we are not supposed to call api call on every single scroll of our web page.
//throttling is a technique to limit the execution of an event handler function
 //even this event triggers continously due to user actions  ie : scrolling or resizing our window


 const btn = document.querySelector(".increment_btn");
 const btnpress = document.querySelector(".increment_pressed");
 const count = document.querySelector(".increment_count");

 var pressedCount = 0;
 var triggerCount = 0;

 const start=new Date().getTime();

 const myThrottle=(cb,d)=>{
    let last=0;
    return(...args)=>{
        let now=new Date().getTime();
        if(now-last<d)
        return;
        last=now;
        return cb(...args);
        };
 };

 var throttled=myThrottle(()=>{
    triggerCount+=1;
    count.innerHTML=triggerCount;
 },1000);


 btn.addEventListener("click",()=>{
    btnpress.innerHTML=pressedCount++;
    const now=new Date().getTime();
    const seconds=(now-start)/1000;
    console.log(seconds.toFixed());
    throttled();
 });






