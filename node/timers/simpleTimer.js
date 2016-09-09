function end(timer) {
  console.timeEnd(timer);
}

console.time('dziesiec sekund');
setTimeout(end, 10000, 'dziesiec sekund');

console.time('trzy sekundy');
setTimeout(end, 3000, 'trzy sekundy');

console.time('sekunda');
setTimeout(end, 1000, 'sekunda');

console.time('piec sekund');
setTimeout(end, 5000, 'piec sekund');

