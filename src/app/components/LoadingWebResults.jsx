function LoadingWebResults({ color = "bg-gray-200" }) {
  return (
    <div
      className={`mx-auto w-full animate-pulse px-3 pt-10 sm:pl-[5%] md:pl-[15%] lg:pl-52`}
    >
      <div className={`mb-2.5  h-2.5 w-48 rounded-full ${color}`}></div>
      <div className={`mb-2.5 h-3.5 max-w-[360px] rounded-full ${color}`}></div>
      <div className={`mb-2 h-2.5 max-w-[560px] rounded-full  ${color}`}></div>
      <div className={`mb-2 h-2.5 max-w-[530px] rounded-full  ${color} `}></div>
    </div>
  );
}

export default LoadingWebResults;
