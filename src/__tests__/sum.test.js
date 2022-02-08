const sum = require('../sum.js')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})
test('adds 2 + 5 to equal 7', () => {
    expect(sum(2, 5)).toBe(7)
})
test('adds 1.2 + 9.5 to equal 10.7', () => {
    expect(sum(1.2, 9.5)).toBe(10.7)
})
