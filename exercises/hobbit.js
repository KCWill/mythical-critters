class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;
    var age = 0;
    this.celebrateBirthday = function() {
      age++
      this.age = age;
      if (age > 32 && age < 101){
        this.adult = true;
      } else if (age > 100) {
        this.adult = true;
        this.old = true;
      }
    }
    if (name == 'Frodo'){
      this.hasRing = true;
    }
  }
}
module.exports = Hobbit;
