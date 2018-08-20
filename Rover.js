class Rover {
  constructor(initialPositionInput) {
    this.x = Number(initialPositionInput.slice().split(" ")[0]);
    this.y = Number(initialPositionInput.slice().split(" ")[1]);
    this.facing = initialPositionInput.slice().split(" ")[2];
    this.movements = [];
  }

  getMovementInput(movementInput) {
    this.movements = movementInput.slice().split("");
  }

  moveForward() {
    if (this.facing === "N") return (this.y += 1);
    if (this.facing === "S") return (this.y -= 1);
    if (this.facing === "E") return (this.x += 1);
    if (this.facing === "W") return (this.x -= 1);
  }

  rotateLeft() {
    if (this.facing === "N") return (this.facing = "W");
    if (this.facing === "S") return (this.facing = "E");
    if (this.facing === "E") return (this.facing = "N");
    if (this.facing === "W") return (this.facing = "S");
  }

  rotateRight() {
    if (this.facing === "N") return (this.facing = "E");
    if (this.facing === "S") return (this.facing = "W");
    if (this.facing === "E") return (this.facing = "S");
    if (this.facing === "W") return (this.facing = "N");
  }

  formatOutput(x, y, facing) {
    return String(`${x} ${y} ${facing}`);
  }

  getFinalPosition() {
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
