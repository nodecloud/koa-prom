# koa-consul

This middleware will set a /metrics route as default for getting the prometheus monitor data.

## Usage

``` javascript
import Koa from 'koa';
import KoaConsul from 'koa-prom';

let app = new Koa();

app.use(KoaProm());
```

## API

### KoaConsul(options)

* options.url  default is /metrics.
* options.register: the prom-client register, if you don't give, it will use a default register.
