function Car(make) {
  this.make = make;
  this.gasLevel = 100;
  this.isOn = false;
  this.mileage = 0;
}

Car.prototype.start = function() {
  this.isOn = true;
}

var prius = new Car("toyota");

prius.start();

console.log(prius);
