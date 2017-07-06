const {Component} = require("react");
const {div, input} = require("react-hyperscript-helpers");

const changeKg = require("../data-flow/kg-change");

module.exports = class KGInput extends Component {
    render() {
        return div({className: "ui right labeled fluid large input"}, [
            input({type: "text", onChange: evt => changeKg(evt.target.value), value: this.props.kg}),
            div({className: "ui label"}, "KG")
        ]);
    }
};
