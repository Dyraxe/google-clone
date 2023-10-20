import Link from "next/link";

function ImageSearchResults({ results }) {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 px-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {results.items.map((result) => (
          <div className="mb-8" key={result.link}>
            <div className="group">
              <Link href={result.image.contextLink}>
                <img
                  className="h-60 w-full object-contain transition-shadow group-hover:shadow-xl"
                  src={result.link}
                  alt={result.title}
                />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className="truncate text-xl decoration-blue-800 group-hover:underline">
                  {result.title}
                </h2>
              </Link>
              <Link href={result.image.contextLink}>
                <p className="text-gray-600 decoration-blue-800 group-hover:underline">
                  {result.displayLink}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSearchResults;
