/*eslint no-confusing-arrow: off*/
const {reduce, zipWith, repeat, compose, prop, flatten, curry, tail, identity} = require("ramda");
const colors = "RBYGWrbygw".split("");
const radixes = [50, 40, 30, 20, 10, 5, 4, 3, 2, 1];

const weights = curry((offset, mod, kg) => kg < offset ? {cos: []} : reduce(({cos, kg}, radix) => {
    const co = Math.floor(kg / radix);
    return {cos: cos.concat(co), kg: kg - co * radix};
}, {cos: [], kg: kg - offset}, mod(radixes)));

const plates = mod => compose(flatten, zipWith(repeat, mod(colors)));

module.exports = {
    mens: compose(plates(identity), prop("cos"), weights(20, identity)),
    womens: compose(plates(identity), prop("cos"), weights(15, identity)),
    noRed: {
        mens: compose(plates(tail), prop("cos"), weights(20, tail)),
        womens: compose(plates(tail), prop("cos"), weights(15, tail))
    }
};
