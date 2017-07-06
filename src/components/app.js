const {Component} = require('react');
const {div, h1, br} = require('react-hyperscript-helpers');
const h = require('react-hyperscript');

const InputStack = require('./input-stack');
const WeightStack = require('./weight-stack');

module.exports = class App extends Component {
    render() {
        return div({className: 'ui container'}, [
            h1({className: 'ui centered header title'}, [br(), 'Bar Loader Assistant']),
            h(InputStack, this.props.vals),
            h(WeightStack, this.props.plates)
        ]);
    }
};
