class Wizard {
  constructor(details){
    this.name = details.name;
    this.bearded = true;
    if (details.bearded == false){
      this.bearded = false;
    }
    this.incantation = function(incantation){
      var incantUpper = incantation.toUpperCase();
      return incantUpper;
    }
    this.isRested = true;
    var castNum = 0;
    this.cast = function() {
      castNum++;
      if (castNum < 3){
      return 'MAGIC BULLET';
    } else {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    }
    }
  }
}

module.exports = Wizard;
