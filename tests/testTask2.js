const { promiseAllSettled } = require("../task2")
console.log("*****TESTING TASK 2*****")

const promises = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
  ];
  
  promiseAllSettled(promises)
    .then(results => {
      console.log("All promises settled:", results);
    });