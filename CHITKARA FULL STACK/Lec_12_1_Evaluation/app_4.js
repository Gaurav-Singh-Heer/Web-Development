function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({id: id, name: User${id}})
            if (id == 2) {
                reject("User not found")
            }
            else{
                resolve({id: id, name: `User${id}`})
            }
        }, 1000)
    })
}

const promise1 = getUser(1)
const promise2 = getUser(2)
const promise3 = getUser(3)

Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log("All users fetched:");
    console.log(results);
})
.catch((error) => {
    console.error("Error fetching users:",error);
})
