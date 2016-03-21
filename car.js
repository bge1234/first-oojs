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

console.log("New car:");
var prius = new Car("toyota");
console.log(prius);
console.log("");

console.log("Starting car...");
prius.start();
console.log(prius);
console.log("");

console.log("Using 30% of fuel...");
prius.useGas(30);
console.log(prius);
console.log("");

console.log("Refueling...");
prius.refuel();
console.log(prius);
