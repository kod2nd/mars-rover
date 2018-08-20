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
    const facingNorth = this.facing === "N";
    const facingSouth = this.facing === "S";
    const facingEast = this.facing === "E";
    const facingWest = this.facing === "W";

    if (facingNorth) return (this.y += 1);
    if (facingSouth) return (this.y -= 1);
    if (facingEast) return (this.x += 1);
    if (facingWest) return (this.x -= 1);
  }

  rotateLeft() {
    const facingNorth = this.facing === "N";
    const facingSouth = this.facing === "S";
    const facingEast = this.facing === "E";
    const facingWest = this.facing === "W";

    if (facingNorth) return (this.facing = "W");
    if (facingSouth) return (this.facing = "E");
    if (facingEast) return (this.facing = "N");
    if (facingWest) return (this.facing = "S");
  }

  rotateRight() {
    const facingNorth = this.facing === "N";
    const facingSouth = this.facing === "S";
    const facingEast = this.facing === "E";
    const facingWest = this.facing === "W";

    if (facingNorth) return (this.facing = "E");
    if (facingSouth) return (this.facing = "W");
    if (facingEast) return (this.facing = "S");
    if (facingWest) return (this.facing = "N");
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
    return `${String(this.x)} ${String(this.y)} ${String(this.facing)}`;
  }
}

module.exports = Rover;
