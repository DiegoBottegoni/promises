const { chainPromises, asyncFunction1, asyncFunction2, asyncFunction3 } = require("../task3")
console.log("*****TESTING TASK 3*****")

const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];

chainPromises(functionsArray)
  .then(result => {
    console.log("Chained promise result:", result);
  })
  .catch(error => {
    console.error("Chained promise error:", error);
  });