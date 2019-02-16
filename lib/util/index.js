const base = require("./base");
const config = require("./config");
const errors = require("./errors");

Object.assign(module.exports, base);
Object.assign(module.exports, config);
Object.assign(module.exports, errors);
