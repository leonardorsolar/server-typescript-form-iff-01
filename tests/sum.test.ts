import { sum } from "../src/sum"

test("soma de 1 e 2 deve ser 3", () => {
    expect(sum(1, 2)).toBe(3)
})
