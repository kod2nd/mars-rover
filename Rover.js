class Rover {
  // When using constructors use the 'HAS A' test
  constructor(initialPositionInput) {
    this.x = Number(initialPositionInput.slice().split(" ")[0]);
    this.y = Number(initialPositionInput.slice().split(" ")[1]);
    this.facing = initialPositionInput.slice().split(" ")[2];
    this.movements = [];
    this.plateauMaxBound = {};
  }

  getMovementInput(movementInput) {
    return (this.movements = movementInput.slice().split(""));
  }

  getPlateauSize(plateauSize) {
    return (this.plateauMaxBound = plateauSize);
  }

  checkIfOutOfBounds() {
    const outOfBounds =
      this.x > this.plateauMaxBound.x ||
      this.y > this.plateauMaxBound.y ||
      this.x < 0 ||
      this.y < 0;

    if (outOfBounds) {
      return true;
    }
  }

  moveForward() {
    if (this.checkIfOutOfBounds()) return;
    if (this.facing === "N") return (this.y += 1);
    if (this.facing === "S") return (this.y -= 1);
    if (this.facing === "E") return (this.x += 1);
    if (this.facing === "W") return (this.x -= 1);
  }

  rotateLeft() {
    if (this.checkIfOutOfBounds()) return;
    if (this.facing === "N") return (this.facing = "W");
    if (this.facing === "S") return (this.facing = "E");
    if (this.facing === "E") return (this.facing = "N");
    if (this.facing === "W") return (this.facing = "S");
  }

  rotateRight() {
    if (this.checkIfOutOfBounds()) return;
    if (this.facing === "N") return (this.facing = "E");
    if (this.facing === "S") return (this.facing = "W");
    if (this.facing === "E") return (this.facing = "S");
    if (this.facing === "W") return (this.facing = "N");
  }

  formatOutput(x, y, facing) {
    if (x > this.plateauMaxBound.x) {
      return String(`${this.plateauMaxBound.x} ${y} ${facing} RIP`);
    }
    if (x < 0) {
        return String(`0 ${y} ${facing} RIP`);
    }
    if (y > this.plateauMaxBound.y) {
        return String(`${x} ${this.plateauMaxBound.y} ${facing} RIP`);
    }
    if (y < 0) {
        return String(`${x} 0 ${facing} RIP`);
    }
    return String(`${x} ${y} ${facing}`);
  }

  displayFinalPosition() {
    this.movements.forEach(movement => {
      if (movement === "M") {
        this.moveForward();
      }

      if (movement === "L") {
        this.rotateLeft();
      }
      if (movement === "R") {
        this.rotateRight();
      }
    });
    return this.formatOutput(this.x, this.y, this.facing);
  }
}

module.exports = Rover;
