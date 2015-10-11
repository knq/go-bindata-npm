var os    = require('os');
var path  = require('path');
var child = require('child_process');

var BINDATA = path.join(__dirname, 'vendor', 'go-bindata-' + os.platform());

module.exports = function(params) {
  var args = [];

  // loop over parameters
  Object.keys(params).forEach(function(p) {
    // force into an array if not
    var vals = Array.isArray(params[p]) ? params[p] : [params[p]];

    // loop over each and push onto args
    vals.forEach(function(val) {
      var str = '-' + p;
      if (val !== true) {
        str += '=' + val;
      }

      args.push(str);
    });
  });

  // grab paths
  var paths = Array.prototype.slice.call(arguments, 1);

  // execute
  return child.spawnSync(BINDATA, args.concat(paths));
};
