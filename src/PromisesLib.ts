const helper = require('./Helper');

function delayRandomNumber(min: number, max: number, delay = 5000): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(helper.getRandomIntInclusive(min, max));
        },
        delay);
    });
}

function addRandomNumbers(min: number, max: number): Promise<number> {
    return delayRandomNumber(min, max)
        .then((res) => {
            return res + helper.getRandomIntInclusive(min, max);
        })
        .then((res) => {
            return res + helper.getRandomIntInclusive(min, max);
        });
}

function raiseError(test: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (test === 1) {
            resolve(1);
        }
        else {
            reject(new Error('Passed the wrong number. Please check'));
        }
    });
}

function parallelPromise(promiseFirst: number, promiseSecond: number): Promise<[number, number]> {
    return Promise.all([promiseFirst, promiseSecond])
        .then((res: [number, number]) => {
            return res;
        });
}

module.exports = {
    delayRandomNumber,
    addRandomNumbers,
    raiseError,
    parallelPromise
};


