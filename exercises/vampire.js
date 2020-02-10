class Vampire {
  constructor(name, pet){
    this.name = name;
    var pets = ['bat', pet];
    this.pet = pets[!!pet*1];
    this.thirsty = true;
    this.drink = function (){
      this.thirsty = false;
    }
  }
}
module.exports = Vampire;
