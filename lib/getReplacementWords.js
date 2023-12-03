import words from "@/wordsData";

async function getReplacementWords() {
  const wordTitles = Object.keys(words);

  const replacementOptions = wordTitles.map((t) => {
    return {
      word: t,
      replacements: words[t],
    };
  });

  return replacementOptions;
}

export default getReplacementWords;
