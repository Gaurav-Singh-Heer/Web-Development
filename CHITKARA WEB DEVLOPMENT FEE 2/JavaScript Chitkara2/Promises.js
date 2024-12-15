const fetchData = () => {
    return new Promise((resolve, reject) => {
        let success = true; // Simulate an API call

        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 2000);  // Simulate a delay of 2 seconds
    });
};

// Using the promise
fetchData()
    .then((data) => {
        console.log(data);  // Logs: "Data fetched successfully!"
    })
    .catch((error) => {
        console.error(error);  // Logs: "Failed to fetch data."
    });
