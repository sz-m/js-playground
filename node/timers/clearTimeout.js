function test(timer) {
  console.timeEnd(timer);
}

console.time('jedna sekunda');
setTimeout(test, 1000, 'jedna sekunda');

console.time('piec sekund');
var t = setTimeout(test, 5000, 'piec sekund');

console.time('dziesiec sekund');
setTimeout(test, 10000, 'dziesiec sekund');

clearTimeout(t);