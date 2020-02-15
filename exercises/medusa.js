class Medusa {
  constructor(name){
    this.name = name;
    this.statues = [];
    this.pastVictims = [];
    this.vicNum = 0;
  }
  stare(victim) {
      this.statues.push(victim);
      this.statues[this.vicNum].stoned = true;
      var vicBool = (this.vicNum > 2);
      this.vicNum++
      var num1 = [0,1];
      var num2 = [1,4];
      var retainArray1 = [0,1];
      this.statues = this.statues.slice(retainArray1[vicBool*1],4);
      this.pastVictims.push( this.statues.slice(num1[vicBool*1],num2[vicBool*1]));
      this.pastVictims.stoned = !(this.statues.length > 2)
      }
  }

module.exports = Medusa;
