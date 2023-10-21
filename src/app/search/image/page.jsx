import ImageSearchResults from "@/app/components/ImageSearchResults";
import NoSearchResults from "@/app/components/NoSearchResults";
import fetchGoogleResults from "@/app/services/fetchGoogleResults";

async function ImageSearchPage({ searchParams: { start = "1", searchTerm } }) {
  const { data, hasResults } = await fetchGoogleResults(
    searchTerm,
    start,
    true,
  );

  if (!hasResults) return <NoSearchResults searchTerm={searchTerm} />;
  return <ImageSearchResults results={data} />;
}

export default ImageSearchPage;
