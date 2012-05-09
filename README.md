# console-trace

Extends the native Node.JS `console` object to prefix logging functions
with the [CallSite](http://github.com/visionmedia/callsite) information.

To read more about runtime stack trace introspection you can refer to [this
article](http://www.devthought.com/2011/12/22/a-string-is-not-an-error/#beyond).

![](http://f.cl.ly/items/1T2K0H0i2H2J0C3q3H2u/console-trace.png)

## Installation

    $ npm install console-trace

### Syntax:

```javascript
require('console-trace')([options])
```

### Available Options:

* __always__ - (`Boolean`: defaults to false) always print the callsite info even without accessing methods from the `t` or `traced` getters.
* __cwd__ - (`String`: defaults to `process.cwd()`) the path that will be stripped from the callsite info
* __colors__ - (`Boolean|Object`: defaults to true) terminal colors support flag or a custom color object
* __right__ - (`Boolean`: defaults to false) callsite alignment flag, when true prints infos on the right

### Examples:

```javascript
require('console-trace')
```

You can add the `t` or `traced` getter to your calls to obtain a stacktrace:

```javascript
console.t.log('a');
console.traced.log('a');
```

You can also make every console call trace:

```javascript
require('console-trace')({
  always: true,
})

...

console.log('a');     // tracing
console.error('a');   // tracing
```

You can align the callsite infos to the right

```javascript
require('console-trace')({
  always: true,
  right: true
})

...

console.log('a');     // tracing right
console.error('a');   // tracing right
```

You can change defaults colors too

```javascript
require('./console-trace')({
  always: true,
  colors: {
    warn: '35',
    info: '32'
  }
})

...

console.warn('a');    // magenta
console.info('a');    // green
```

To customize the string that's prefixed to the calls, override the
`console.traceFormat` function.

## Beyond console

If you have more sophisticated logging needs, or don't wish to extend
`console`, I suggest you look at [tracer](https://github.com/baryon/tracer).

## Credits

  * [Guillermo Rauch](https://github.com/guille)
  * [Kilian Ciuffolo](https://github.com/kilianc)
  * [Nicholas Manousos](https://github.com/nmanousos)  

## License 

(The MIT License)

Copyright (c) 2012 Guillermo Rauch &lt;guillermo@learnboost.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.