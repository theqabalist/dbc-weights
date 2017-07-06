const {Component} = require('react');
const {div, input} = require('react-hyperscript-helpers');
const {fromEvents} = require('kefir');
const EventEmitter = require('eventemitter3');
const {path, multiply, or, __, pipe, assocPath} = require('ramda');
const state = require('../atom');
const KG2LB = 2.20462;

const changeEmitter = new EventEmitter();

const plates = require('../plates');

fromEvents(changeEmitter, 'kg-change')
    .map(path(['target', 'value']))
    .map(s => s.replace(/[^\d]/, ''))
    .map(parseInt)
    .map(or(__, 0))
    .map(x => x > 320 ? 320 : x)
    .onValue(v => {
        state.dispatch(state => pipe(
            assocPath(['vals', 'kg'], v),
            assocPath(['vals', 'lb'], multiply(KG2LB, v)),
            assocPath(['plates', 'mens'], (state.vals.noRed ? plates.noRed : plates).mens(v)),
            assocPath(['plates', 'womens'], (state.vals.noRed ? plates.noRed : plates).womens(v))
        )(state));
    });

module.exports = class KGInput extends Component {
    render() {
        return div({className: 'ui right labeled fluid massive input'}, [
            input({type: 'text', onChange: evt => changeEmitter.emit('kg-change', evt), value: this.props.kg}),
            div({className: 'ui label'}, 'KG')
        ]);
    }
};
