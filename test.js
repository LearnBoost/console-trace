require('./console-trace')
require('./console-trace')({}) // should work even if I require it twice

process.stdout.write('\n');

;['error', 'log', 'info', 'warn'].forEach(function (name) {
  process.stdout.write(' ');
  console[name]('regular console.%s, no clue where it came from', name);
});

process.stdout.write('\n---------------------------------------------------------\n\n');

;['error', 'log', 'info', 'warn'].forEach(function (name) {
  process.stdout.write(' ');
  console.traced[name]('this is a traced console.%s', name);
});

process.stdout.write('\n---------------------------------------------------------\n\n');

console.traceOptions.colors = false;

;['error', 'log', 'info', 'warn'].forEach(function (name) {
  process.stdout.write(' ');
  console.traced[name]('this is an uncolored traced console.%s', name);
});

process.stdout.write('\n---------------------------------------------------------\n\n');

console.traceOptions.right = true;
console.traceOptions.colors = true;

;['error', 'log', 'info', 'warn'].forEach(function (name) {
  process.stdout.write(' ');
  console.traced[name]('this is a colored right aligned traced console.%s', name);
});

process.stdout.write('\n---------------------------------------------------------\n\n');

console.traceOptions.always = true;
console.traceOptions.colors = false;

;['error', 'log', 'info', 'warn'].forEach(function (name) {
  process.stdout.write(' ');
  console[name]('this is an uncolored right aligned traced console.%s', name);
});

process.stdout.write('\n---------------------------------------------------------\n\n');

require('./console-trace')({
  colors: {
    log: '35',
    warn: '35',
    error: '35',
    trace: '35',
    info: '35'
  }
})

;['error', 'log', 'info', 'warn', 'trace'].forEach(function (name) {
  process.stdout.write(' ');
  console.traced[name]('this is a magenta traced console.' + name);
});

process.stdout.write('\n---------------------------------------------------------\n\n');

console.traceOptions.colors = true;

process.stdout.write(' ');
console.traced.log({ 1: 'works', 2: 'with', 3: 'Object' });

process.stdout.write(' ');
console.traced.log(['Works', 'with', 'Array']);

process.stdout.write(' ');
console.traced.log('Works with Buffer', Buffer('FooBar'));