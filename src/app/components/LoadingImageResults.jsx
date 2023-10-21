function LoadingImageResults({ color = "bg-gray-200" }) {
  return (
    <div className="animate-pulse">
      <div className={`mb-4 h-48 w-48 ${color} rounded-md`}></div>
      <div className={`mb-2.5 h-2 w-48 ${color} rounded-md`}></div>
      <div className={`mb-2.5 h-2 w-44 ${color} rounded-md`}></div>
    </div>
  );
}

export default LoadingImageResults;
