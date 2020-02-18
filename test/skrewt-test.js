var assert = require('chai').assert
var Skrewt = require('../exercises/skrewt');
describe('Skrewt', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Skrewt);
  });

  it.skip('should have a name', function() {
    var skrewt = new Skrewt('Burny');
    assert.equal(skrewt.name, 'Burny');
  });

  it.skip('should have a weight in kg', function() {
    var skrewt = new Skrewt('Burny', 240);
    assert.equal(skrewt.weight, 240);
  });

  it.skip('should have an age', function() {
    var skrewt = new Skrewt('Burny', 240, 2);
    assert.equal(skrewt.age, 2);
  });

  it.skip('should eat 3% of bodyweight a day', function() {
    var skrewt = new Skrewt('Burny', 240, 2);
    skrewt.eat();
    assert.isAbove(skrewt.foodEaten, 7.19);
    assert.isBelow(skrewt.foodEaten, 7.21);
  });

  it.skip('should gain half the amount of food eaten as new body weight', function() {
    var skrewt = new Skrewt('Burny', 240, 2);
    skrewt.eat();
    assert.isAbove(skrewt.foodEaten, 7.19);
    assert.isBelow(skrewt.foodEaten, 7.21);
    assert.isAbove(skrewt.weight, 243.59);
    assert.isBelow(skrewt.weight, 243.61);
  });

  it.skip('should log total weight of food eaten', function() {
    var skrewt = new Skrewt('Burny', 240, 2);
    skrewt.eat()
    assert.isAbove(skrewt.foodEaten, 7.19);
    assert.isBelow(skrewt.foodEaten, 7.21);
    skrewt.eat()
    assert.isAbove(skrewt.foodEaten, 14.47);
    assert.isBelow(skrewt.foodEaten, 14.55);
  });

  it.skip('should gain weight according to current weight and food eaten', function() {
    var skrewt = new Skrewt('Burny', 240, 2);
    skrewt.eat()
    assert.isAbove(skrewt.weight, 243.59);
    assert.isBelow(skrewt.weight, 243.61);
    skrewt.eat()
    assert.isAbove(skrewt.weight, 247.248);
    assert.isBelow(skrewt.weight, 247.255);
  });

  it.skip('should note the day of the week, if not entered, default to Monday', function() {
    var skrewt1 = new Skrewt('Burny', 240, 2);
    var skrewt2 = new Skrewt('Flamy', 250, 1, 'Tuesday');
    assert.equal(skrewt1.dayOfWeek, 'Monday');
    assert.equal(skrewt2.dayOfWeek, 'Tuesday');
  });

  it.skip('should go to next day after sleeping', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    skrewt.sleep();
    assert.equal(skrewt.dayOfWeek, 'Tuesday');
    skrewt.sleep();
    assert.equal(skrewt.dayOfWeek, 'Wednesday');
    skrewt.sleep();
    assert.equal(skrewt.dayOfWeek, 'Thursday');
    skrewt.sleep();
    assert.equal(skrewt.dayOfWeek, 'Friday');
    skrewt.sleep();
    assert.equal(skrewt.dayOfWeek, 'Saturday');
    skrewt.sleep();
    assert.equal(skrewt.dayOfWeek, 'Sunday');
    skrewt.sleep();
    assert.equal(skrewt.dayOfWeek, 'Monday');
  });

  it.skip('should be alive at beginning', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    assert.equal(skrewt.isAlive, true)
  });

  it.skip('should start out in cage', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    assert.equal(skrewt.inCage, true);
  });

  it.skip('should be able to leave and enter the cage', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    assert.equal(skrewt.inCage, true);
    skrewt.cage();
    assert.equal(skrewt.inCage, false);
    skrewt.cage();
    assert.equal(skrewt.inCage, true);
  });

  it.skip('should die if eating on a Saturday outside of cage', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    skrewt.cage();
    skrewt.sleep();
    skrewt.sleep();
    skrewt.sleep();
    skrewt.sleep();
    skrewt.sleep();
    assert.equal(skrewt.dayOfWeek, 'Saturday');
    skrewt.eat();
    assert.equal(skrewt.isAlive, false);
  });

  it.skip('should die if skrewt gains over 5kg in one sitting', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    for (var i = 0; i < 25; i++) {
      skrewt.eat();
    }
    assert.isAbove(skrewt.weight * 0.015, 5)
    assert.equal(skrewt.isAlive, false);
  });

  it.skip('should not be able to eat once dead', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    for (var i = 0; i < 25; i++) {
      skrewt.eat();
    }
  });

  it.skip('should count number of times handlers get burned', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    assert.equal(skrewt.burnCount, 0);
  });

  it.skip('should set number of walks to zero at beginning', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    assert.equal(skrewt.walks, 0);
  });

  it.skip('should be able to go for a walk if outside of cage', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    skrewt.goWalk();
    assert.equal(skrewt.walks, 0);
    skrewt.cage();
    skrewt.goWalk();
    assert.equal(skrewt.walks, 1);
  });

  it.skip('should burn handlers when going on a walk on Mondays, Tuesdays, or Sundays', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    assert.equal(skrewt.burnCount, 0);
    skrewt.goWalk();
    assert.equal(skrewt.burnCount, 1);
    skrewt.goWalk();
    assert.equal(skrewt.burnCount, 2);
    skrewt.sleep();
    skrewt.goWalk();
    assert.equal(skrewt.burnCount, 3);
    skrewt.sleep();
    skrewt.sleep();
    skrewt.sleep();
    skrewt.sleep();
    skrewt.sleep();
    skrewt.goWalk();
    assert.equal(skrewt.burnCount, 4);
    skrewt.sleep();
    skrewt.goWalk();
    assert.equal(skrewt.burnCount, 4);
  });

  it.skip('should not be able to walk if dead', function() {
    var skrewt = new Skrewt('Burny', 240, 2, 'Monday');
    skrewt.isAlive = false;
    skrewt.goWalk();
    assert.equal(skrewt.walks, 0);
  });

  it.skip('should not die from the 5kg limit if skrewt has gone on over 9 walks', function() {
    var skrewt1 = new Skrewt('Burny', 240, 2, 'Monday');
    var skrewt2 = new Skrewt('Flamy', 240, 1, 'Monday');
    skrewt1.cage();
    skrewt2.cage();
    for (var i = 0; i < 10; i++) {
      skrewt1.goWalk();
    };
    for (var i = 0; i < 9; i++) {
      skrewt2.goWalk();
    };
    for (var i = 0; i < 25; i++) {
      skrewt1.eat();
      skrewt2.eat();
    };
    assert.equal(skrewt1.isAlive, true);
    assert.equal(skrewt2.isAlive, false);
  });
});
