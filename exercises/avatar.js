class Avatar {
  constructor(name) {
    this.name = name;
    this.isBlue = true;
    this.location = 'Pandora';
    this.foundFood = false;
    this.what = false;
    var shot = 0;
  }
    shootArrow() {
    shot++;
    this.foundFood = (shot > 1);
  }
}
