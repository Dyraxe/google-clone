import WebSearchResults from "@/app/components/WebSearchResults";
import fetchGoogleResults from "@/app/services/fetchGoogleResults";

async function WebSearchPage({ searchParams: { searchTerm } }) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const { data, hasResults } = await fetchGoogleResults(searchTerm);
  if (!hasResults)
    return (
      <div className="error-bg">
        <h1 className="font-semibold">{`No results could be found by "${searchTerm}"`}</h1>
        <p className="text-sm">
          try searching something else or check the spelling for any mistakes
        </p>
      </div>
    );
  return <WebSearchResults results={data} />;
}

export default WebSearchPage;
