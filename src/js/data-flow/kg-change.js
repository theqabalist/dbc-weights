const {fromEvents} = require("kefir");
const {multiply, or, __, pipe, assocPath, curry} = require("ramda");
const {registerStream} = require("../atom");
const KG2LB = 2.20462;

const plates = require("../plates");

const bus = require("./the-bus");

registerStream(fromEvents(bus, "kg-change")
    .map(s => s.replace(/[^\d]/, ""))
    .map(parseInt)
    .map(or(__, 0))
    .map(x => x > 320 ? 320 : x)
    .map(curry((v, state) => pipe(
        assocPath(["vals", "kg"], v),
        assocPath(["vals", "lb"], multiply(KG2LB, v)),
        assocPath(["plates", "mens"], (state.vals.noRed ? plates.noRed : plates).mens(v)),
        assocPath(["plates", "womens"], (state.vals.noRed ? plates.noRed : plates).womens(v))
    )(state)))
);

module.exports = v => bus.emit("kg-change", v);
