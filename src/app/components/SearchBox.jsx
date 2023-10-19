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
      className="ml-5 mr-5 flex max-w-3xl flex-grow items-center space-x-4 rounded-md border border-gray-300 px-2 py-1 shadow-lg sm:ml-10 sm:rounded-full sm:px-6 sm:py-2 lg:py-3"
    >
      <input
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        className="w-full focus:outline-none"
        type="text"
      />
      <RxCross2
        onClick={() => setSearchField("")}
        className="hidden cursor-pointer text-2xl text-gray-500 sm:mr-2 sm:inline-flex"
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
