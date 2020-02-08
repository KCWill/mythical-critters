class Werewolf {
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false
    this.hungry = false;
    this.change = function(){
      this.human = !this.human;
      this.wolf = !this.wolf;
    }
  }
}

module.exports = Werewolf;
