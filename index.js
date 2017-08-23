/**
 * Simple deprecate
 * @param prop
 * @param msg
 * @returns {boolean}
 */
module.exports = (prop, msg) => {
    if(typeof prop !== 'undefined') {
        console.warn(msg || prop);
        return true;
    }
    return false;
};