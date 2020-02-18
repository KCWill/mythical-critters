class Pirate {
  constructor(name,job){
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.heinousActs = 0;
    this.booty = 0;
  }
    commitHeinousAct() {
      this.heinousActs++;
      this.cursed = (this.heinousActs>2);
  }
    robShip() {
      this.booty += 100;
      return 'YAARRR!';
    }
  }


module.exports = Pirate;
