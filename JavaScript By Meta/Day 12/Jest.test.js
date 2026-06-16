
const addFive = require('./Jest')
test('return the number plus 5', () => {
    expect(addFive(1)).toBe(6)
})