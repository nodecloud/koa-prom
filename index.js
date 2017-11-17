import {collectDefaultMetrics, Registry, Counter, Gauge, Histogram} from 'prom-client';

const defaultRegister = new Registry();

export default function (options) {
    options = options || {};

    const register = options.register || defaultRegister;
    const url = options.url || '/metrics';

    collectDefaultMetrics({timeout: 5000, register});

    return async function (ctx, next) {
        if (url === ctx.url) {
            ctx.body = register.metrics();
        }

        return next();
    }
};