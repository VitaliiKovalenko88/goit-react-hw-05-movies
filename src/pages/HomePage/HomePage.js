import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { fetchTrendingMovies } from '../../serviceApi/servisApi';
import { mapper } from '../../helpers/getPop';
import { Button } from 'components/Button/Button';
import { Container } from 'components/Container/Container';
import {
  Title,
  MoviesList,
  MoviesListItem,
  Wrapper,
  Image,
  TitleItem,
  MainEl,
} from './HomePage.styled';

export const LinkEl = styled(Link)`
  text-decoration: none;
`;

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [trendingMovies, setTrendiingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies(page)
      .then(({ data }) => {
        setTrendiingMovies(prevFilms => [
          ...prevFilms,
          ...mapper(data.results),
        ]);
      })
      .catch(error => console.log(error));
  }, [page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <MainEl>
      <Container>
        <Title>Trends today</Title>
        <>
          <MoviesList>
            {trendingMovies.map(({ poster_path, title, id }) => {
              return (
                <MoviesListItem key={id}>
                  <LinkEl to={`movies/${id}`} state={{ from: location }}>
                    <Wrapper>
                      <Image
                        src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                        alt={title}
                      />
                    </Wrapper>
                    <TitleItem>{title}</TitleItem>
                  </LinkEl>
                </MoviesListItem>
              );
            })}
          </MoviesList>
        </>

        <Button onLoadMore={onLoadMore} />
      </Container>
    </MainEl>
  );
};

export default HomePage;
