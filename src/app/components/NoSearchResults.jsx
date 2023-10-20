function NoSearchResults({ searchTerm }) {
  return (
    <div className="error-bg">
      <h1 className="font-semibold">{`No results could be found by "${searchTerm}"`}</h1>
      <p className="text-sm">
        try searching something else or check the spelling for any mistakes
      </p>
    </div>
  );
}

export default NoSearchResults;
