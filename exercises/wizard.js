class Wizard {
  constructor(details){
    this.name = details.name;
    var beardedDefault = [true, false];
    var beardedEntry = details.bearded;
    this.bearded = beardedDefault[!!(details.bearded === false)*1];
    this.isRested = true;
    this.incantation = function(incantation){
      var incantUpper = incantation.toUpperCase();
      return incantUpper;
    }
    var castNum = 0;
    this.cast = function() {
      var castMessage = ['MAGIC BULLET', 'I SHALL NOT CAST!'];
      this.isRested = !!!(castNum>1)
      castNum++;
      return castMessage[!!!(this.isRested)*1];
    }
  }
}

module.exports = Wizard;
