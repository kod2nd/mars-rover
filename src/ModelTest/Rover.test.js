const Rover = require("../Models/Rover");
const Plateau = require("../Models/Plateau");

describe("Single forward movement", () => {
  test("When starting from 0,0,N with movement M, should return 0 1 N", () => {
    const testRover = new Rover("0 0 N");
    testRover.getMovementInput("M");
    expect(testRover.displayFinalPosition()).toBe("0 1 N");
  });

  test("When starting from 0,0,E with movement M, should return 1 0 E", () => {
    const testRover = new Rover("0 0 E");
    testRover.getMovementInput("M");
    expect(testRover.displayFinalPosition()).toBe("1 0 E");
  });

  test("When starting from 1,1,S with movement M, should return 1 0 S", () => {
    const testRover = new Rover("1 1 S");
    testRover.getMovementInput("M");
    expect(testRover.displayFinalPosition()).toBe("1 0 S");
  });

  test("When starting from 1,1,W with movement M, should return 0 1 W", () => {
    const testRover = new Rover("1 1 W");
    testRover.getMovementInput("M");
    expect(testRover.displayFinalPosition()).toBe("0 1 W");
  });
});

describe("1 Rotation of rover with 1 movement", () => {
  test("When starting from 1,1,W with movement LM, should return 1 0 S", () => {
    const testRover = new Rover("1 1 W");
    testRover.getMovementInput("LM");
    expect(testRover.displayFinalPosition()).toBe("1 0 S");
  });

  test("When starting from 1,1,N with movement LRM, should return 1 0 S", () => {
    const testRover = new Rover("1 1 N");
    testRover.getMovementInput("LRM");
    expect(testRover.displayFinalPosition()).toBe("1 2 N");
  });
});

describe("Multiple movements within bounds", () => {
  test("When starting from 1,2,N with movement LMLMLMLMM, should return 1 3 N", () => {
    const testRover = new Rover("1 2 N");
    testRover.getMovementInput("LMLMLMLMM");
    expect(testRover.displayFinalPosition()).toBe("1 3 N");
  });

  test("When starting from 3,3,E with movement MMRMMRMRRM, should return 5 1 E", () => {
    const testRover = new Rover("3 3 E");
    testRover.getMovementInput("MMRMMRMRRM");
    expect(testRover.displayFinalPosition()).toBe("5 1 E");
  });
});

test('Plateau Size test: Expect rover.getPlateauSize x to be 3 and y to be 6 when an instance of Plateau is created with "3 6"', () => {
  const testPlateau = new Plateau("3 6");
  const plateauSize = testPlateau.displayPlateauSize();

  const testRover = new Rover("3 3 E");
  expect(testRover.getPlateauSize(plateauSize)).toMatchObject({ x: 3, y: 6 });
});

describe("Out of Bounds Plateau size 5 5", () => {
  describe("UpperBound Test", () => {
    test("X: When starting from 3,3,E with movement MMRMMLMRRM, rover should fall off and should return 5 1 E RIP", () => {
      const testPlateau = new Plateau("5 5");
      const plateauSize = testPlateau.displayPlateauSize();

      const testRover = new Rover("3 3 E");
      testRover.getPlateauSize(plateauSize);
      testRover.getMovementInput("MMRMMLMRRM");
      expect(testRover.displayFinalPosition()).toBe("5 1 E RIP");
    });
    test("y: When starting from 1,5,N with movement MMRMMLMRRM, rover should fall off and should return 1 5 N  RIP", () => {
      const testPlateau = new Plateau("5 5");
      const plateauSize = testPlateau.displayPlateauSize();

      const testRover = new Rover("1 5 N");
      testRover.getPlateauSize(plateauSize);
      testRover.getMovementInput("MMRMMLMRRM");
      expect(testRover.displayFinalPosition()).toBe("1 5 N RIP");
    });
  });

  describe("Lower Bound Test", () => {
    test("When starting from 0,0,S with movement MMRML, rover should fall off and should return 0 0 S RIP", () => {
      const testPlateau = new Plateau("5 5");
      const plateauSize = testPlateau.displayPlateauSize();

      const testRover = new Rover("0 0 S");
      testRover.getPlateauSize(plateauSize);
      testRover.getMovementInput("MMRML");
      expect(testRover.displayFinalPosition("MMRML")).toBe("0 0 S RIP");
    });
    test("When starting from 0,0,W with movement MRRML, rover should fall off and should return 0 0 W RIP", () => {
      const testPlateau = new Plateau("5 5");
      const plateauSize = testPlateau.displayPlateauSize();

      const testRover = new Rover("0 0 W");
      testRover.getPlateauSize(plateauSize);
      testRover.getMovementInput("MRRML");
      expect(testRover.displayFinalPosition()).toBe("0 0 W RIP");
    });
  });
});
