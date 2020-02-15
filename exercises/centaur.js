class Centaur {
  constructor(name,breed){
    this.name = name;
    this.breed = breed;
    this.standing = true;
    this.active = 0;
    this.cranky = false;
    this.layingDown = false;
  }

  shoot(){
    var shootMessage = ['Twang!!!','NO!'];
    this.active++;
    this.cranky = this.active > 2;
    return shootMessage[this.cranky*1 || this.layingDown*1];
  }

  run(){
    var runMessage = ['Clop clop clop clop!!!','NO!'];
    this.active++;
    this.cranky = this.active > 2;
    return runMessage[this.layingDown*1];
  }

  sleep(){
    var sleepMessage = ['NO!','ZZZZ'];
    this.cranky = !this.layingDown;
    this.active = !this.layingDown*1;
    return sleepMessage[!this.standing*1 || this.layingDown*1];
  }

  layDown(){
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion(){
    var potionMessage = ["Not while I'm laying down!","Great, now I'm cranky!"]
    this.cranky = !this.standing || !this.cranky;
    return potionMessage[this.cranky*1 && this.standing*1];
  }
}


module.exports = Centaur;
