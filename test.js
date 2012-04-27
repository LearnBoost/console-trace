
require('./console-trace')

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
console.traceOptions.traceRight = true;

console.trace.log('this is a traced console.log');

// visual pad
console.log('');

console.log(' regular console.log, no clue where it came from');

// visual pad
process.stdout.write(' ');

// change alignment
console.traceOptions.traceAlways = true;
console.traceOptions.traceColors = false;

console.error('this is a traced console.log');

console.traceOptions.traceAlways = false;
// pad
console.log('');
