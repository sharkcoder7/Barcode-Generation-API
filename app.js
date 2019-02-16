// requires the multiple libraries
const express = require("express");
const process = require("process");
const util = require("hive-js-util");
const package = require("./package");
const lib = require("./lib");

// builds the initial application object to be used
// by the application for serving
const app = express();

process.on("SIGINT", function() {
    process.exit();
});

process.on("SIGTERM", function() {
    process.exit();
});

process.on("exit", () => {
    util.Logging.info("Exiting on user's request");
    lib.destroy();
});

app.get("/", (req, res, next) => {
    async function clojure() {
        lib.verifyKey(req);
        const engine = req.query.engine || "qrimage";
        const engineModule = lib.ENGINES[engine];
        const engineInstance = engineModule.singleton();
        await engineInstance.render(req, res, next);
    }
    clojure().catch(next);
});

app.get("/info", (req, res, next) => {
    res.json({
        name: info.name,
        version: info.version,
        node: process.version
    });
});

app.listen(lib.PORT, lib.HOSTNAME, () => {
    lib.startLogging();
    util.Logging.info("Listening on " + lib.HOSTNAME + ":" + String(lib.PORT));
    lib.init();
});
