const errors = require("../util/errors");

class Engine {
    static singleton() {
        if (this._engine) {
            return this._engine;
        }
        this._engine = new this();
        return this._engine;
    }

    async init() {
        throw errors.NotImplementedError();
    }

    async destroy() {
        throw errors.NotImplementedError();
    }

    async render(req, res, next) {
        throw errors.NotImplementedError();
    }
}

module.exports = {
    Engine: Engine
};
