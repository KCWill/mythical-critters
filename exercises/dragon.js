class Dragon {
  constructor(name, rider, color){
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    var meals = 0;
    this.eat = function(){
      meals++
      this.hungry = !Boolean(meals>2);
    }
  }
}
module.exports = Dragon;
