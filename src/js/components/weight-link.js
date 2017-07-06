const {Component} = require("react");
const {a} = require("react-hyperscript-helpers");

const changeKg = require("../data-flow/kg-change");

const onClick = e => {
    e.preventDefault();
    changeKg(e.target.innerHTML);
};

module.exports = class WeightLink extends Component {
    render() {
        return a({className: "weight-link", href: "", onClick}, [this.props.val]);
    }
};
