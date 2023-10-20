async function WebSearchPage({ searchParams: { searchTerm } }) {
  const res =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.GOOGLE_SEARCH_CONTEXT_API}&q=${searchTerm}
`);
  if (!res.ok)
    throw new Error(
      "Ops! Something went wrong while the data was being fetched",
    );
  const data = await res.json();
  const results = data.items;
  if (!results)
    return (
      <div className="error-bg">
        <h1 className="font-semibold">{`No results could be found by "${searchTerm}"`}</h1>
        <p className="text-sm">
          try searching something else or check the spelling for any mistakes
        </p>
      </div>
    );
  return (
    <>
      {results.map((result) => (
        <p key={result.cacheId}>{result.title}</p>
      ))}
    </>
  );
}

export default WebSearchPage;
