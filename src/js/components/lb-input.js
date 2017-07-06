const {Component} = require("react");
const {div, input} = require("react-hyperscript-helpers");

module.exports = class LBInput extends Component {
    render() {
        return div({className: "ui right labeled fluid small input"}, [
            input({type: "text", disabled: "true", value: this.props.lb.toFixed(1)}),
            div({className: "ui label"}, "LB")
        ]);
    }
};
