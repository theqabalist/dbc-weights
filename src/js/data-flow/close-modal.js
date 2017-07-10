const bus = require("./the-bus");
const {fromEvents} = require("kefir");
const {pipe, assocPath} = require("ramda");
const {registerStream} = require("../atom");

registerStream(fromEvents(bus, "close-modal")
    .map(() => pipe(
        assocPath(["modal", "active"], false),
        assocPath(["modal", "name"], null)
    )));

module.exports = evt => bus.emit("close-modal", evt);
