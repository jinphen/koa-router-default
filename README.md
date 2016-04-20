## koa-router-default

put sub router ahead

### Installation

```bash
npm install koa-router-default
```

### API
routerDefault(routers, path);

- routers: koa-router middleware
- path: some sub path

### Example

```js
var app = require('koa')();
var router = require('koa-router')();
var routerDefault = require('koa-router-default');


/**
 * router
 */
app.use(router.routes());
app.use(routerDefault(router.routes(), '/sub/path')); // /abcd  => /sub/path/abcd

/**
 * listen port
 */
app.listen(3000);
```