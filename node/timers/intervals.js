function log(timer) {
  console.timeEnd(timer);
  console.time(timer);
}

console.time('co sekunde');
setInterval(log, 1000, 'co sekunde');

console.time('co dwie sekundy');
setInterval(log, 2000, 'co dwie sekundy');

console.time('co piec sekund');
setInterval(log, 5000, 'co piec sekund');