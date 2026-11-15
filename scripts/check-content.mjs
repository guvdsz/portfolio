import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

function shape(value) {
  if (Array.isArray(value)) {
    assert(value.length > 0)
    return value.map(shape)
  }
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, shape(child)]))
  }
  assert.equal(typeof value, 'string')
  assert(value.trim().length > 0)
  return 'string'
}

const [pt, en] = await Promise.all(['pt', 'en'].map(async (locale) => {
  const file = new URL('../src/dictionaries/' + locale + '.json', import.meta.url)
  return JSON.parse(await readFile(file, 'utf8'))
}))

assert.deepEqual(shape(en), shape(pt), 'The Portuguese and English dictionaries must have matching keys')
