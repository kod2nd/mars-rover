const { getUserInput, rl } = require("./readline-helper");
const Rover = require("./Rover");
const Plateau = require("./Plateau")

const main = async () => {
  const numberOfRovers = await getUserInput(
    "Specify the number of mars rovers (e.g. 3):"
  );
  if(numberOfRovers < 1) {
    console.log("There must be at least 1 mars rover!")
    return rl.close();
  } console.log("numberOfRovers is", numberOfRovers);

  const sizeOfPlateau = await getUserInput(
    "Specify the size of the Mars plateau (e.g. 5 5):"
  );
  console.log("sizeOfPlateau is", sizeOfPlateau);

  const plateau = new Plateau(sizeOfPlateau)
  let i = 1
  
  do {
  const initialCoordinatesandFacing = await getUserInput(
    `Specify the initial coordinates and direction of the mars rover ${i} (e.g. 1 2 N):`
  );
  console.log("initialCoordinatesandFacing is", initialCoordinatesandFacing);

  const movementInstructions = await getUserInput(
    `Specify the instructions for the mars rover ${i} (e.g. LMLMLMLMM):`
  );
  console.log("movementInstructions is", movementInstructions);

  // TODO: include the functions that you've implemented for this kata

  const rover = new Rover(initialCoordinatesandFacing);
  rover.getMovementInput(movementInstructions);

  console.log(
    `The final coordinates of the mars rover ${i} is: ${rover.getFinalPosition()}`
  );
    i += 1
  } while ( i <= plateau.getNumberOfRovers(numberOfRovers));

  rl.close();
};

main();
