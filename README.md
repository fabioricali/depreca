<div align="center">
<h1>depreca</h1>
Mark something as deprecated with a simple module.
<br/><br/>
<a href="https://travis-ci.org/fabioricali/depreca" target="_blank"><img src="https://travis-ci.org/fabioricali/depreca.svg?branch=master" title="Build Status"/></a>
<a href="https://coveralls.io/github/fabioricali/depreca?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/fabioricali/depreca/badge.svg?branch=master" title="Coverage Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>
<img src="https://img.shields.io/badge/team-terrons-orange.svg" title="Team Terrons"/>
</div>

## Installation

### Node.js
```
npm install depreca --save
```

## Example
Just one method!

### Deprecate function
```javascript
const deprecate = require('depreca');

function foo(){
    deprecate('foo() is deprecated use bar() instead');
}
```
### Deprecate object property
```javascript
const config = {
    foo: 'hello',
    bar: 'world'
};

deprecate(config.foo, 'foo is deprecated use bar instead');

```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/depreca/blob/master/CHANGELOG.md">here</a>

## License
depreca is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>