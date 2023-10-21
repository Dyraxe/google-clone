"use client";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
function PaginationButtons() {
  const fullPath = usePathname();
  const params = useSearchParams();
  const searchTerm = params.get("searchTerm");
  const startIndex = +params.get("start") || 1;
  return (
    <div className="flex justify-between px-10 text-blue-700 sm:justify-start sm:space-x-44 sm:px-0">
      {startIndex >= 10 && (
        <Link
          href={`${fullPath}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
          className=""
        >
          <div className="flex flex-col items-center hover:underline">
            <GoArrowLeft className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${fullPath}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
          className=""
        >
          <div className="flex flex-col items-center hover:underline">
            <GoArrowRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default PaginationButtons;
