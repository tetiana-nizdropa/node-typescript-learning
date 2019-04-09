function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function delayRandomNumber(min: number, max: number, delay: number = 5000): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getRandomIntInclusive(min, max));
        },
        delay);
    });
}

function addRandomNumbers(min: number, max: number): Promise<number> {
    return delayRandomNumber(min, max)
        .then((res) => {
            return res + getRandomIntInclusive(min, max);
        })
        .then((res) => {
            return res + getRandomIntInclusive(min, max);
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

function parallelPromise(promise_first: number, promise_second: number): Promise<[number, number]> {
    return Promise.all([promise_first, promise_second])
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


