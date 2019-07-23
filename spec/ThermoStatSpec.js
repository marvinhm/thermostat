describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Has a default temperature of 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("Can increase the temperature with .up", function() {
    expect(thermostat.up()).toBeGreaterThan(20);
  });

  it("Can decrease the temperature with .down", function() {
    expect(thermostat.down()).toBeLessThan(20);
  });

  it("Has a minimum temperature of 10 degrees", function() {
    while(thermostat.temperature > 10){
      thermostat.down();
    }
    thermostat.down()
    expect(thermostat.temperature).toEqual(10);
  })
})
