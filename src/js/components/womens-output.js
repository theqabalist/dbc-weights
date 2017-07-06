const {Component} = require("react");
const {h2} = require("react-hyperscript-helpers");

module.exports = class WomensOutput extends Component {
    render() {
        return this.props.mens ? h2() : h2({className: "ui header"}, "At least 15kg is required to render women's bar.");
    }
};
