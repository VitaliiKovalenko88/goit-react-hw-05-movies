import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { fetchMovieByQuery } from '../../serviceApi/servisApi';
import notFound from '../../image/NotFound.jpg';
import {
  ImageMovie,
  MovieItem,
  MoviesList,
  NameMovie,
  Wrapper,
} from './MoviePage.styled';
import { Container } from 'components/Container/Container';
import { LinkEl } from 'pages/HomePage/HomePage';

const MoviesPage = () => {
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
    <Container>
      <SearchBar onSubmite={handleFormSubmite} />
      <>
        <MoviesList>
          {movies.map(({ id, title, poster_path }) => {
            return (
              <MovieItem key={id}>
                <LinkEl to={`/movies/${id}`} state={{ from: location }}>
                  <Wrapper>
                    {poster_path ? (
                      <ImageMovie
                        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                        alt={title}
                        width={150}
                      />
                    ) : (
                      <ImageMovie src={notFound} alt="no poster" width={150} />
                    )}
                  </Wrapper>
                  <NameMovie>{title}</NameMovie>
                </LinkEl>
              </MovieItem>
            );
          })}
        </MoviesList>
      </>
    </Container>
  );
};

export default MoviesPage;
