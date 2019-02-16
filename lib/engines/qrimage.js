const qrimage = require("qr-image");
const engine = require("./engine");

class QRImage extends engine.Engine {
    async init() {}

    async destroy() {}

    async render(req, res, next) {
        const text = req.query.text || "hello world";
        const format = req.query.format || "PNG";
        const ecLevel = req.query.ec_level || "M";
        const size = parseInt(req.query.size || 5);
        const margin = parseInt(req.query.margin || 1);
        const code = qrimage.image(text, {
            type: format,
            ec_level: ecLevel,
            size: size,
            margin: margin
        });
        res.type(format);
        await new Promise(function(resolve, reject) {
            const stream = code.pipe(res);
            stream.on("finish", resolve);
        });
    }
}

module.exports = {
    QRImage: QRImage
};
