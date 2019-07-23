function Thermostat() {
  this.temp = 20;
  this.minTemp = 10;
  this.power_saving_mode = true;
  this.up = function() {
      if(this.power_saving_mode && this.temp < 25) {
        this.temp++;
      } else if (!this.power_saving_mode && this.temp < 32) {
        this.temp++;
      } else {
      }
      return this.temp;
  };
  this.down = function() {
    if(this.temp > this.minTemp) {
      this.temp--;
    };
    return this.temp;
  };
  this.reset = function() {
    this.temp = 20;
  }
  this.getEnergyUsage = function(){
    if (this.temp < 18) {
      return "low-usage";
    } else if (this.temp < 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}
