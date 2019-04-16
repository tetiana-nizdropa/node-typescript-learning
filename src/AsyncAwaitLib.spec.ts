const asyncAwait = require('./AsyncAwaitLib');

describe('Testing block for asynchronous functions with Async/Await implementation', () => {
    // Set custom time out for all tests in this block
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
    });
    describe('Calling async function with await', () => {
        describe('Should', () => {
            it('return value in range [5, 15]', (done) => {
                (async () => {
                    const promise: Promise<number> = asyncAwait.delayRandomNumberAsync(5, 15, 3000);
                    const res: number = await promise;

                    expect(res).toBeGreaterThanOrEqual(5);
                    expect(res).toBeLessThanOrEqual(15);
                    done();
                })();
            });
            it(('return less then or equal 20'), (done) => {
                (async () => {
                    const sum: number = await asyncAwait.addRandomNumbersAsync(1, 5, 4);

                    expect(sum).toBeLessThanOrEqual(20);
                    done();
                })();
            });
            it('return error text', (done) => {
                (async () => {
                    let response: number | string;
                    try {
                        response = await asyncAwait.raiseErrorAsync(2);
                    }
                    catch (error) {
                        response = error.message;
                    }

                    expect(typeof response).toBe('string');
                    done();
                })();
            });
            it('return array [1, 1]', (done) => {
                let res: [number, number] | string;
                (async () => {
                    try {
                        res = await asyncAwait.parallelPromiseAsync
                            (asyncAwait.raiseErrorAsync(1), asyncAwait.raiseErrorAsync(1));
                    }
                    catch (err) {
                        res = err.message;
                    }
                    expect(res).toEqual([1, 1]);
                    done();
                })();
            });
            it(('return error for one of the functions'), (done) => {
                let res: [number, number] | string;
                (async () => {
                    try {
                        res = await asyncAwait.parallelPromiseAsync
                            (asyncAwait.raiseErrorAsync(1), asyncAwait.raiseErrorAsync(2));
                    }
                    catch (err) {
                        res = err.message;
                    }
                    expect(typeof res).toBe('string');
                    done();
                })();
            });
        });
    });
    describe('Testing by means of the jasmine-co lib', () => {
        describe('Should', () => {
            it('return value in range [5, 15]', async function() {
                const promise: Promise<number> = asyncAwait.delayRandomNumberAsync(5, 15, 3000);
                const res: number = await promise;

                expect(res).toBeGreaterThanOrEqual(5);
                expect(res).toBeLessThanOrEqual(15);
            });
            it(('return less then or equal 20'), async function() {
                const sum: number = await asyncAwait.addRandomNumbersAsync(1, 5, 4);

                expect(sum).toBeLessThanOrEqual(20);
            });
            it('return error text', async function() {
                let response: number | string;
                    try {
                        response = await asyncAwait.raiseErrorAsync(2);
                    }
                    catch (error) {
                        response = error.message;
                    }
                    expect(typeof response).toBe('string');
            });
            it('return array [1, 1]', async function() {
                let res: [number, number] | string;
                try {
                    res = await asyncAwait.parallelPromiseAsync
                        (asyncAwait.raiseErrorAsync(1), asyncAwait.raiseErrorAsync(1));
                }
                catch (err) {
                    res = err.message;
                }
                expect(res).toEqual([1, 1]);
            });
            it(('return error for one of the functions'), async function() {
                let res: [number, number] | string;
                try {
                    res = await asyncAwait.parallelPromiseAsync
                        (asyncAwait.raiseErrorAsync(1), asyncAwait.raiseErrorAsync(2));
                }
                catch (err) {
                    res = err.message;
                }
                expect(typeof res).toBe('string');
            });
        });
    });
});