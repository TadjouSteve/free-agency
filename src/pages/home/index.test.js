import { sum } from ".";

test('Ma function sum', () => {
    const result = sum(3, 5)
    expect(result).toBe(8)
})