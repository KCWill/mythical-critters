var assert = require('chai').assert;
var Hydra = require('../exercises/hydra');

describe('Hydra', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Hydra);
  });

  it.skip('should have a name', function() {
    var hydra1 = new Hydra('The Vixen');
    assert.equal(hydra1.name, 'The Vixen');
    var hydra2 = new Hydra('Laganja Estranja');
    assert.equal(hydra2.name, 'Laganja Estranja');
  });

  it.skip('should have a color', function() {
    var hydra = new Hydra('Shangela', 'Green');
    assert.equal(hydra.color, 'Green');
  });

  it.skip('should be purple if color is not entered', function() {
    var hydra = new Hydra('Raja');
    assert.equal(hydra.color, 'Purple');
  });

  it.skip('should have one head on first encounter', function() {
    var hydra = new Hydra('Trixie Mattel');
    assert.equal(hydra.headCount, 1);
  });

  it.skip('should grow two additional heads when decapitated', function() {
    var hydra = new Hydra('Katya Zalomodchikova');
    hydra.chop();
    assert.equal(hydra.headCount, 3);
  });

  it.skip('should initially run normally', function() {
    var hydra = new Hydra('Gia Gunn','Blue');
    assert.equal(hydra.runningSlow, false);
  });

  it.skip('should run slowly if hydra has more than 29 heads', function() {
    var hydra = new Hydra('Bob the Drag Queen');
    assert.equal(hydra.runningSlow, false);
    for (var i = 0; i < 15; i++){
      hydra.chop();
    }
    assert.equal(hydra.runningSlow, true);
  });

  it.skip('should have a default location of open field', function(){
    var hydra = new Hydra('Aquaria');
    assert.equal(hydra.location, 'open field' )
  });

  it.skip('should travel to mountainside from open field, to beach from mountainside, to open field from beach', function() {
    var hydra = new Hydra('Kalorie Karbdashian-Williams');
    assert.equal(hydra.location, 'open field');
    hydra.travel();
    assert.equal(hydra.location, 'mountainside');
    hydra.travel();
    assert.equal(hydra.location, 'beach');
    hydra.travel();
    assert.equal(hydra.location, 'open field');
  });

  it.skip('can be killed if running slowly and is near a mountainside', function() {
    var hydra = new Hydra('Bianca Del Rio');
    assert.equal(hydra.isAlive, true);
    hydra.travel();
    assert.equal(hydra.location, 'mountainside');
    for (var i = 0; i < 15; i++){
      hydra.chop();
    }
    assert.equal(hydra.runningSlow, true);
    hydra.kill();
    assert.equal(hydra.kill(), 'You slayed!')
    assert.equal(hydra.isAlive, false);
  });

  it.skip('cannot be killed if not running slowly and not at a mountainside', function() {
    var hydra = new Hydra('Jasmine Masters');
    assert.equal(hydra.isAlive, true);
    hydra.travel();
    assert.equal(hydra.location, 'mountainside');
    assert.equal(hydra.runningSlow, false);
    hydra.kill();
    assert.equal(hydra.kill(), 'Aghhh!! Gotta try something else!');
    hydra.travel();
    assert.equal(hydra.location, 'beach');
    assert.equal(hydra.kill(), 'Aghhh!! Gotta try something else!');
    for (var i = 0; i < 15; i++){
      hydra.chop();
    }
    assert.equal(hydra.headCount, 31);
    assert.equal(hydra.runningSlow, true);
    hydra.travel();
    hydra.travel();
    assert.equal(hydra.location, 'mountainside');
    hydra.kill();
    assert.equal(hydra.isAlive, false);
  });

  it.skip('should not be able to chop or travel after death', function(){
    var hydra = new Hydra('Bianca Del Rio');
    for (var i = 0; i < 15; i++){
      hydra.chop();
    }
    assert.equal(hydra.headCount, 31);
    assert.equal(hydra.runningSlow, true);
    hydra.travel();
    assert.equal(hydra.location, 'mountainside');
    hydra.kill();
    assert.equal(hydra.isAlive, false);
    hydra.chop();
    assert.equal(hydra.headCount, 31);
    hydra.travel();
    assert.equal(hydra.location, 'mountainside');
  });
});
