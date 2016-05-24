var utils = require('loader-utils');

module.exports = function(content) {
    var loaderOpts = utils.getLoaderConfig(this, 'sassVarLoader');

    for (var key in loaderOpts) {
        var regExp = new RegExp('~~(' + key + ')\~~', 'g');
        content = content.replace(regExp, loaderOpts[key]);
    }

    return content;
}
