class Unicorn {
  constructor(name, color) {
    this.name = name;
    var colorChoice = ['white', color];
    this.color = colorChoice[!!(color)*1];
    this.isWhite = function() {
    return !!!color
    }
    this.says = function(message) {
    return (`**;* ${message} *;**`)
    }
  }
}

module.exports = Unicorn;
