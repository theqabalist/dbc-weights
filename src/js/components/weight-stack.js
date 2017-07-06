const {Component} = require('react');
const {div} = require('react-hyperscript-helpers');
const h = require('react-hyperscript');

const MensOutput = require('./mens-output');
const WomensOutput = require('./womens-output');

module.exports = class WeightStack extends Component {
    render() {
        return div({className: 'ui segments'}, [
            div({className: 'ui right aligned segment'}, [h(MensOutput, this.props)]),
            div({className: 'ui right aligned  segment'}, [h(WomensOutput, this.props)])
        ]);
    }
};
