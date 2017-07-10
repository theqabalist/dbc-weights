const {Component} = require("react");
const h = require("react-hyperscript");
const {div, h3, input, label, table, thead, th, tbody, tr, td} = require("react-hyperscript-helpers");
const {fromEvents} = require("kefir");
const state = require("../atom");
const {prop, assocPath, pipe} = require("ramda");
const EventEmitter = require("eventemitter3");
const plates = require("../plates");
const changeEmitter = new EventEmitter();

fromEvents(changeEmitter, "no-red-changed")
    .onValue(() => {
        state.dispatch(state => {
            const noRed = !state.vals.noRed;
            return pipe(
                assocPath(["vals", "noRed"], noRed),
                assocPath(["plates", "mens"], (noRed ? plates.noRed : plates).mens(state.vals.kg)),
                assocPath(["plates", "womens"], (noRed ? plates.noRed : plates).womens(state.vals.kg))
            )(state);
        });
    });

module.exports = class Settings extends Component {
    render() {
        return div({
            onClick: e => {
                e.stopPropagation();
            }, style: {paddingTop: "1em", paddingBottom: "1em", width: "95%", margin: "auto"}, className: "ui segment"
        }, [
            div({className: "ui container"}, [
                div({className: "header"}, [h3("Settings")]),
                table({className: "ui unstackable very basic table", style: {width: "100%"}}, [
                    tbody([
                        tr([
                            td("No red plates available."),
                            td({className: "right aligned"}, [div({
                                className: "ui fitted toggle checkbox", onClick: e => {
                                    changeEmitter.emit("no-red-changed");
                                }
                            }, [input({type: "checkbox"}), label()])])
                        ]),
                        tr([
                            td("Women's mode."),
                            td({className: "right aligned"}, [div({className: "ui fitted toggle checkbox"}, [input({type: "checkbox", disabled: true}), label()])])
                        ])
                    ])
                // ,
                // div({className: "ui horizontal segments"}, [
                //     div({className: "ui segment"}, ["No red plates available."]),
                // div({className: "ui compact center aligned segment"}, )
                // ]),
                // div({className: "ui horizontal segments"}, [
                //     div({className: "ui segment"}, ["Women's bar mode."]),
                //     div({className: "ui compact center aligned segment"}, [div({className: "ui fitted toggle checkbox"}, [input({type: "checkbox"}), label()])])
                // ])
                ])
            ])
        ]);
    }
};
