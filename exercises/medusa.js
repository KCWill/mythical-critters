class Medusa {
  constructor(name){
    this.name = name;
    this.statues = [];
    this.pastVictims = [];
    var vicNum = 0;
    this.stare = function(victim) {
      this.statues.push(victim);
      this.statues[vicNum].stoned = true;
      vicNum++
      if (vicNum > 3){
        this.pastVictims.push(this.statues[0])
        this.pastVictims.stoned = false;
        this.statues.shift();
      }
    }
  }
}
module.exports = Medusa;
