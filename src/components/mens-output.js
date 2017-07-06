const {Component} = require('react');
const h = require('react-hyperscript');
const {div} = require('react-hyperscript-helpers');
const {reduce, add, map, prop, __, pipe, assoc, reverse} = require('ramda');


class MensBar extends Component {
    render() {
        return div({style: {height: '100%', width: '100%', top: 0, left: 0}}, [
            div({className: 'left sleeve'}),
            div({className: 'left collar'}),
            div({className: 'mens bar'}),
            div({className: 'right collar'}),
            div({className: 'right sleeve'})
        ]);
    }
}

const plateLayout = {
    R: {width: 3, class: 'kg25'},
    B: {width: 2.5, class: 'kg20'},
    Y: {width: 2, class: 'kg15'},
    G: {width: 1.5, class: 'kg10'},
    W: {width: 1.2, class: 'kg5'},
    r: {width: 0.9, class: 'kg2-5'},
    b: {width: 0.9, class: 'kg2'},
    y: {width: 0.8, class: 'kg1-5'},
    g: {width: 0.7, class: 'kg1'},
    w: {width: 0.6, class: 'kg-5'}
};

const lookupPlate = prop(__, plateLayout);

const makeLeftPlates = plates => {
    const totalSize = reduce(add, 0, map(pipe(lookupPlate, prop('width')), plates));
    const adjusted = reduce(({plates, offset}, plate) => {
        const details = plateLayout[plate];
        return {
            plates: plates.concat(assoc('offset', offset, details)),
            offset: offset + details.width
        };
    }, {plates: [], offset: 18.5 - totalSize}, reverse(plates)).plates;
    return adjusted.map(({class: cls, width, offset}) => div({className: `${cls} plate`, style: {left: `${offset}%`, width: `${width}%`}}));
};

const makeRightPlates = plates => {
    const adjusted = reduce(({plates, offset}, plate) => {
        const details = plateLayout[plate];
        return {
            plates: plates.concat(assoc('offset', offset, details)),
            offset: offset + details.width
        };
    }, {plates: [], offset: 81.5}, plates).plates;
    return adjusted.map(({class: cls, width, offset}) => div({className: `${cls} plate`, style: {left: `${offset}%`, width: `${width}%`}}));
};

module.exports = class MensOutput extends Component {
    render() {
        return div({className: 'bar-container'}, [
            h(MensBar)
        ].concat(makeLeftPlates(this.props.mens))
         .concat(makeRightPlates(this.props.mens)));
    }
};
