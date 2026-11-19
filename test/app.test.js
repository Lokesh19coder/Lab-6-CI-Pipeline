const test = require('node:test');
const assert = require('node:assert');
const { add } = require('../src/app');

test('addition works correctly', () => {
    assert.strictEqual(add(2, 3), 5);
});