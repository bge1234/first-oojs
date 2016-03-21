function Car(make, gasLevel, isOn, mileage) {
  this.make = make;
  this.gasLevel = gasLevel;
  this.isOn = isOn;
  this.mileage = mileage;
}

var prius = new Car("toyota", 14, true, 15500);

console.log(prius);
