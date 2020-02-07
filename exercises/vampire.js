class Vampire {
  constructor(name, pet){
    this.name = name;
    if (pet == null){
    this.pet = 'bat';
  } else {
    this.pet = pet;
  }
    this.thirsty = true;
    this.drink = function (){
      this.thirsty = false;
    }
  }
}
module.exports = Vampire;
