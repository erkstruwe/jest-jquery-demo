require('./add')

describe('add()', () => {
    let add
    beforeAll(() => {
        add = HF.add
    })

    test('add two numbers', () => {
        const result = add(1, 2)
        expect(result).toBe(3)
    })

    test('add two other numbers', () => {
        const result = add(4, 7)
        expect(result).toBe(11)
    })
})
