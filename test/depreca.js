const deprecate = require('../');
const be = require('bejs');

describe('deprecate', function () {
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
    it('deprecated list', () => {
        const result = deprecate('bar() is deprecated');
        console.log(deprecate._list);
        be.err.inArray('bar() is deprecated', deprecate._list);
    });
    it('once, two args', () => {
        deprecate(true, 'bar2() is deprecated');
        const result = deprecate.once(true, 'bar2() is deprecated');
        console.log(result);
        be.err.false(result);
    });
    it('once, one arg', () => {
        deprecate(true, 'bar3() is deprecated');
        const result = deprecate.once('bar3() is deprecated');
        console.log(result);
        be.err.false(result);
    });
    it('once, one arg, should be return true', () => {
        const result = deprecate.once('bar4() is deprecated');
        console.log(result);
        be.err.true(result);
    });
});