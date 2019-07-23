describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Has a default temp of 20", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("Can increase the temp with .up", function() {
    expect(thermostat.up()).toBeGreaterThan(20);
  });

  it("Can decrease the temp with .down", function() {
    expect(thermostat.down()).toBeLessThan(20);
  });

  it("Has a minimum temp of 10 degrees", function() {
    while(thermostat.temp > 10){
      thermostat.down();
    }
    thermostat.down()
    expect(thermostat.temp).toEqual(10);
  })
  it("has a power_saving_mode attribute set ot true by default", function(){
      expect(thermostat.power_saving_mode).toEqual(true);
  })
  it("Has a max temp of 25 degrees when power saving mode is on", function() {
    while(thermostat.temp < 25){
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.temp).toEqual(25);
  })
  it("Has a max temp of 32 degrees when power saving mode is off", function() {
    thermostat.power_saving_mode = false;
    while(thermostat.temp < 32){
      thermostat.up();
    }
    thermostat.up();
    expect(thermostat.temp).toEqual(32);
  })
  it("has a reset function that resets the temp to 20", function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.temp).toEqual(20);
  })
  it("has a getEnergyUsage function that returns the low-usage for temps  < 18", function() {
    while (thermostat.temp >= 18) {
      thermostat.down();
    }
    expect(thermostat.getEnergyUsage()).toEqual("low-usage");
  })
  it("has a getEnergyUsage function that returns the low-usage for temps  >= 18 but <25", function() {
    thermostat.temp = 18
    expect(thermostat.getEnergyUsage()).toEqual("medium-usage");
  })
  it("has a getEnergyUsage function that returns the high-usage for temps  >= 25", function() {
    thermostat.temp = 25
    expect(thermostat.getEnergyUsage()).toEqual("high-usage");
  })
})
