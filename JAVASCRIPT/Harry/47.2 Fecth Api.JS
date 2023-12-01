let p = fetch("https://goweather.herokuapp.com/weather/Ny")    //Whenever We Fetch We get a Promise 
p.then((response) => {
        return response.json()
}).then((value2) => {
        console.log(value2)
})