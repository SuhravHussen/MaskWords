"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReplacementsList from "./replacementsList";
import { useLayoutEffect, useRef, useState } from "react";
import replaceWordsWithRandom from "@/lib/replaceInput";
import getReplacementWords from "@/lib/getReplacementWords";
import toggleWordChoice from "@/lib/toggleWordChoice";

export function Home() {
  const input = useRef();

  const [replacementWordList, setReplacementWordList] = useState();

  useLayoutEffect(() => {
    const words = getReplacementWords();
    setReplacementWordList(words);
  }, []);

  const handleReplace = () => {
    if (!input.current.value) {
      alert("give something to replace");
      return;
    }

    const replaced = replaceWordsWithRandom(
      input.current.value,
      replacementWordList
    );

    input.current.value = replaced;
  };

  const handleCopy = () => {
    if ("clipboard" in navigator) {
      navigator.clipboard.writeText(input.current.value);
    } else {
      document.execCommand("copy", true, input.current.value);
    }
  };

  function handleSelect(word, replacementName) {
    const modifiedSelects = toggleWordChoice(
      word,
      replacementName,
      replacementWordList
    );
    setReplacementWordList(modifiedSelects);
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 min-h-[100dvh]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Word Replacement
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Enter your paragraph and click Replace to see the replaced words.
            </p>
          </div>
          <div className="w-full max-w-2xl ">
            <Textarea
              id="paragraph"
              placeholder="Type  here."
              ref={input}
              className="min-h-[200px] text-black"
            />
          </div>
          <div className="flex space-x-4">
            <Button onClick={handleReplace}>Replace</Button>
            <Button variant="outline" onClick={handleCopy}>
              Copy
            </Button>
          </div>
        </div>
        <ReplacementsList
          list={replacementWordList}
          handleSelect={handleSelect}
        />
      </div>
    </section>
  );
}
