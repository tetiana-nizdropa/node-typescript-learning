const helperLib = require('./Helper');
const winston = require('winston');

// import winston, {createLogger, transports} from 'winston';
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'C:\\temp\\testLogs\\error.log', level: 'error' })
    ]
});

async function delayRandomNumberAsync(min: number, max: number, delay = 5000): Promise<number> {
    const randomInt: Promise<number> = new Promise((resolve) => {
        setTimeout(() => {
            resolve(helperLib.getRandomIntInclusive(min, max));
        },
        delay);
    });
    return await randomInt;
}

async function addRandomNumbersAsync(min: number, max: number, quantity = 3): Promise<number> {
    let sum = 0;
    for (let i = 0; i < quantity; i++) {
        sum += await delayRandomNumberAsync(min, max, 1000);
    }
    return sum;
}

async function raiseErrorAsync(test: number) {
    return await new Promise((resolve, reject) => {
        if (test === 1) {
            resolve(1);
        }
        else {
            reject(new Error('Passed the wrong number. Please check'));
        }
    });
}

async function parallelPromiseAsync(promiseFirst: number, promiseSecond: number): Promise<[number, number]> {
    const parallelPromise: Promise<[number, number]> = Promise.all([promiseFirst, promiseSecond])
        .then((res: [number, number]) => {
            return res;
        });
    return await parallelPromise;
}

logger.log('error', 'Hi, there');

module.exports = {
    delayRandomNumberAsync,
    addRandomNumbersAsync,
    raiseErrorAsync,
    parallelPromiseAsync
};