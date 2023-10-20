import NoSearchResults from "@/app/components/NoSearchResults";
import WebSearchResults from "@/app/components/WebSearchResults";
import fetchGoogleResults from "@/app/services/fetchGoogleResults";

async function WebSearchPage({ searchParams: { searchTerm } }) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const { data, hasResults } = await fetchGoogleResults(searchTerm);

  if (!hasResults) return <NoSearchResults searchTerm={searchTerm} />;
  return <WebSearchResults results={data} />;
}

export default WebSearchPage;
