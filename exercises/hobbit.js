class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = !!(name === 'Frodo');
  }
  celebrateBirthday() {
    this.age++
    this.adult = (this.age>32);
    this.old = (this.age>100);
    }
  }

module.exports = Hobbit;
