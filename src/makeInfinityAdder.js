'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder(param = 0) {
  let sum = param;

  function f(num) {
    if (num === undefined) {
      const sumInner = sum;

      sum = 0;

      return sumInner;
    } else {
      sum += num;

      return f;
    }
  }

  return f;
}

module.exports = makeInfinityAdder;
