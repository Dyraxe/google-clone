import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
function HomeHeader() {
  return (
    <header className="flex select-none justify-end p-5 text-sm">
      <div className="flex items-center space-x-4">
        <Link className="hover:underline" href="https://mail.google.com">
          Gmail
        </Link>
        <Link className="hover:underline" href="https://image.google.com">
          Images
        </Link>

        <TbGridDots className="rounded-full bg-transparent p-2 text-4xl hover:bg-gray-200" />
        <button
          className="rounded-md 
        bg-blue-500 px-6 py-2 font-medium text-gray-100 transition-shadow hover:shadow-md hover:brightness-105 "
        >
          Sign in
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
