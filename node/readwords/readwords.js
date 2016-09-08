var censor = require('censorify_xyz_eqx');

console.time('log');

console.log(censor.getCensoredWords());
console.log(censor.censor("Bardzo smutny, niedobry i szalony tekst."));

censor.addCensoredWord("ponury");

console.log(censor.getCensoredWords());
console.log(censor.censor("Bardzo ponury dzień."));

console.timeEnd('log');