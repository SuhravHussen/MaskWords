function toggleWordChoice(word, replacementName, list) {
  const foundWord = list.find((item) => item.word === word);

  if (foundWord) {
    const foundReplacement = foundWord.replacements.find(
      (item) => item.replacedName === replacementName
    );

    if (foundReplacement) {
      foundReplacement.selected = !foundReplacement.selected;

      const modified = list.map((item) => {
        if (item.word === word) {
          return foundWord;
        } else {
          return item;
        }
      });

      return modified;
    } else {
      console.log(
        `No replacement with name '${replacedName}' found for the word '${word}'.`
      );
      return list;
    }
  } else {
    console.log(`Word '${word}' not found in the object.`);
    return list;
  }
}

export default toggleWordChoice;
