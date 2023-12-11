import React from 'react';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'filmApi/filmApi';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const Cast = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCast(movieId)
      .then(({ cast }) => {
        // console.log(data);
        setData([...cast]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {!isLoading ? (
        <div>
          <h2>Actors</h2>
          <ul>
            {data.map(({ cast_id, original_name, profile_path, character }) => (
              <li key={cast_id}>
                <div>
                  {profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={original_name}
                    />
                  ) : (
                    <img src={defaultImg} alt={original_name} width={250} />
                  )}
                </div>
                <h3>{original_name}</h3>
                <p>{character}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Cast;
