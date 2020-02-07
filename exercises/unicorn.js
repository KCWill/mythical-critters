class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color == null){
      this.color = 'white';
    } else {
      this.color = color;
    }
    this.isWhite = function() {
      if (color == 'white'){
      return true;
      } else {
      return false;
      }
    }
    this.says = function(message) {
      return (`**;* ${message} *;**`)
    }
  }
}

module.exports = Unicorn;
