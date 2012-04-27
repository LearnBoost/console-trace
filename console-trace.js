
/**
 * Module dependencies.
 */

var callsite = require('callsite')
  , tty = require('tty')

console.traceOptions = Object.create(null)

/**
 * Store custom options
 *
 * @param {Object} options
 * @api public
 */

module.exports = function (options) {
  if (opt) {
    console.traceOptions = options;
  }
}

/**
 * Overrides the console methods.
 */

;['error', 'log', 'info', 'warn'].forEach(function (name) {
  var fn = console[name];
  console[name] = function () {
    if (console._trace || console.traceOptions.traceAlways) {
      var pad = (arguments[0] && !console.traceOptions.traceRight ? ' ' : '');
      arguments[0] =  console.traceFormat(__stack[1], name) + pad + arguments[0];
    }
    console._trace = false;
    return fn.apply(this, arguments);
  }
});

/**
 * Overridable formatting function.
 *
 * @param {CallSite}
 * @param {String} calling method
 * @api public
 */

console.traceFormat = function (call, method) {
  var basename = call.getFileName().replace(process.cwd() + '/', '')
    , str = '[' + basename + ':' + call.getLineNumber() + ']'

  if (false === console.traceOptions.traceColors || tty.isatty()) {
    if (console.traceOptions.traceRight) {
      var rowWidth = process.stdout.getWindowSize()[0];
      return '\033[s' + // save current position
             '\033[' + rowWidth + 'D' + // move to the start of the line
             '\033[' + (rowWidth - str.length) + 'C' + // align right
             '\033[' + ('error' == method ? '91' : '90') + 'm' + str + '\033[39m' +
             '\033[u'; // restore current position
    } else {
      return '\033[' + ('error' == method ? '91' : '90') + 'm' + str + '\033[39m';
    }
  } else {
    return str;
  }
}

/**
 * Adds trace getter to the `console` object.
 *
 * @api public
 */

function getter () {
  this._trace = true;
  return this;
}

console.__defineGetter__('t', getter);
console.__defineGetter__('traced', getter);
