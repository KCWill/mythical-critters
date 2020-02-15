class Unicorn {
  constructor(name, color) {
    this.name = name;
    var colorChoice = ['white', color];
    this.color = colorChoice[!!(color)*1];
  }
    isWhite(color) {
    return !this.color
    }
    says(message) {
    return (`**;* ${message} *;**`)
    }
}


module.exports = Unicorn;
