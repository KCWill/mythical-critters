class Pirate {
  constructor(name,job){
    this.name = name;
    var jobMess = ['Scallywag', job];
    this.job = jobMess[!!(job)*1];
    this.cursed = false;
    var count = 0;
    this.commitHeinousAct = function() {
      count++
      this.cursed = !!(count>2);
    }
    this.booty = 0;
    this.robShip = function() {
      this.booty = 100;
      return 'YAARRR!';
    }


  }
}

module.exports = Pirate;
