class Werewolf {
  constructor(name, location){
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false
    this.hungry = false;
  }
    change(){
      this.hungry = !this.hungry
      this.human = !this.human;
      this.wolf = !this.wolf;
      this.hungry = !(this.human);
    }
    eat(victim){
      victim.alive = false;
      this.hungry = this.human;
      this.human = true;
      this.wolf = false;
    }
}


module.exports = Werewolf;
