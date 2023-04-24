 const body=document.body
 const divl = document.querySelector("div");
 const spanHiHello = document.querySelector("#hihello");
 const spanHi = document.querySelector("#hi");
 const spanBye = document.querySelector("#bye");

 console.log(spanHi.id)
 console.log(spanHi.title)
 console.log(spanHi.getAttribute("id"))
  console.log(spanHi.getAttribute("title"));
  spanBye.setAttribute("id","byebye")
  spanBye.removeAttribute("title")

  console.log(spanHi.dataset)
  
  console.log(spanHi.dataset.test);
  
  console.log(spanHi.dataset.longerName);

  spanHi.dataset.newName="HiMuthu"

  spanHiHello.classList.add("new-class")
//   spanHiHello.classList.remove("hi1");
 spanHiHello.classList.toggle("hi2");  
   spanHiHello.classList.toggle("hi3"); 

   spanHiHello.style.backgroundColor=

  


//  spanBye.remove()
//  divl.append(spanBye)

//  divl.removeChild(spanBye)



// body.append("Hello World") 


//    const div1 = document.createElement("div");
//  const div=document.createElement("div") 

//  const div2=document.createElement("div")
//  const strong = document.createElement("strong")
//  strong.innerText="Nice to meet you"

//  div1.innerText="Hi Rahul"
//  div.textContent="Welcome"
//  div2.innerHTML="<strong>To Ooty</strong>"

// body.append(div1,div,div2,strong)  //appendChild only for elements







// const div=document.querySelector("div")
// console.log(div.textContent)
// console.log(div.innerText)