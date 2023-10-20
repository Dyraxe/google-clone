export default async function fetchGoogleResults(query) {
  const res =
    await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.GOOGLE_SEARCH_CONTEXT_API}&q=${query}
`);
  if (!res.ok)
    throw new Error(
      "Ops! Something went wrong while the data was being fetched",
    );
  const data = await res.json();
  const hasResults = Boolean(data.items);
  return { data, hasResults };
}
