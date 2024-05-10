const { promisify, callbackStyleFunction } = require("../task4")
console.log("*****TESTING TASK 4*****")

const promisedFunction = promisify(callbackStyleFunction);

promisedFunction(3)
    .then(result => {
        console.log("Promised function result:", result);
    })
    .catch(error => {
        console.error("Promised function error:", error);
    });
