class Wizard {
  constructor(details){
    this.name = details.name;
    this.bearded = (details.bearded === undefined ||details.bearded )
    this.isRested = true;
    this.castNum = 0;
    }

    incantation(incantation) {
      var incantUpper = incantation.toUpperCase();
      return incantUpper;
    }
    
    cast() {
      var castMessage = ['MAGIC BULLET', 'I SHALL NOT CAST!'];
      this.isRested = !(this.castNum>1)
      this.castNum++;
      return castMessage[!(this.isRested)*1];

  }
}

module.exports = Wizard;
