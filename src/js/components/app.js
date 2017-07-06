const {Component} = require("react");
const {div, h1, br} = require("react-hyperscript-helpers");
const h = require("react-hyperscript");

const InputStack = require("./input-stack");
const WeightStack = require("./weight-stack");
const PercTable = require("./perc-table");

module.exports = class App extends Component {
    render() {
        return div({className: "main ui container"}, [
            div({className: "stuck-to-bottom"}, [
                br(),
                h(InputStack, this.props.vals)
            ]),
            h(WeightStack, this.props.plates),
            h(PercTable, this.props.vals)
        ]);
    }
};
