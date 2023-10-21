import LoadingImageResults from "@/app/components/LoadingImageResults";

function Loading() {
  return (
    <div className="mx-2 grid max-w-6xl grid-cols-1 px-3 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:pl-52 xl:grid-cols-4">
      {Array.from({ length: 10 }, (_, i) => (
        <LoadingImageResults key={i} />
      ))}
    </div>
  );
}

export default Loading;
