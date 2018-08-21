const { getUserInput, rl } = require("./readline-helper");
const Rover = require("./Rover");
const Plateau = require("./Plateau");

const log = data => {
  return console.log(data);
};

const main = async () => {
  // Number Of Rovers Input
  const numberOfRovers = await getUserInput(
    "Specify the number of mars rovers (e.g. 3): "
  );
  if (numberOfRovers < 1) {
    log("There must be at least 1 mars rover!");
    return rl.close();
  }
  log("numberOfRovers is", numberOfRovers);

  // Size of Plateau input
  const sizeOfPlateau = await getUserInput(
    "Specify the size of the Mars plateau (e.g. 5 5): "
  );
  log("sizeOfPlateau is", sizeOfPlateau);

  const plateau = new Plateau(sizeOfPlateau);
  let i = 1;

  // Do for each of the mars rovers
  do {
    const initialCoordinatesandFacing = await getUserInput(
      `Specify the initial coordinates and direction of the mars rover ${i} (e.g. 1 2 N): `
    );
    log("initialCoordinatesandFacing is", initialCoordinatesandFacing);

    const movementInstructions = await getUserInput(
      `Specify the instructions for the mars rover ${i} (e.g. LMLMLMLMM): `
    );
    log("movementInstructions is", movementInstructions);

    // Rover instantiation
    const rover = new Rover(initialCoordinatesandFacing);
    rover.getPlateauSize(plateau.displayPlateauSize());
    rover.getMovementInput(movementInstructions);

    log(
      `The final coordinates of the mars rover ${i} is: ${rover.displayFinalPosition()}`
    );

    i += 1;
  } while (i <= plateau.getNumberOfRovers(numberOfRovers));

  rl.close();
};

main();

module.exports = main
