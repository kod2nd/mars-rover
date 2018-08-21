const mockGetUserInput = jest.fn()

jest.doMock('./readline-helper.js', () => {
    return {
        getUserInput: mockGetUserInput
    }
})

const main = require('./main')

test('should ', () => {
    main()
    expect(mockGetUserInput).toBeCalled()
});