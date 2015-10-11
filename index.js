var os    = require('os');
var path  = require('path');
var child = require('child_process');

var BINDATA = path.join(__dirname, 'vendor', 'go-bindata-' + os.platform());

module.exports = function(params) {
  // build args
  var args = [];
  for (var p in params) {
    var str = '-' + p;
    if (params[p] !== true) {
      str += '=' + params[p];
    }

    args.push(str);
  }

  // grab paths
  var paths = Array.prototype.slice.call(arguments, 1);

  // execute
  return child.spawnSync(BINDATA, args.concat(paths));
};
