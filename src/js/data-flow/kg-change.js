const {fromEvents} = require("kefir");
const EventEmitter = require("eventemitter3");
const {multiply, or, __, pipe, assocPath} = require("ramda");
const state = require("../atom");
const KG2LB = 2.20462;

const changeEmitter = new EventEmitter();

const plates = require("../plates");

fromEvents(changeEmitter, "kg-change")
    .map(s => s.replace(/[^\d]/, ""))
    .map(parseInt)
    .map(or(__, 0))
    .map(x => x > 320 ? 320 : x)
    .onValue(v => {
        state.dispatch(state => pipe(
            assocPath(["vals", "kg"], v),
            assocPath(["vals", "lb"], multiply(KG2LB, v)),
            assocPath(["plates", "mens"], (state.vals.noRed ? plates.noRed : plates).mens(v)),
            assocPath(["plates", "womens"], (state.vals.noRed ? plates.noRed : plates).womens(v))
        )(state));
    });

module.exports = v => changeEmitter.emit("kg-change", v);
