
/**
 * Module dependencies.
 */

var callsite = require('callsite')
  , isatty = require('tty').isatty()

console.traceOptions = Object.create(null);
console.traceOptions.cwd = process.cwd() + '/';
console.traceOptions.colors = true;

/**
 * Store custom options
 *
 * @param {Object} options
 * @api public
 */

module.exports = function (options) {
  if (options) {
    options.cwd = options.cwd || console.traceOptions.cwd;
    console.traceOptions = options;
  }
}

/**
 * Overrides the console methods.
 */

;['error', 'log', 'info', 'warn', 'trace'].forEach(function (name) {
  var fn = console[name];
  console[name] = function () {
    if (console._trace || console.traceOptions.always) {
      var pad = (arguments[0] && !console.traceOptions.right || !console.traceOptions.colors || !isatty ? ' ' : '');
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
  var basename = call.getFileName().replace(console.traceOptions.cwd, '')
    , str = '[' + basename + ':' + call.getLineNumber() + ']'

  if (!console.traceOptions.colors || !isatty) {
    return str;
  }
  if (console.traceOptions.right) {
    var rowWidth = process.stdout.getWindowSize()[0];
    return '\033[s' + // save current position
           '\033[' + rowWidth + 'D' + // move to the start of the line
           '\033[' + (rowWidth - str.length) + 'C' + // align right
           '\033[' + ('error' == method ? '91' : '90') + 'm' + str + '\033[39m' +
           '\033[u'; // restore current position
  } else {
    return '\033[' + ('error' == method ? '91' : '90') + 'm' + str + '\033[39m';
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
