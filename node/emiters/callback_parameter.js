var events = require('events');

function CarShow() {
  events.EventEmitter.call(this);

  this.seeCar = function(make) {
    this.emit('sawCar', make);
  };
}

CarShow.prototype.__proto__ = events.EventEmitter.prototype;
// class CarShow extends EventEmitter? 

var show = new CarShow();

function logCar(make) {
  console.log('Widziano samochod, Marka:', make);
}

function logColorCar(make, color) {
  console.log('Widziano samochod, Marka: %s, Kolor %s', make, color);
}

show.on('sawCar', logCar);
show.on('sawCar', function(make){
  var colors = ['czerwony', 'niebieski', 'czarny', 'zielony', 'bialy'];
  var color = colors[Math.floor(Math.random()*colors.length)];
  logColorCar(make, color);
});

show.seeCar("Ferrari");
show.seeCar("Porsche");
show.seeCar("Bugatti");
show.seeCar("Lamborghini");
show.seeCar("Aston Martin");

