const { expect } = require("chai");
const findLongestWord = require("../a2zport");

describe("findLongestWord", () => {
  it("empty input sentence", () => {
    const input = "";
    const result = findLongestWord(input);
    expect(result).to.equal("");
  });

  it("Sentence with only non-alphabet characters", () => {
    const input = "!@#$%^&*()'";
    const result = findLongestWord(input);
    expect(result).to.equal("");
  });

  it("Longest word with the most vowels", () => {
    const input =
      '"Smart people learn from fff everything and everyone, average people from their experience, stupid people already, have all the answers" (Socrates)"';
    const result = findLongestWord(input);
    expect(result).to.equal("experience");
  });

  it("Sentence with words of the same length and different vowel counts", () => {
    const input = "avenue, honest, orange";
    const result = findLongestWord(input);
    expect(result).to.equal("avenue");
  });

  it("Sentence with numbers and special characters", () => {
    const input = "Today I've spent $50.00 on 100lb of apples.";
    const result = findLongestWord(input);
    expect(result).to.equal("apples");
  });
});
