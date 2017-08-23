const deprecate = require('../');
const be = require('bejs');

describe('deprecated', function () {
    it('should be return true', () => {
        const result = deprecate('foo()', 'foo() is deprecated');
        be.err.true(result);
    });
    it('only one argument, should be return true', () => {
        const result = deprecate('bar() is deprecated');
        be.err.true(result);
    });
    it('undefined, should be return false', () => {
        const result = deprecate(undefined, 'bar() is deprecated');
        be.err.false(result);
    });
});