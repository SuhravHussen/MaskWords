"use client";
import { TagInput } from "emblor";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AddWords({ setReplacementWordList }) {
  const [keyword, setKeyword] = useState();
  const [tags, setTags] = React.useState([]);
  const [activeTagIndex, setActiveTagIndex] = useState(null);

  const handleAddWord = () => {
    if (!keyword || !tags.length) {
      alert("give something to replace");
      return;
    }

    const words = JSON.parse(localStorage.getItem("words") || "[]");

    const newWordEntry = {
      word: keyword,
      replacements: tags.map((tag) => ({
        replacedName: tag.text,
        selected: true,
      })),
    };

    const updatedWords = words.filter((entry) => entry.word !== keyword);
    updatedWords.push(newWordEntry);

    setReplacementWordList(updatedWords);

    localStorage.setItem("words", JSON.stringify(updatedWords));
  };

  return (
    <div className="my-12 p-4 flex gap-4 items-center flex-col flex-wrap">
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Word to replace "
        className="rounded"
      />
      <TagInput
        styleClasses={{
          input: "border px-2 py-1 bg-inherit rounded border-gray-300 ",
          inlineTagsContainer: " p-2 rounded",
          // tagPopover: {
          //   popoverContent: "bg-white shadow-lg",
          //   popoverTrigger: "text-blue-500 hover:text-blue-600",
          // },
          // tagList: {
          //   container: "bg-red-100",
          //   sortableList: "p-1",
          // },
          // autoComplete: {
          //   command: "bg-blue-100",
          //   popoverTrigger: "bg-green-200",
          //   popoverContent: "p-4",
          //   commandList: "list-none",
          //   commandGroup: "font-bold",
          //   commandItem: "cursor-pointer hover:bg-gray-100",
          // },
          tag: {
            body: "px-2 py-1  rounded",
            closeButton: "text-red-500 hover:text-red-600",
          },
          clearAllButton: "text-red-500 hover:text-red-600",
        }}
        placeholder="Add alternative words"
        tags={tags}
        setTags={(newTags) => {
          setTags(newTags);
        }}
        variant="primary"
        className="bg-red-300"
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
      />

      <Button onClick={handleAddWord} className="mt-4 w-full rounded">
        Add Word
      </Button>
    </div>
  );
}
