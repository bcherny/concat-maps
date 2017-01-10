# concat-maps [![Build Status](https://img.shields.io/circleci/project/bcherny/concat-maps.svg?branch=master&style=flat-square)](https://circleci.com/gh/bcherny/concat-maps) [![NPM](https://img.shields.io/npm/v/concat-maps.svg?style=flat-square)](https://www.npmjs.com/package/concat-maps) [![MIT](https://img.shields.io/npm/l/concat-maps.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> Efficiently concatenate ES6 Maps

## Installation

```sh
npm install concat-maps --save
```

## Usage

```js
import { concat } from 'concat-maps'

const a = new Map
a.set('a', 1)

const b = new Map
b.set('b', 2)

const c = concat(a, b)
// Map {
//   "a" => 1,
//   "b" => 2
// }
```

## Tests

```sh
npm test
```

## License

MIT