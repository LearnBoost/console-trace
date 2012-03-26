
# console-trace

Extends the native Node.JS `console` object to prefix logging functions
with the [CallSite](http://github.com/visionmedia/callsite) information.

To read more about runtime stack trace introspection you can refer to [this
article](http://www.devthought.com/2011/12/22/a-string-is-not-an-error/#beyond).

![](http://f.cl.ly/items/0r3t3i0P0D1w2K242p1U/Image%202012.03.26%2011:42:35%20AM.png)

## How to use

```js
require('console-trace')
```

You can add the `t` or `trace` getter to your calls to obtain a stacktrace:

```js
console.t.log('a');
console.trace.log('aaa');
```

You can also make every console call trace:

```js
console.traceAlways = true;
```

To disable colors completely, set the following:

```js
console.traceColors = false;
```

To customize the string that's prefixed to the calls, override the
`console.traceFormat` function.

## Beyond console

If you have more sophisticated logging needs, or don't wish to extend
`console`, I suggest you look at [tracer](https://github.com/baryon/tracer).

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
