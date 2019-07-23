function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.up = function() {
    this.temperature++;
    return this.temperature;
  };
  this.down = function() {
    if(this.temperature > this.minTemp) {
      this.temperature--;
    };
    return this.temperature;
  };
}
