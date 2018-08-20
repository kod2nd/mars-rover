const { getUserInput, rl } = require("./readline-helper");
const Rover = require("./Rover")


const main = async () => {
  const sizeOfPlateau = await getUserInput(
    "Specify the size of the Mars plateau (e.g. 5 5):"
  );
  console.log("sizeOfPlateau is", sizeOfPlateau);

  const initialCoordinatesandFacing = await getUserInput(
    "Specify the initial coordinates and direction of the mars rover (e.g. 1 2 N):"
  );
  console.log("initialCoordinatesandFacing is", initialCoordinatesandFacing);

  const movementInstructions = await getUserInput(
    "Specify the instructions for the mars rover (e.g. LMLMLMLMM):"
  );
  console.log("movementInstructions is", movementInstructions);

  // TODO: include the functions that you've implemented for this kata

  const rover = new Rover(initialCoordinatesandFacing)
  rover.getMovementInput(movementInstructions)

  console.log(
    `The final coordinates of the mars rover is: ${rover.getFinalPosition()}`
  );
  rl.close();
};

main();

