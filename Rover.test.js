const Rover = require("./Rover");

describe("Single forward movement", () => {
  test("When starting from 0,0,N with movement M, should return 0 1 N", () => {
    const testRover = new Rover("0 0 N");
    testRover.getMovementInput("M");
    expect(testRover.getFinalPosition()).toBe("0 1 N");
  });

  test("When starting from 0,0,E with movement M, should return 1 0 E", () => {
    const testRover = new Rover("0 0 E");
    testRover.getMovementInput("M");
    expect(testRover.getFinalPosition()).toBe("1 0 E");
  });

  test("When starting from 1,1,S with movement M, should return 1 0 S", () => {
    const testRover = new Rover("1 1 S");
    testRover.getMovementInput("M");
    expect(testRover.getFinalPosition()).toBe("1 0 S");
  });

  test("When starting from 1,1,W with movement M, should return 0 1 W", () => {
    const testRover = new Rover("1 1 W");
    testRover.getMovementInput("M");
    expect(testRover.getFinalPosition()).toBe("0 1 W");
  });
});

describe("1 Rotation of rover with 1 movement", () => {
  test("When starting from 1,1,W with movement LM, should return 1 0 S", () => {
    const testRover = new Rover("1 1 W");
    testRover.getMovementInput("LM");
    expect(testRover.getFinalPosition()).toBe("1 0 S");
  });

  test("When starting from 1,1,N with movement LRM, should return 1 0 S", () => {
    const testRover = new Rover("1 1 N");
    testRover.getMovementInput("LRM");
    expect(testRover.getFinalPosition()).toBe("1 2 N");
  });
});

test("When starting from 1,2,N with movement LMLMLMLMM, should return 1 3 N", () => {
  const testRover = new Rover("1 2 N");
  testRover.getMovementInput("LMLMLMLMM");
  expect(testRover.getFinalPosition()).toBe("1 3 N");
});

test("When starting from 1,2,N with movement LMLMLMLMM, should return 1 3 N", () => {
    const testRover = new Rover("1 2 N");
    testRover.getMovementInput("LMLMLMLMM");
    expect(testRover.getFinalPosition()).toBe("1 3 N");
  });

  test("When starting from 3,3,E with movement MMRMMRMRRM, should return 5 1 E", () => {
    const testRover = new Rover("3 3 E");
    testRover.getMovementInput("MMRMMRMRRM");
    expect(testRover.getFinalPosition()).toBe("5 1 E");
  });
