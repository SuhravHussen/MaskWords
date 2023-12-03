import words from "@/wordsData";

/*
  This function return wordsData in array  for easy use

  words :  { 
    wordName :  [
      {
        replacedName : string, 
       selected : boolean
      }
    ]}
  returns [{word: string ,
     replacements: [
      {
        replacedName : string, 
       selected : boolean
      }
    ]
  }]  
*/
function getReplacementWords() {
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
