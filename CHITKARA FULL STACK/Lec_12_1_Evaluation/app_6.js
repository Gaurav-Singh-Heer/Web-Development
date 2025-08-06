const { resolve } = require("path");

function sendNotification(user) {
    return new Promise((resolve, reject) => {
        if(user.isActive){
            resolve(`Sent to ${user.name}`)
        }
        else{
            reject(`Failed to send to ${user.name}`)
        }
    })
}

const users = [
    {name: "Alice", isActive: true},
    {name: "Bob", isActive: false},
    {name: "Charlie", isActive: true}
]

const promises = users.map(sendNotification)

Promise.allSettled(promises).then((results) => {
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(result.value);
        } else {
            console.log(result.reason);
        }
    })
})