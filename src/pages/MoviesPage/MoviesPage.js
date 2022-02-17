import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { fetchMovieByQuery } from '../../serviceApi/servisApi';
import movie from '../../image/movie.jpg';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query).then(({ results }) => {
        setMovies(results);
      });
    }
  }, [query]);

  const handleFormSubmite = query => {
    setSearchParams({ query: query });
  };

  return (
    <>
      <SearchBar onSubmite={handleFormSubmite} />
      <ul>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <div>
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title}
                      width={150}
                    />
                  ) : (
                    <img src={movie} alt="no poster" width={150} />
                  )}
                </div>
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
