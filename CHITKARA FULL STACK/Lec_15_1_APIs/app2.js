const axios = require('axios')
const apiURL = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(apiURL)
.then((response) =>{
    console.log('Status Code:', response.status);
    console.log('Response Data:', response.data);
})
.catch((error) => {
    console.error('Error:', error.message);
})