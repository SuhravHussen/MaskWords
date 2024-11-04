"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ReplacementsList from "./replacementsList";
import { useLayoutEffect, useRef, useState } from "react";
import replaceWordsWithRandom from "@/lib/replaceInput";
import toggleWordChoice from "@/lib/toggleWordChoice";
import Image from "next/image";
import AddWords from "./AddWords";
import useLocalStorage from "@/lib/hooks/useLocalStorage";

export function Home() {
  const input = useRef();

  const [replacementWordList, setReplacementWordList] = useState();
  const [words, setWords] = useLocalStorage("words", []);

  useLayoutEffect(() => {
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
    setWords(modifiedSelects);
  }

  function handleDelete(word) {
    const deleted = replacementWordList.filter((item) => item.word !== word);
    setReplacementWordList(deleted);
    setWords(deleted);
  }

  return (
    <>
      <div className="w-full flex justify-center items-center bg-gradient-to-r from-red-500 via-white to-green-500 text-white py-1">
        <Image
          alt="Palestine Flag"
          height={20}
          src="/PalestineFlag.png"
          style={{
            aspectRatio: "40/20",
            objectFit: "cover",
          }}
          width={40}
        />
        <p className="ml-3  font-semibold text-black">Free Palestine</p>
      </div>
      <section className="w-full pt-12 pb-8 md:pt-24 md:pb-18 lg:pt-32  lg:pb-28 min-h-[100dvh]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Mask words
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Enter your paragraph and click Replace to see the replaced
                words.
              </p>
            </div>
            <div className="w-full max-w-2xl ">
              <Textarea
                id="paragraph"
                placeholder="Type  here."
                ref={input}
                className="min-h-[200px] rounded "
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
            handleDelete={handleDelete}
          />
          <AddWords setReplacementWordList={setReplacementWordList} />
          <p className="text-gray-500 mt-12 dark:text-gray-400">
            Words with a
            <span className="bg-purple-500 text-white px-1 mx-1 rounded">
              purple background
            </span>
            are active and will be replaced with those active alternatives. For
            any questions, contact me at
            <a
              className="underline text-blue-500 ml-2"
              href="mailto:suhravhshan@gmail.com"
            >
              suhravhshan@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
