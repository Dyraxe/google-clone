"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import Image from "next/image";
function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    try {
      const res = await fetch("https://random-word-api.herokuapp.com/word");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      const word = data.at(0);
      router.push(`/search/web?searchTerm=${word}`);
    } catch (e) {
    } finally {
      setRandomSearchLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-5 flex w-full max-w-[90%] items-center rounded-full border border-gray-200 px-5 py-3 transition-shadow focus-within:shadow-md hover:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="mr-3 text-xl text-gray-500" />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="flex-grow focus:outline-none"
          type="text"
        />
        <BsFillMicFill className="text-xl " />
      </form>
      <div className="mt-8 flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-70 disabled:ring-0"
        >
          {!randomSearchLoading ? (
            "I'm luckily"
          ) : (
            <Image
              className="h-6 text-center"
              width={20}
              height={24}
              alt="loading spinner"
              src="randomSearchLoading.svg"
            />
          )}
        </button>
      </div>
    </>
  );
}

export default HomeSearch;
