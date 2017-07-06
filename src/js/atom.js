const {clone} = require('ramda');
let store;

const subscribers = [];

const broadcast = () => {
    subscribers.forEach(f => f(clone(store)));
};

module.exports = {
    init(v) {
        store = v;
        broadcast();
    },
    dispatch(f) {
        store = f(store);
        console.log(store);
        broadcast();
    },
    subscribe(f) {
        subscribers.push(f);
    }
};
