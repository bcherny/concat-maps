/**
 * Efficiently concatenates ES6 Maps
 */
export function concat<A, B>(map1: Map<A, B>, ...maps: Map<A, B>[]): Map<A, B> {

  if (!map1) {
    throw new TypeError('concat expects to be passed at least one ES6 Map')
  }

  const map = new Map<A, B>()
  concat2(map, map1)
  maps.forEach(_ => concat2(map, _))
  return map
}

function concat2<A, B>(map1: Map<A, B>, map2: Map<A, B>): Map<A, B> {
  Array.from(map2).forEach(([a, b]) => map1.set(a, b))
  return map1
}
