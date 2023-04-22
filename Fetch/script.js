let p = fetch("https://goweather.herokuapp.com/weather/Curitiba");
p.then((response)=>{ //resolving the promise
    console.log("Response",response)
    console.log(response.status)
    console.log(response.ok)
    // console.log(response.text())
    return response.json()
}).then((value2)=>{
    console.log(value2)
})