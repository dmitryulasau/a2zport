// Given a sentence with multiple lowercase words separated by spaces,
// write a Javascript function that finds and returns the longest word in the sentence.
// If there are multiple words of the same length, choose one that has the highest number of vowels.
// Ignore any character in the sentence that is not an English letter or a space.
// Find the most efficient way to achieve this.

// INPUT:
// “Smart people learn from everything and everyone, average people from their experience,
// stupid people already, have all the answers” (Socrates)

// OUTPUT:
// “experience”

function findLongestWord(sentence) {
  const words = sentence.split(" ");

  let longestWord = "";
  let wordVowels = 0;

  for (const word of words) {
    const onlyEnglishLettersWord = word.replace(/[^a-zA-Z]/g, "");
    const countVowels = (onlyEnglishLettersWord.match(/[aeiouAEIOU]/g) || [])
      .length;

    if (
      onlyEnglishLettersWord.length > longestWord.length ||
      (onlyEnglishLettersWord.length === longestWord.length &&
        countVowels > wordVowels)
    ) {
      longestWord = onlyEnglishLettersWord;
      wordVowels = countVowels;
    }
  }
  return longestWord;
}

const input =
  '"Smart people learn from fff everything and everyone, average people from their experience, stupid people already, have all the answers" (Socrates)"';

console.log(findLongestWord(input));

module.exports = findLongestWord;
