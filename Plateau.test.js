const Plateau = require("./Plateau")

test('Number of rovers to be 2, when 2 is passed', () => {
    const testPlateau = new Plateau("5 5")
    expect(testPlateau.getNumberOfRovers(2)).toEqual(2)
});

test('Expect plateau x to be 3 and y to be 6 when an instance of Plateau is created with "3 6"', () => {
    const testPlateau = new Plateau("3 6")
    expect(testPlateau.displayPlateauSize().x).toEqual(3)
    expect(testPlateau.displayPlateauSize().y).toEqual(6)
});