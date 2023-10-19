"use client";
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBox() {
  const router = useRouter();
  const searchTerm = useSearchParams().get("searchTerm");
  const [searchField, setSearchField] = useState(searchTerm || "");

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchField.trim() || searchTerm === searchField) return;
    console.log(searchField);
    router.push(`/search/web?searchTerm=${searchField}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="ml-10 mr-5 flex max-w-3xl flex-grow items-center space-x-4 rounded-full border border-gray-300 px-6 py-3 shadow-lg"
    >
      <input
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        className="w-full focus:outline-none"
        type="text"
      />
      <RxCross2
        onClick={() => setSearchField("")}
        className="cursor-pointer text-2xl text-gray-500 sm:mr-2"
      />
      <BsFillMicFill className="mr-3 hidden border-l-2 border-gray-300 pl-4 text-4xl text-blue-500 sm:inline-flex" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="hidden cursor-pointer text-2xl text-blue-500 sm:inline-flex"
      />
    </form>
  );
}

export default SearchBox;
