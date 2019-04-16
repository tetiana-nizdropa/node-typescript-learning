const helperLib = require('./Helper');

async function delayRandomNumberAsync(min: number, max: number, delay: number = 5000): Promise<number> {
    const randomInt: Promise<number> = new Promise((resolve) => {
        setTimeout(() => {
            resolve(helperLib.getRandomIntInclusive(min, max));
        },
        delay);
    });
    return await randomInt;
}

async function addRandomNumbersAsync(min: number, max: number, quantity: number = 3): Promise<number> {
    let sum: number = 0;
    for (let i = 0; i < quantity; i++) {
        sum += await delayRandomNumberAsync(min, max, 1000);
    }
    return sum;
}

async function raiseErrorAsync(test: number) {
    const errorPromise: Promise<number> = new Promise((resolve, reject) => {
        if (test === 1) {
            resolve(1);
        }
        else {
            reject(new Error('Passed the wrong number. Please check'));
        }
    });
    try {
        return await errorPromise;
    }
    catch (err) {
        throw new Error(err.message);
    }
}

async function parallelPromiseAsync(promise_first: number, promise_second: number): Promise<[number, number]> {
    const parallelPromise: Promise<[number, number]> = Promise.all([promise_first, promise_second])
        .then((res: [number, number]) => {
            return res;
        });
    return await parallelPromise;
}

module.exports = {
    delayRandomNumberAsync,
    addRandomNumbersAsync,
    raiseErrorAsync,
    parallelPromiseAsync
};