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

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        setCast(prevCast => [...prevCast, ...cast]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading ? <p>Content loading...</p> : null}
      {!isLoading ? (
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
                      <ImageCast
                        src={notFaund}
                        alt={original_name}
                        width="100"
                      />
                    )}
                  </Wrapper>
                  <NameTitle>{original_name}</NameTitle>
                  <CharacterCast>{character}</CharacterCast>
                </CastItem>
              );
            })}
          </CastList>
        </div>
      ) : null}
    </>
  );
};

export default Cast;
