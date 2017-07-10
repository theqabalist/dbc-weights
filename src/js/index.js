/*global document*/
const ReactDOM = require("react-dom");
const h = require("react-hyperscript");
const state = require("./atom");

state.subscribe(v => {
    ReactDOM.render(
        h(require("./components/app"), v),
        document.getElementById("app")
    );
});

state.init({
    modal: {
        active: false,
        name: null
    },
    vals: {
        percBase: false,
        kg: 0,
        lb: 0,
        noRed: false
    },
    plates: {
        mens: [],
        womens: []
    }
});
