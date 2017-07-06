const {Component} = require("react");
const {div, h3} = require("react-hyperscript-helpers");
const h = require("react-hyperscript");

const MensOutput = require("./mens-output");
const WomensOutput = require("./womens-output");

module.exports = class WeightStack extends Component {
    render() {
        return div({className: "ui segments"}, [
            div({className: "ui inverted center aligned red segment"}, [h3("Loaded Bar")]),
            div({className: "ui right aligned segment"}, [h(MensOutput, this.props)])
        ]);
    }
};
