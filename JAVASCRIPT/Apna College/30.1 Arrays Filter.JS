let cities =[
    {name: 'Mumbai',population:3792621},
    {name: 'Delhi',population:8175133},
    {name: 'Banglore',population:2695598},
    {name: 'Chennai',population:2099451},
    {name: 'Lucknow',population:1526006}
]

console.log(cities.filter(city=>{
    return city.population>3000000
}))
//OR
console.log(cities.filter(city=>city.population>2000000))