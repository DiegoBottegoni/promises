function promisify(callbackStyleFunction) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            args.push((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
            callbackStyleFunction(...args);
        });
    };
}

function callbackStyleFunction(value, callback) {
    setTimeout(() => {
        if (value > 0) {
            callback(null, value * 2);
        } else {
            callback("Invalid value", null);
        }
    }, 1000);
}

module.exports = { promisify, callbackStyleFunction };