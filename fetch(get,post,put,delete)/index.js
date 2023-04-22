//GET

// fetch("https://reqres.in/api/users").then((res)=>{
//     if(res.ok) {
//         console.log("GET request successful")
//     }
//     else{
//         console.log("GET request successful")
//     }
//     return res
// }).then(res =>res.json())
// .then(data=>console.log(data))
// .catch((error)=>console.log(error))


//POST

// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "morpheus",
//     job: "leader",
//   }),
// }).then(res=>{
//     if(res.ok){
//         console.log("POST request sucessful")
//     }
//     else{
//       console.log("POST request unsucessful");  
//     }
//     return res;
// }).then(res=>res.json()).then(data=>console.log(data)).catch((error)=>console.log(error))



//PUT

// fetch("https://reqres.in/api/users/2", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "morpheus",
//     job: "leader",
//   }),
// })
//   .then((res) => {
//     if (res.ok) {
//       console.log("PUT request sucessful");
//     } else {
//       console.log("PUT request unsucessful");
//     }
//     return res;
//   })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));



//DELETE

fetch("https://reqres.in/api/users/2", {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    if (res.ok) {
      console.log("DELETE request sucessful");
    } else {
      console.log("DELETE request unsucessful");
    }
    return res;
  })
  .then((res) => console.log(res))
  .catch((error) => console.log(error));