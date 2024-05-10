const { promiseAll } = require ("../task1");
console.log("*****TESTING TASK 1*****")

const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
  
  promiseAll(promises)
    .then(results => {
      console.log("All promises resolved:", results);
    })
    .catch(error => {
      console.error("At least one promise rejected:", error);
    });