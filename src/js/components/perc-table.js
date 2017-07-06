const {Component} = require("react");
const {div, h3, thead, tr, th, table, tbody, td} = require("react-hyperscript-helpers");
const h = require("react-hyperscript");
const {range, map, add, multiply, compose, addIndex, splitEvery, transpose} = require("ramda");

const round = x => Math.round(x);
const mapIndexed = addIndex(map);
const WeightLink = require("./weight-link");

module.exports = class PercentageTable extends Component {
    render() {
        const lower = Math.round(this.props.kg * 0.5);
        const upper = Math.round(this.props.kg * 1.5);
        const delta = (upper - lower) / 100.0;
        const weightRows = mapIndexed((vec, i) => [i].concat(vec), transpose(splitEvery(10, map(compose(round, add(lower), multiply(delta)), range(0, 110)))));
        const headers = ["%"].concat(map(compose(add(50), multiply(10)), range(0, 11)));

        return div({className: "ui segments"}, [
            div({className: "ui inverted center aligned blue segment"}, [h3("Percentages")]),
            div({className: "ui right aligned segment"}, [
                table({className: "ui unstackable definition table", style: {width: "100%"}}, [
                    thead([
                        tr(headers.map(th))
                    ]),
                    tbody(weightRows.map(row => tr(row.map((data, i) => td({className: "ui center aligned"}, [i > 0 ? h(WeightLink, {val: data}) : data])))))
                ])
            ])
        ]);
    }
};
