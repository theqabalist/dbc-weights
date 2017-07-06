const {Component} = require("react");
const {div} = require("react-hyperscript-helpers");
const h = require("react-hyperscript");

const KGInput = require("./kg-input");
const LBInput = require("./lb-input");
const NoRedInput = require("./no-red-input");

module.exports = class InputStack extends Component {
    render() {
        return div({className: "ui horizontal segments container"}, [
            div({className: "ui right aligned segment"}, [h(LBInput, this.props)]),
            div({className: "ui right aligned segment"}, [h(KGInput, this.props)])
            // div({className: "ui right aligned segment"}, [h(NoRedInput, this.props)])
        ]);
    }
};
