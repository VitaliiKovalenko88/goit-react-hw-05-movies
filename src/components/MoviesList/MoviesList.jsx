import React from 'react';
import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, location }) => (
  <ul>
    {movies.map(({ id, poster_path, title }, index) => (
      <li key={id}>
        <Link to={`movies/${id}`} state={{ from: location }}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
              alt={title}
              width={200}
            />
          </div>
        </Link>
      </li>
    ))}
  </ul>
);
