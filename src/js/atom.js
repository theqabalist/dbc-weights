const {clone} = require("ramda");
let store;

const subscribers = [];

const broadcast = () => {
    subscribers.forEach(f => f(clone(store)));
};

const dispatch = f => {
    store = f(store);
    console.log(store);
    broadcast();
};

module.exports = {
    init(v) {
        store = v;
        broadcast();
    },
    dispatch,
    subscribe(f) {
        subscribers.push(f);
    },
    registerStream(s) {
        s.onValue(f => dispatch(f));
    }
};
