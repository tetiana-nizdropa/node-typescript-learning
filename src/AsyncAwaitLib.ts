const helperLib = require('./Helper');
const winston = require('winston');

// import winston, {createLogger, transports} from 'winston';
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'C:\\temp\\testLogs\\error.log', level: 'error' })
    ]
});

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
    return await new Promise((resolve, reject) => {
        if (test === 1) {
            resolve(1);
        }
        else {
            reject(new Error('Passed the wrong number. Please check'));
        }
    });
}

async function parallelPromiseAsync(promise_first: number, promise_second: number): Promise<[number, number]> {
    const parallelPromise: Promise<[number, number]> = Promise.all([promise_first, promise_second])
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