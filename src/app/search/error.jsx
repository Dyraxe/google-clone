"use client";

import { useEffect } from "react";

function Error({ reset, error }) {
  //   useEffect(() => {
  //     console.log(error);
  //   }, [error]);
  return (
    <div className="error-bg">
      <h1 className="font-semibold">{error.message}</h1>
      <button onClick={() => reset()} className="btn bg-blue-500 text-white">
        Try Again
      </button>
    </div>
  );
}

export default Error;
