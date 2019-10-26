const dna = require("../controllers/dna");

test("Gets the DNA string for ASCII of 'a'", () => {
  expect(dna("a")).toBe("CGAC");
});


test("Gets the DNA fragment for ASCII of 'aA'", () => {
  expect(dna("aA")).toBe("CGACCAAC");
});