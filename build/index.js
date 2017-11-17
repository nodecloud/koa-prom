'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    options = options || {};

    const register = options.register || defaultRegister;
    const url = options.url || '/metrics';

    (0, _promClient.collectDefaultMetrics)({ timeout: 5000, register });

    return (() => {
        var _ref = _asyncToGenerator(function* (ctx, next) {
            if (url === ctx.url) {
                ctx.body = register.metrics();
            }

            return next();
        });

        return function (_x, _x2) {
            return _ref.apply(this, arguments);
        };
    })();
};

var _promClient = require('prom-client');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const defaultRegister = new _promClient.Registry();

;