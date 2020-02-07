class Dragon {
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    var meals = 0;
    this.eat = function(){
      if (meals > 1){
        this.hungry = false;
      } else {
        meals++
        this.hungry = true;
      }
    }
  }
}
module.exports = Dragon;
