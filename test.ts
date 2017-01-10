import test from 'ava'
import { concat } from './index'

const a = new Map
a.set('a', 1)
a.set('b', 2)

const b = new Map
b.set('c', 3)
b.set('d', 4)

const c = new Map
c.set('e', 5)
c.set('f', 6)

const d = new Map
d.set('a', 1)
d.set('b', 2)
d.set('c', 3)
d.set('d', 4)

const e = new Map
e.set('a', 1)
e.set('b', 2)
e.set('c', 3)
e.set('d', 4)
e.set('e', 5)
e.set('f', 6)

test('it should throw an error when passed no maps', t =>
  t.throws(() => (concat as any)(), TypeError)
)

test('it should concatenate 1 map', t =>
  t.deepEqual(concat(a), a)
)

test('it should concatenate 2 maps', t =>
  t.deepEqual(concat(a, b), d)
)

test('it should concatenate 3 maps', t =>
  t.deepEqual(concat(a, b, c), e)
)
