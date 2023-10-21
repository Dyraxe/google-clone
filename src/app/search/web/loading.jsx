import LoadingWebResults from "@/app/components/LoadingWebResults";

function Loading() {
  return (
    <>
      {Array.from({ length: 5 }, (_, i) => (
        <LoadingWebResults key={i} />
      ))}
    </>
  );
}

export default Loading;
