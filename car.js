function Car(make) {
  this.make = make;
  this.gasLevel = 100;
  this.isOn = false;
  this.mileage = 0;
}

Car.prototype.start = function() {
  this.isOn = true;
}

Car.prototype.useGas = function(gas) {
  this.gasLevel -= gas;
}

Car.prototype.refuel = function() {
  this.gasLevel = 100;
}

var prius = new Car("toyota");

prius.start();
prius.useGas(30);

console.log(prius);

prius.refuel();

console.log(prius);
