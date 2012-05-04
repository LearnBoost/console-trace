
/**
 * Module dependencies.
 */

var callsite = require('callsite')
  , tty = require('tty')

/**
 * Overrides the console methods.
 */

;['error', 'log', 'info', 'warn'].forEach(function (name) {
  var fn = console[name];
  console[name] = function () {
    if (console._trace || console.traceAlways) {
      arguments[0] = console.traceFormat(__stack[1], name) + arguments[0];
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

function getBasename(call) {
	var fileName = call.getFileName(),
		basename = fileName.toLowerCase().replace(process.cwd().toLowerCase() + '/', '');
	
	return fileName.slice(-basename.length);
}

console.traceFormat = function (call, method) {
  var basename = getBasename(call)
    , str = '[' + basename + ':' + call.getLineNumber() + '] '

  if (false === console.traceColors || tty.isatty()) {
    return '\033[' + ('error' == method ? '91' : '90') + 'm' + str + '\033[39m';
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
