class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    var shootNum = 0;
    var runNum = 0;
    this.shoot = function(){
      shootNum = shootNum + !(this.layingDown || this.cranky)*1;
      this.cranky = !Boolean((shootNum + runNum)%3);
      var message = ['NO!', 'Twang!!!'];
      var shooting = !(this.layingDown || this.cranky)*1
      return message[shooting];
    }
    this.run = function(){
      runNum = runNum + !(this.layingDown || this.cranky)*1
      this.cranky = !Boolean((shootNum + runNum)%3);
      var running = !(this.layingDown || this.cranky)*1;
      var message = ['NO!', 'Clop clop clop clop!!!']
      return message[running]
    }
    this.sleep = function() {
      var sleeping = (!this.standing || this.layingDown)*1
      var sleepMessage = ['NO!','ZZZZ'];
      this.cranky = !Boolean((!this.standing || this.layingDown)*1)
      return sleepMessage[sleeping];
    }
    this.layDown = function() {
      this.layingDown = !this.layingDown;
      this.standing = !this.standing;
    }
    this.standUp = function() {
      this.layingDown = !this.layingDown;
      this.standing = !this.standing;
    }
    this.drinkPotion = function () {
      var standing = Boolean(this.standing)*1
      var potMessage = ["Not while I'm laying down!"]
      this.cranky = Boolean(standing-1) || !this.cranky;
      return potMessage[standing]
    }

  }
}

// var centaur1 = new Centaur('Brad', "White!")

module.exports = Centaur;
