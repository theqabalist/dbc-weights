const bus = require("./the-bus");
const {fromEvents} = require("kefir");
const {pipe, assocPath, curry} = require("ramda");
const {registerStream} = require("../atom");

registerStream(fromEvents(bus, "open-modal")
    .map(({name}) => pipe(
        assocPath(["modal", "active"], true),
        assocPath(["modal", "name"], name)
    )));

module.exports = curry((name, event) => bus.emit("open-modal", {name, event}));
