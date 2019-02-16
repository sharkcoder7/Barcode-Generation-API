const config = require("./config");
const qrimage = require("../engines/qrimage");

const ENGINES = {
    qrimage: qrimage.QRImage
};

function init() {
    initEngines();
}

function destroy() {
    destroyEngines();
}

/**
 * Initializes the complete set of registered "headless"
 * engines so that they become ready to be used.
 */
function initEngines() {
    Object.keys(ENGINES).forEach(function(key) {
        ENGINES[key].singleton().init();
    });
}

/**
 * Destroys the complete set of "headless" engines, so that
 * they become unavailable for usage.
 */
function destroyEngines() {
    Object.keys(ENGINES).forEach(function(key) {
        ENGINES[key].singleton().destroy();
    });
}

/**
 * Verifies that the key present in the request matches
 * the one defined in the current configuration, ensuring
 * that proper security measures are in place.
 *
 * @param {any} req The request to retrieve the key.
 */
function verifyKey(req) {
    if (!config.KEY) {
        return;
    }
    const _key = req.query.key || req.headers["X-Barcodies-Key"] || null;
    if (config.KEY === _key) {
        return;
    }
    throw new Error("Invalid key");
}

module.exports = {
    ENGINES: ENGINES,
    init: init,
    destroy: destroy,
    verifyKey: verifyKey
};
