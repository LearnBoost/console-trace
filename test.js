require('./console-trace')
require('./console-trace')() // should work even if I require it twice

// visual pad
console.log('');

console.error(' regular console.error, no clue where it came from');

// visual pad
process.stdout.write(' ');

console.traced.error('this is a traced console.error');

// visual pad
console.log('');

console.log(' regular console.log, no clue where it came from');

// visual pad
process.stdout.write(' ');

console.traced.log('this is a traced console.log');

// visual pad
console.log('');

console.log(' regular console.log, no clue where it came from');

// visual pad
process.stdout.write(' ');

// change alignment
console.traceOptions.right = true;

console.traced.log('this is a traced console.log');

// visual pad
console.log('');

console.log(' regular console.log, no clue where it came from');

// visual pad
process.stdout.write(' ');

// change alignment
console.traceOptions.always = true;
console.traceOptions.colors = false;

console.error('this is a traced console.log');

console.traceOptions.always = false;

// visual pad
console.log('');

// visual pad
process.stdout.write(' ');

console.traced.trace('this is a traced console.trace')

console.traceOptions.always = false;

// pad
console.log('');