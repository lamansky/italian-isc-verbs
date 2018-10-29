'use strict'

const assert = require('assert')
const deduplicate = require('deduplicate')

for (const set of ['', '/always', '/sometimes']) {
  const verbs = require('.' + set)
  describe('italian-isc-verbs' + set, function () {
    it('should be an array', function () {
      assert(Array.isArray(verbs))
    })

    it('should not have duplicates', function () {
      assert.deepEqual(verbs, deduplicate(verbs))
    })

    if (set !== '') {
      it('should be alphabetical', function () {
        assert.deepEqual(verbs, verbs.slice().sort())
      })
    }
  })
}
