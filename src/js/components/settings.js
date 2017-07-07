const {Component} = require("react");
const h = require("react-hyperscript");
const {Modal, Checkbox} = require("semantic-ui-react");
const {i, div, label} = require("react-hyperscript-helpers");
const {fromEvents} = require("kefir");
const state = require("../atom");
const {prop, assocPath, pipe} = require("ramda");
const EventEmitter = require("eventemitter3");
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

module.exports = class Settings extends Component {
    render() {
        return h(Modal, {trigger: i({className: "large setting icon"})}, [
            h(Modal.Header, ["Settings"]),
            h(Modal.Content, [div({className: "ui segments"}, [
                div({className: "ui segment"}, [
                    h(Checkbox, {style: {float: "left"}, slider: true, checked: this.props.noRed, onChange: (_, data) => changeEmitter.emit("no-red-changed", data)}),
                    label({style: {float: "right"}}, ["No red plates available"]),
                    div({style: {clear: "both"}})
                ]),
                div({className: "ui segment"}, [
                    h(Checkbox, {style: {float: "left"}, disabled: true, slider: true, checked: this.props.womensMode, onChange: (_, data) => changeEmitter.emit("womens-mode-changed", data)}),
                    label({style: {float: "right"}}, ["Use women's bar"]),
                    div({style: {clear: "both"}})
                ])
            ])])
        ]);
    }
};
