import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchMovieCast } from '../../serviceApi/servisApi';
import notFaund from '../../image/NotFound.jpg';
import {
  CastList,
  ImageCast,
  Wrapper,
  CastItem,
  Title,
  NameTitle,
  CharacterCast,
} from './Cast.styled';
import { Container } from 'components/Container/Container';
const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  console.log(cast);
  useEffect(() => {
    setIsLoading(true);
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        setCast(prevCast => [...prevCast, ...cast]);
      })
      .catch(() => setError('something went wrong, try again later'));
  }, [movieId]);

  return (
    <div>
      <Title>Actors</Title>
      <CastList>
        {cast.map(({ cast_id, original_name, profile_path, character }) => {
          return (
            <CastItem key={cast_id}>
              <Wrapper>
                {profile_path ? (
                  <ImageCast
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt="name"
                    width="200"
                  />
                ) : (
                  <ImageCast src={notFaund} alt={original_name} width="100" />
                )}
              </Wrapper>
              <NameTitle>{original_name}</NameTitle>
              <CharacterCast>{character}</CharacterCast>
            </CastItem>
          );
        })}
      </CastList>
    </div>
  );
};

export default Cast;
