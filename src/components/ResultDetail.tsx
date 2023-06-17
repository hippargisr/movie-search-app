import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { searchSuccess } from '../redux/slices/searchSlice';
import axios from 'axios';

interface MovieDetail {
  title: string;
  year: string;
  imdbID: string;
  poster: string;
  // Add other details as needed
}

const ResultDetail: React.FC<{
  imdbID: string;
}> = ({ imdbID }) => {
  const dispatch = useDispatch();
  const movie = useSelector((state: RootState) =>
    state.search.results.find((result) => result.imdbID === imdbID)
  );

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const apiKey = 'YOUR_OMDB_API_KEY';
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
        const movieDetail: MovieDetail = response.data;
        dispatch(searchSuccess([movieDetail]));
      } catch (error) {
        // Handle error
      }
    };

    if (!movie) {
      fetchMovieDetail();
    }
  }, [dispatch, imdbID, movie]);

  if (!movie) {
    return <p>Loading movie detail...</p>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Year: {movie.year}</p>
      {/* Display other details as needed */}
    </div>
  );
};

export default ResultDetail;
