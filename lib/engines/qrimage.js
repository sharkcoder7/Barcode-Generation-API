const fs = require("mz/fs");
const path = require("path");
const qrimage = require("qr-image");
const engine = require("./engine");

class QRImage extends engine.Engine {
    async init() {}

    async destroy() {}

    async render(req, res, next) {
        const text = req.query.text || "hello world";
        const format = req.query.format || "PNG";
        var code = qrimage.image(text, {
            type: format
        });
        res.type(format);
        code.pipe(res);
    }
}

module.exports = {
    QRImage: QRImage
};
