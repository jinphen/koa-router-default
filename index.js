var path = require('path');

module.exports = function(routes, prefix) {
    var next = function* (next) {
        if (!this.status || this.status === 404) {
            this.origPath = this.path;
            this.path = path.join(prefix || '', this.path);
            yield routes.call(this, next);
        } else {
            yield next;
        }
    }
    return next
}