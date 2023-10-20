import Image from "next/image";
import HomeHeader from "./components/HomeHeader";
import HomeSearch from "./components/HomeSearch";

function page() {
  return (
    <>
      <HomeHeader />
      <main className="mt-24 flex select-none flex-col items-center">
        <Image
          width={300}
          height={100}
          alt="Google logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
        />
        <HomeSearch />
      </main>
    </>
  );
}

export default page;
