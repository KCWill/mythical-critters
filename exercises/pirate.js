class Pirate {
  constructor(name,job){
    this.name = name;

    if (job == null){
    this.job = 'Scallywag';
    } else {
    this.job = job;
    }
    this.cursed = false;
    var count = 0;
    this.commitHeinousAct = function() {
      count++
      if (count > 2){
        this.cursed = true;
      }
    }
    this.booty = 0;
    this.robShip = function() {
      this.booty = 100;
      return 'YAARRR!';
    }


  }
}

module.exports = Pirate;
