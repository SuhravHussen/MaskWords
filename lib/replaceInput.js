function replaceWordsWithRandom(input, replacementOptions) {
  // Convert the input to lowercase for case-insensitive matching
  var lowerCaseInput = input.toLowerCase();

  // Iterate through each replacement option
  for (var word in replacementOptions) {
    if (lowerCaseInput.includes(word)) {
      // Use a regular expression to find all occurrences of the current word
      var wordMatches = lowerCaseInput.match(new RegExp(word, "g"));

      // Iterate through each occurrence of the current word
      for (var i = 0; i < wordMatches.length; i++) {
        // Choose a random replacement from the array
        var randomReplacement =
          replacementOptions[word][
            Math.floor(Math.random() * replacementOptions[word].length)
          ];

        // Replace the current occurrence of the word with the randomly chosen replacement
        input = input.replace(new RegExp(word, "i"), randomReplacement);
      }
    }
  }

  return input;
}

export default replaceWordsWithRandom;
