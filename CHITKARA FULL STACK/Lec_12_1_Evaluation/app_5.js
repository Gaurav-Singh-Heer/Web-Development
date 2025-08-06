const { resolve } = require("path")

const fastPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Fast promise resolved!"), 1000)
})

const slowPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Slow promise resolved!"), 3000)
})

Promise.race([fastPromise, slowPromise])
.then((result) => {
    console.log("Race Winner:", result);    
})
.catch((error) => {
    console.error("Race:", error);
})