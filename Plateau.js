class Plateau {
  constructor(size) {
    this.size = {
      x: Number(size.slice().split(" ")[0]),
      y: Number(size.slice().split(" ")[1])
    };
    this.numberOfRovers = 0;
  }

  getNumberOfRovers(numberOfRovers) {
    return this.numberOfRovers = Number(numberOfRovers)
  }

  displayPlateauSize() {
      return this.size
  }
}

module.exports = Plateau;
