class Skrewt{
  constructor(name, weight, age, day){
    this.name = name;
    this.weight = weight;
    this.age = age;
    this.foodEaten = 0;
    this.dayOfWeek = day || 'Monday';
    this.isAlive = true;
    this.inCage = true;
    this.burnCount = 0;
    this.walks = 0;
  }

  eat(){
    this.foodEaten += this.weight*0.03*(this.isAlive*1);
    this.weight += this.weight*0.015*(this.isAlive*1);
    this.isAlive = !(this.dayOfWeek == 'Saturday' && this.inCage == false) && (this.walks > 9 || this.weight*0.015 < 5);
  }

  sleep(){
    var daysOfTheWeek = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    var dayIndex = daysOfTheWeek.indexOf(this.dayOfWeek);
    var dayIndex = (dayIndex+1)%7;
    this.dayOfWeek = daysOfTheWeek[dayIndex];
  };

  cage(){
    this.inCage = !this.inCage;
  };

  goWalk(){
    this.walks += 1*(this.isAlive && !this.inCage);
    this.burnCount += (this.dayOfWeek === 'Monday' || this.dayOfWeek === 'Tuesday' || this.dayOfWeek === 'Sunday')*1*(this.isAlive);
  }
}



module.exports = Skrewt;
