const bracketsValidator = require("./BracketsValidator")

describe("bracketsValidator", () => {
  it('returns true when passes in empty string', () => {
    expect(bracketsValidator('')).toBe(true);
  })
})