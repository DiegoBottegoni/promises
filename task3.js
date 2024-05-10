function chainPromises(functionsArray) {
    return functionsArray.reduce((previousPromise, currentFunction) => {
        return previousPromise.then(result => currentFunction(result));
    }, Promise.resolve());
}

function asyncFunction1() {
  return Promise.resolve("Result from asyncFunction1");
}

function asyncFunction2(data) {
  return Promise.resolve(data + " - Result from asyncFunction2");
}

function asyncFunction3(data) {
  return Promise.resolve(data + " - Result from asyncFunction3");
}

module.exports = { chainPromises, asyncFunction1, asyncFunction2, asyncFunction3 };


