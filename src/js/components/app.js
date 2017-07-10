const {Component} = require("react");
const {div, i, p} = require("react-hyperscript-helpers");
const h = require("react-hyperscript");

const InputStack = require("./input-stack");
const WeightStack = require("./weight-stack");
const PercTable = require("./perc-table");
const Settings = require("./settings");
const openModal = require("../data-flow/open-modal");
const closeModal = require("../data-flow/close-modal");

module.exports = class App extends Component {
    render() {
        return div({className: "main ui container"}, [
            div({className: "stuck-to-top"}, [
                h(InputStack, this.props.vals)
            ]),
            h(WeightStack, this.props.plates),
            h(PercTable, this.props.vals),
            div({className: "footer", style: {textAlign: "right"}}, [
                i({className: "large setting icon", onClick: openModal("settings")})
            ]),
            div({
                className: `ui page dimmer ${this.props.modal.active ? "visible active" : "hidden"}`,
                onClick: closeModal
            }, [
                div({style: {display: "flex", alignItems: "center", height: "100%"}}, [
                    h(Settings, {active: this.props.modal.name === "settings"})
                ])
            ])
        ]);
    }
};
