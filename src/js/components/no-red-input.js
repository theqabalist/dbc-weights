const {Component} = require("react");
const {fromEvents} = require("kefir");
const EventEmitter = require("eventemitter3");
const {Checkbox} = require("semantic-ui-react");
const h = require("react-hyperscript");
const state = require("../atom");
const {prop, assocPath, pipe} = require("ramda");
const plates = require("../plates");
const changeEmitter = new EventEmitter();

fromEvents(changeEmitter, "no-red-changed")
    .map(prop("checked"))
    .onValue(noRed => {
        state.dispatch(state => pipe(
            assocPath(["vals", "noRed"], noRed),
            assocPath(["plates", "mens"], (noRed ? plates.noRed : plates).mens(state.vals.kg)),
            assocPath(["plates", "womens"], (noRed ? plates.noRed : plates).womens(state.vals.kg))
        )(state));
    });

module.exports = class NoRedInput extends Component {
    render() {
        return h(Checkbox, {toggle: true, label: "No red plates available.", checked: this.props.noRed, onChange: (_, data) => changeEmitter.emit("no-red-changed", data)});
    }
};
