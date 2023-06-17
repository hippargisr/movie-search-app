import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ResultList: React.FC = () => {
  const results = useSelector((state: RootState) => state.search.results);
  const isLoading = useSelector((state: RootState) => state.search.isLoading);
  console.log("HERE:::", results);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{results.Title}</h1>
          <h2>{results.Year}</h2>
          <p>{results.Plot}</p>
        </>
      )}
    </div>
  );
};

export default ResultList;
