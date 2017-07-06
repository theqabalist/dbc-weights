/*global document*/
const ReactDOM = require('react-dom');
const h = require('react-hyperscript');
const {set, lensProp} = require('ramda');
const state = require('./atom');

state.subscribe(v => {
    ReactDOM.render(
        h(require('./components/app'), v),
        document.getElementById('app')
    );
});

state.init({
    vals: {
        kg: 0,
        lb: 0,
        noRed: false
    },
    plates: {
        mens: [],
        womens: []
    }
});
state.dispatch(set(lensProp('message'), 'hello world!'));
