"use client";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
function SearchHeaderOptions() {
  const router = useRouter();
  const params = useSearchParams().get("searchTerm");
  const fullPath = usePathname();
  const pathname = fullPath.split("/").at(-1);
  return (
    <div className="flex w-full select-none justify-center space-x-2 border-b text-sm text-gray-700 lg:justify-start lg:pl-52">
      <div
        onClick={() => router.push(`/search/web?searchTerm=${params}`)}
        className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent px-2 pb-3 active:text-blue-500 ${
          pathname === "web" && "!border-blue-600 !text-blue-500"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => router.push(`/search/image?searchTerm=${params}`)}
        className={`flex cursor-pointer items-center space-x-1 border-b-4 border-transparent px-2 pb-3 active:text-blue-500 ${
          pathname === "image" && "!border-blue-600 !text-blue-500"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Image</p>
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
