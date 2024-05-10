function promiseAllSettled(promises) {
    return new Promise(resolve => {
        let results = [];
        let settledCount = 0;
        const totalPromises = promises.length;

        function processSettlement(index, status, valueOrReason) {
            results[index] = {
                status: status,
                ...valueOrReason
            };
            settledCount += 1;
            if (settledCount === totalPromises) {
                resolve(results);
            }
        }

        if (totalPromises === 0) {
            resolve(results);
            return;
        }

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    processSettlement(index, 'fulfilled', { value: value });
                })
                .catch(reason => {
                    processSettlement(index, 'rejected', { reason: reason });
                });
        });
    });
}

module.exports = { promiseAllSettled };
