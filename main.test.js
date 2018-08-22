const mockGetUserInput = jest.fn()

jest.doMock('./src/utils/readline-helper.js', () => {
    return {
        getUserInput: mockGetUserInput
    }
})

const main = require('./main')

test('should ', () => {
    main()
    expect(mockGetUserInput).toBeCalled()
});