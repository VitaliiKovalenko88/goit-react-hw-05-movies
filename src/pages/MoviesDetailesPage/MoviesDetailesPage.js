import { useEffect, useState } from 'react';

import {
  useParams,
  useLocation,
  Link,
  Outlet,
  NavLink,
} from 'react-router-dom';
// import { Cast } from "../Cast/Cast";
// import { Reviews } from "../Reviews/Reviews";
import { fetchDetaileMovie } from '../../serviceApi/servisApi';

export const MoviesDetaile = () => {
  const [movie, setFilm] = useState([]);

  const location = useLocation();
  const { movieId } = useParams();
  const path = location.state;

  useEffect(() => {
    fetchDetaileMovie(movieId)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch(error => {
        console.log(error);
      });
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
    <>
      {path && (
        <Link to={path.from.pathname === '/' ? '/' : '/movies'}>Go back</Link>
      )}

      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          <h2>
            {title} {release_date}
          </h2>
          <p>
            Use score: <span>{vote_average}</span>
          </p>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genre</h3>
          <p>
            {genres
              .map(({ name }) => {
                return name;
              })
              .join(', ')}
          </p>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      </div>
    </>
  );
};
