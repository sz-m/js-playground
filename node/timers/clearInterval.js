var i = 0;

function j(timer) {
  i++;
  console.timeEnd(timer);
  console.time(timer);

  if(i === 10)
    clearInterval(int);
}


console.time('xt');
var int = setInterval(j, 1000, 'xt');