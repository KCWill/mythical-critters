class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = !!(name === 'Frodo');
    var age = 0;
    this.celebrateBirthday = function() {
      age++
      this.age = age;
      this.adult = !!(age>32);
      this.old = !!(age>100);
    }
  }
}
module.exports = Hobbit;
