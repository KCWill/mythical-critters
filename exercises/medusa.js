class Medusa {
  constructor(name){
    this.name = name;
    this.statues = [];
    this.pastVictims = [];
    var vicNum = 0;
    this.stare = function(victim) {
      this.statues.push(victim);
      this.statues[vicNum].stoned = true;
      var vicBool = (vicNum > 2);
      vicNum++
      var num1 = [0,1];
      var num2 = [1,4];
      var retainArray1 = [0,1];
      this.statues = this.statues.slice(retainArray1[vicBool*1],4);
      this.pastVictims.push( this.statues.slice(num1[vicBool*1],num2[vicBool*1]));
      this.pastVictims.stoned = !(this.statues.length > 2)
      }
  }
}
module.exports = Medusa;
