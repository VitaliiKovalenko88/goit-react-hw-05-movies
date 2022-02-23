import { useEffect, useState } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { fetchDetaileMovie } from '../../serviceApi/servisApi';

import {
  Wrapper,
  BackLink,
  ImgWrapper,
  TextContentWrapper,
  ImgEl,
  Title,
  Text,
  SubTitle,
  PagesList,
  PageLink,
} from './MoviesDetaliesPage.styled';
import { Container } from 'components/Container/Container';

const MoviesDetaile = () => {
  const [movie, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const { movieId } = useParams();
  const path = location.state;

  useEffect(() => {
    setIsLoading(true);

    fetchDetaileMovie(movieId)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  const {
    title,
    release_date,
    overview,
    poster_path,
    vote_average,
    genres = [],
  } = movie;

  return (
    <Container>
      {path && (
        <BackLink to={path.from.pathname === '/' ? '/' : '/movies'}>
          Go back
        </BackLink>
      )}
      {!path && <BackLink to={'/'}>Go back</BackLink>}
      {isLoading ? <p>Content loading...</p> : null}
      {!isLoading ? (
        <Wrapper>
          {poster_path ? (
            <ImgWrapper>
              <ImgEl
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
            </ImgWrapper>
          ) : null}
          <TextContentWrapper>
            <Title>
              {title} {release_date}
            </Title>
            <Text>
              Use score: <span>{vote_average}</span>
            </Text>
            <SubTitle>Overview</SubTitle>
            <Text>{overview} </Text>
            <SubTitle>Genre</SubTitle>
            <Text>
              {genres
                .map(({ name }) => {
                  return name;
                })
                .join(', ')}
            </Text>

            <SubTitle>Additional information</SubTitle>

            <PagesList>
              <li>
                <PageLink to={`/movies/${movieId}/cast`}>Cast</PageLink>
              </li>
              <li>
                <PageLink to={`/movies/${movieId}/reviews`}>Reviews</PageLink>
              </li>
            </PagesList>

            <Outlet />
          </TextContentWrapper>
        </Wrapper>
      ) : null}
    </Container>
  );
};

export default MoviesDetaile;
