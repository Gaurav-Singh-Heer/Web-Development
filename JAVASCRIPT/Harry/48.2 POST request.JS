let options ={
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body: JSON.stringify({
        title:'foo',
        body:'bar',
        userID:1,
    }),
}

fetch('https://jsonplaceholder.typeicode.com/posts',options)
    .then((response)=>response.json())
    .then((json)=>console.log(json));