const url = "https://catfact.ninja/fact";
const h1=document.querySelector("h1")

const fetchData=()=>{
    fetch(url)
      .then((response) => response.json())
      .then((data) => (h1.innerText = data.fact))
        //   console.log(data);
       
      .catch((e) => console.log(e))
      .finally(() => console.log("all Done"));
};

fetchData();