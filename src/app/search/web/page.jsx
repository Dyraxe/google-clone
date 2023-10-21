import NoSearchResults from "@/app/components/NoSearchResults";
import WebSearchResults from "@/app/components/WebSearchResults";
import fetchGoogleResults from "@/app/services/fetchGoogleResults";

async function WebSearchPage({ searchParams: { start = "1", searchTerm } }) {
  const { data, hasResults } = await fetchGoogleResults(searchTerm, start);

  if (!hasResults) return <NoSearchResults searchTerm={searchTerm} />;
  return <WebSearchResults results={data} />;
}

export default WebSearchPage;
