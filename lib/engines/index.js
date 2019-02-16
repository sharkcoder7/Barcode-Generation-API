const engine = require("./engine");
const qrcode = require("./qrcode");
const qrimage = require("./qrimage");

Object.assign(module.exports, engine);
Object.assign(module.exports, qrcode);
Object.assign(module.exports, qrimage);
