require('./add')

describe('add()', () => {
    beforeAll(() => {
        this.add = HF.add
    })

    test('add two numbers', () => {
        const result = this.add(1, 2)
        expect(result).toBe(3)
    })
})
