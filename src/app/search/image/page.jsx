import ImageSearchResults from "@/app/components/ImageSearchResults";
import NoSearchResults from "@/app/components/NoSearchResults";
import fetchGoogleResults from "@/app/services/fetchGoogleResults";

async function ImageSearchPage({ searchParams: { searchTerm } }) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { data, hasResults } = await fetchGoogleResults(searchTerm, true);

  if (!hasResults) return <NoSearchResults searchTerm={searchTerm} />;
  return <ImageSearchResults results={data} />;
}

export default ImageSearchPage;
