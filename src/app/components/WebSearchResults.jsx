import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButtons from "./PaginationButtons";
function WebSearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[15%] lg:pl-52">
      <p className="mb-5 mt-3 text-sm text-gray-500">
        About {results?.searchInformation?.formattedTotalResults} results (
        {results?.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items.map((result) => (
        <div className="mb-8 max-w-xl xl:max-w-[70%]" key={result.link}>
          <div className="group flex flex-col">
            <Link className="truncate text-sm" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className="truncate text-xl font-medium text-blue-800 decoration-blue-800 group-hover:underline"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default WebSearchResults;
