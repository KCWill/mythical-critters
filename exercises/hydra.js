class Hydra {
  constructor(name, color){
    this.name = name;
    this.color = (color || 'Purple');
    this.headCount = 1;
    this.runningSlow = false;
    this.location = 'open field'
    this.isAlive = true;
  };

  chop() {
    this.headCount += (this.isAlive)*2;
    this.runningSlow = this.headCount > 29;
  };

  travel() {
    var locTracker = ['open field', 'mountainside', 'beach'];
    var currentLoc = locTracker.findIndex(location => location === this.location);
    currentLoc += this.isAlive*1;
    currentLoc = currentLoc % 3;
    this.location = locTracker[currentLoc];
  };

  kill() {
    this.isAlive = !(this.runningSlow && this.location === 'mountainside');
    var killMessage = ['You slayed!', 'Aghhh!! Gotta try something else!'];
    return killMessage[this.isAlive*1];
  }
};
module.exports = Hydra;
