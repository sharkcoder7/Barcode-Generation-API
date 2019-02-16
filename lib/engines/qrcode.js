const qrcode = require("qrcode");
const engine = require("./engine");

class QRCode extends engine.Engine {
    async init() {}

    async destroy() {}

    async render(req, res, next) {
        const text = req.query.text || "hello world";
        const format = req.query.format || "PNG";
        const ecLevel = req.query.ec_level || "M";
        const size = parseInt(req.query.size || 5);
        const margin = parseInt(req.query.margin || 1);
        await qrcode.toFileStream(res, text, {
            type: format,
            errorCorrectionLevel: ecLevel,
            scale: size,
            margin: margin
        });
    }
}

module.exports = {
    QRCode: QRCode
};
