import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";
function SearchHeader() {
  return (
    <header className="sticky  top-0 bg-white">
      <div className="flex w-full items-center justify-between   p-6">
        <Link href={"/"}>
          <Image
            alt="Google logo"
            width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden space-x-2 md:inline-flex">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="ml-2 rounded-md bg-blue-500 px-2 py-2 font-medium text-white transition-all hover:shadow-md hover:brightness-105 sm:px-6">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}

export default SearchHeader;
