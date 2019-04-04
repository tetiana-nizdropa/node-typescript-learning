let assert = require('assert');
let app = require('./App');

describe('Collection of tests', function () {
 it('Test1', () => {
        assert.equal(app.greeter('Node Hero'), 'Hello Node Hero!');
    });
});