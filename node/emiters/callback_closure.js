function logCar(logMsg, callback) {
  process.nextTick(function(){
    callback(logMsg);
  });
}

var cars = ['Ferrari', 'Porsche', 'Bugatti', 'Fiat'];

for(var idx in cars) {
  var message = 'Widziano samochod ' + cars[idx];
  logCar(message, function() {
    console.log('Normalne wywolanie zwrotne:', message);
  });
}

for(var idx in cars) {
  var message = 'Widziano samochod ' + cars[idx];
  (function(msg){
    logCar(msg, function(){
      console.log('Wywolanie zwrotne z domknieciem:', msg);
    });
  })(message);
}