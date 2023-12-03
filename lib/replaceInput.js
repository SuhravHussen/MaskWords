/***
 * this function select or Deselect replacement words
 * input : string
 * replacementOptions: [{
    word: string,
    replacements: { replacedName: string, selected: boolean }
    }]

 * returns string  
 */

function replaceWordsWithRandom(input, replacementOptions) {
  // Convert the input to lowercase for case-insensitive matching
  var lowerCaseInput = input.toLowerCase();

  // Iterate through each replacement option
  for (var index in replacementOptions) {
    const word = replacementOptions[index].word;

    if (lowerCaseInput.includes(word)) {
      // Use a regular expression to find all occurrences of the current word
      var wordMatches = lowerCaseInput.match(new RegExp(word, "g"));

      // Iterate through each occurrence of the current word
      for (let i = 0; i < wordMatches.length; i++) {
        const selectedReplacements = replacementOptions[
          index
        ].replacements.filter((item) => item.selected);

        // check if there is a replacement word selected
        if (selectedReplacements.length < 1) break;

        // Choose a random replacement from the array
        var randomReplacement =
          selectedReplacements[
            Math.floor(Math.random() * selectedReplacements.length)
          ];
        console.log(randomReplacement.replacedName);
        // Replace the current occurrence of the word with the randomly chosen replacement
        input = input.replace(
          new RegExp(word, "i"),
          randomReplacement.replacedName
        );
      }
    }
  }

  return input;
}

export default replaceWordsWithRandom;
