var i = 0;

function j(timer) {
  i++;
  console.timeEnd(timer);
  console.time(timer);
}


console.time('xt');
var int = setInterval(j, 1000, 'xt');

setTimeout(() => int.unref(), 5000);
setTimeout(() => int.ref(), 10000);