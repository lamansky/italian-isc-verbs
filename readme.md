# italian-isc-verbs

Some Italian verbs ending in –ire follow an alternate inflection pattern that uses the –isc– infix. This module aims to be a complete list of all such verbs. (If this list is missing a verb, please submit a pull request.)

## Installation

```bash
npm i italian-isc-verbs
```

## API

The module can be imported in three ways:

* `italian-isc-verbs/always`: Exports an array of stems of verbs that _always_ adhere to the –isc– conjugation.
* `italian-isc-verbs/sometimes`: Exports an array of stems of verbs that have two possible conjugations: the –isc– conjugation and the standard –ire conjugation.
* `italian-isc-verbs`: Exports an array which combines both of the above lists.

These lists contain the verb stems only. To get the infinitive forms, add the –ire suffix to each stem.

## Example

```javascript
const iscVerbs = require('italian-isc-verbs')

Array.isArray(iscVerbs) // true
iscVerbs.length // 494
iscVerbs[0] // abbell
iscVerbs[0] + 'ire' // abbellire
```
