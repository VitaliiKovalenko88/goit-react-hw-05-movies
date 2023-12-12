import React from 'react';
import { useState, useEffect } from 'react';
import css from './Cast.module.css'
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
          <h2 className={css.title} >Actors</h2>
          <ul className={css.list} >
            {data.map(({ cast_id, original_name, profile_path, character }) => (
              <li className={css.item} key={cast_id}>
                <div className={css.wrapper} >
                  {profile_path ? (
                    <img className={css.img}
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={original_name}
                    />
                  ) : (
                    <img className={css.img} src={defaultImg} alt={original_name} />
                  )}
                </div>
                <h3 className={css.nameTitle}>{original_name}</h3>
                <p className={css.characterCast} >{character}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Cast;
