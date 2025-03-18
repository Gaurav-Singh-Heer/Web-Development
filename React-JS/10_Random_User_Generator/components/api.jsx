export const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{   // await as it return promise
        method: 'GET',
    })
    return await response.json();
}

export const getRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api/',{   // await as it return promise
        method: 'GET',
    })
    return await response.json();
}