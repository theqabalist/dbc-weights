const {Component} = require("react");
const {div, h3, thead, tr, th, a, table, tbody, td} = require("react-hyperscript-helpers");
const h = require("react-hyperscript");
const {range, map, add, multiply, assocPath, compose, addIndex, splitEvery, transpose} = require("ramda");

const round = x => Math.round(x);
const mapIndexed = addIndex(map);
const WeightLink = require("./weight-link");
const state = require("../atom");

const onClick = e => {
    e.preventDefault();
    state.dispatch(state => assocPath(["vals", "percBase"], !state.vals.percBase, state));
};

module.exports = class PercentageTable extends Component {
    render() {
        const base = this.props.percBase ? 0.5 : 0.0;
        const lower = Math.round(this.props.kg * (base + 0.5));
        const upper = Math.round(Number(this.props.kg * (base + 1)));
        const delta = (upper - lower) / 50;
        const weightRows = mapIndexed((vec, i) => [i].concat(vec), transpose(splitEvery(10, map(compose(round, add(lower), multiply(delta)), range(0, 50)))));
        const headers = ["%"].concat(map(compose(add(50 + base * 100), multiply(10)), range(0, 5)));

        return div({className: "ui segments"}, [
            div({className: "ui inverted center aligned blue segment"}, [h3({onClick}, "Percentages")]),
            div({className: "ui right aligned segment"}, [
                table({className: "ui unstackable striped definition table", style: {width: "100%"}}, [
                    thead([
                        tr(headers.map(v => th({className: "ui center aligned"}, [v])))
                    ]),
                    tbody(weightRows.map(row => tr(row.map((data, i) => td({className: "ui center aligned"}, [i > 0 ? h(WeightLink, {val: data}) : data])))))
                ])
            ])
        ]);
    }
};
