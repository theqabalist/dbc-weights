const {Component} = require("react");
const {div, i, p} = require("react-hyperscript-helpers");
const h = require("react-hyperscript");
const {Modal} = require("semantic-ui-react");

const InputStack = require("./input-stack");
const WeightStack = require("./weight-stack");
const PercTable = require("./perc-table");
const Settings = require("./settings");

module.exports = class App extends Component {
    render() {
        return div({className: "main ui container"}, [
            div({className: "stuck-to-top"}, [
                h(InputStack, this.props.vals)
            ]),
            h(WeightStack, this.props.plates),
            h(PercTable, this.props.vals),
            div({className: "footer", style: {textAlign: "right"}}, [
                h(Settings, this.props.vals)
            ])
        ]);
    }
};
