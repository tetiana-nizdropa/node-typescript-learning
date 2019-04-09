const promisesLib = require('./PromisesLib');

describe('Testing block for asynchronous functions', () => {
    // Set custom time out for all tests in this block
    beforeEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 6000;
    });
    describe('Should', () => {
        it('return value in range [1, 5]', (done) => {
            promisesLib.delayRandomNumber(1, 5)
                .then((res: number) => {
                    expect(res).toBeGreaterThanOrEqual(1);
                    expect(res).toBeLessThanOrEqual(5);
                    done();
                });
        });
        it('return value less than or equal 15', (done) => {
            promisesLib.addRandomNumbers(1, 5)
                .then((res: number) => {
                    expect(res).toBeLessThanOrEqual(15);
                    done();
                });
        });
        it('return error text', (done) => {
            promisesLib.raiseError(2)
                .then((res) => {
                    // do nothing
                    // test will fail if we end up here
                })
                .catch((err) => {
                    expect(err).not.toBeNull();
                    expect(err).not.toBeUndefined();
                    done();
                });
        });
        it('return array [1, 1]', (done) => {
            promisesLib.parallelPromise(promisesLib.raiseError(1), promisesLib.raiseError(1))
                .then((res: [number, number]) => {
                    expect(res).toEqual([1, 1]);
                    done();
                });
        });
        it('return error for one of the functions', (done) => {
            promisesLib.parallelPromise(promisesLib.raiseError(1), promisesLib.raiseError(2))
                .then((res: [number, number]) => {
                    // we will never ber here
                })
                .catch((err) => {
                    expect(err).not.toBeNull();
                    expect(err).not.toBeUndefined();
                    done();
                });
        });
    });
});