async function WebSearchPage({ searchParams: { searchTerm } }) {
  const res =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.GOOGLE_SEARCH_CONTEXT_API}&q=${searchTerm}
`);
  const data = await res.json();
  const results = data.items;
  return (
    <>
      {results.map((result) => (
        <p key={result.cacheId}>{result.title}</p>
      ))}
    </>
  );
}

export default WebSearchPage;
