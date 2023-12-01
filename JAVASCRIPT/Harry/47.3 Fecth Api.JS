let p = fetch("https://goweather.herokuapp.com/weather/Ny")    //Whenever We Fetch We get a Promise 
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)             // boolean  true if the HTTP status code is 200-299
    return response.json()
}).then((value2) => {
    console.log(value2)
})